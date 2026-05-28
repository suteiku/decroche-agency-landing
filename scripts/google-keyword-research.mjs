import { loadDecrocheEnv, cleanCustomerId, redactLongTokens } from "./env-utils.mjs";

const { env } = loadDecrocheEnv();
const cliKeywords = process.argv.slice(2).filter((item) => item && item !== "--");
const keywords = cliKeywords.length
  ? cliKeywords
  : ["assistant ia", "agence ia", "standard téléphonique ia"];

function requireKeys(keys) {
  const missing = keys.filter((key) => !env[key] || !String(env[key]).trim());
  if (missing.length) {
    console.error("missing_env=" + missing.join(","));
    process.exit(2);
  }
}

requireKeys([
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GOOGLE_ADS_REFRESH_TOKEN",
  "GOOGLE_ADS_DEVELOPER_TOKEN",
  "GOOGLE_ADS_CUSTOMER_ID"
]);

async function getAccessToken() {
  const body = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID.trim(),
    client_secret: env.GOOGLE_CLIENT_SECRET.trim(),
    refresh_token: env.GOOGLE_ADS_REFRESH_TOKEN.trim(),
    grant_type: "refresh_token"
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("oauth_refresh=failed");
    console.error(`http_status=${res.status}`);
    console.error(`oauth_error=${data.error || "UNKNOWN"}`);
    console.error(`oauth_error_description=${redactLongTokens(data.error_description || "")}`);
    process.exit(3);
  }
  return data.access_token;
}

function microsToCurrency(value) {
  if (value === undefined || value === null) return "";
  return (Number(value) / 1_000_000).toFixed(2);
}

const accessToken = await getAccessToken();
const customerId = cleanCustomerId(env.GOOGLE_ADS_CUSTOMER_ID);
const loginCustomerId = cleanCustomerId(env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || env.GOOGLE_ADS_MANAGER_CUSTOMER_ID || "");
const apiVersion = env.GOOGLE_ADS_API_VERSION || "v22";
const endpoint = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}:generateKeywordIdeas`;
const headers = {
  Authorization: `Bearer ${accessToken}`,
  "developer-token": env.GOOGLE_ADS_DEVELOPER_TOKEN.trim(),
  "Content-Type": "application/json"
};
if (loginCustomerId) headers["login-customer-id"] = loginCustomerId;

const body = {
  keywordPlanNetwork: env.GOOGLE_ADS_KEYWORD_NETWORK || "GOOGLE_SEARCH_AND_PARTNERS",
  keywordSeed: { keywords },
  language: env.GOOGLE_ADS_LANGUAGE_CONSTANT || "languageConstants/1002",
  geoTargetConstants: [env.GOOGLE_ADS_GEO_TARGET_CONSTANT || "geoTargetConstants/2250"],
  includeAdultKeywords: false,
  pageSize: 25
};

const res = await fetch(endpoint, { method: "POST", headers, body: JSON.stringify(body) });
const data = await res.json().catch(() => ({}));
if (!res.ok) {
  console.error("keyword_research=failed");
  console.error(`http_status=${res.status}`);
  console.error(`error=${redactLongTokens(JSON.stringify(data))}`);
  process.exit(4);
}

const rows = (data.results || [])
  .map((item) => {
    const metrics = item.keywordIdeaMetrics || {};
    return {
      keyword: item.text,
      avgMonthlySearches: Number(metrics.avgMonthlySearches || 0),
      competition: metrics.competition || "UNSPECIFIED",
      lowBid: microsToCurrency(metrics.lowTopOfPageBidMicros),
      highBid: microsToCurrency(metrics.highTopOfPageBidMicros)
    };
  })
  .filter((row) => row.keyword)
  .sort((a, b) => b.avgMonthlySearches - a.avgMonthlySearches);

console.log(`# Keyword Planner — Decroche Agency`);
console.log(`seed=${keywords.join(", ")}`);
console.log(`geo=${env.GOOGLE_ADS_GEO_TARGET_CONSTANT || "geoTargetConstants/2250"}`);
console.log(`language=${env.GOOGLE_ADS_LANGUAGE_CONSTANT || "languageConstants/1002"}`);
console.log("");
for (const row of rows) {
  console.log(`- ${row.keyword} | avg=${row.avgMonthlySearches} | competition=${row.competition} | cpc_low=${row.lowBid} | cpc_high=${row.highBid}`);
}
