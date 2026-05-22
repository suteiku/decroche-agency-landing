import { loadDecrocheEnv, statusOf, cleanCustomerId, redactLongTokens } from "./env-utils.mjs";

const { env, loadedFiles } = loadDecrocheEnv();

const groups = {
  public_site: ["NEXT_PUBLIC_SITE_URL", "NEXT_PUBLIC_CONTACT_EMAIL"],
  hermes_telegram: ["HERMES_PROFILE", "OBSIDIAN_VAULT_PATH", "TELEGRAM_BOT_TOKEN", "TELEGRAM_ALLOWED_USERS", "TELEGRAM_HOME_CHANNEL"],
  ai_providers: ["OPENAI_API_KEY", "ANTHROPIC_API_KEY", "OPENROUTER_API_KEY", "GOOGLE_API_KEY", "GEMINI_API_KEY", "FAL_KEY", "FIRECRAWL_API_KEY"],
  voice_assistant_vapi: [
    "VAPI_API_KEY",
    "VAPI_BASE_URL",
    "VAPI_ASSISTANT_ID",
    "NEXT_PUBLIC_VAPI_PUBLIC_KEY",
    "NEXT_PUBLIC_VAPI_ASSISTANT_ID",
    "VAPI_PHONE_NUMBER_ID",
    "VAPI_SERVER_URL",
    "VAPI_CREDENTIAL_ID",
    "VAPI_WEBHOOK_SECRET"
  ],
  seo_research: [
    "SERPER_API_KEY",
    "FIRECRAWL_API_KEY",
    "GOOGLE_PLACES_API_KEY",
    "GOOGLE_DISCOVERY_ENGINE_PROJECT_ID",
    "GOOGLE_DISCOVERY_ENGINE_LOCATION",
    "GOOGLE_DISCOVERY_ENGINE_ID",
    "GOOGLE_DISCOVERY_ENGINE_SERVING_CONFIG"
  ],
  composio: ["COMPOSIO_API_KEY", "COMPOSIO_MCP_URL", "COMPOSIO_ENTITY_ID"],
  google_ads_keyword_planner: [
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "GOOGLE_ADS_DEVELOPER_TOKEN",
    "GOOGLE_ADS_REFRESH_TOKEN",
    "GOOGLE_ADS_CUSTOMER_ID",
    "GOOGLE_ADS_MANAGER_CUSTOMER_ID",
    "GOOGLE_ADS_LOGIN_CUSTOMER_ID",
    "GOOGLE_ADS_API_VERSION"
  ],
  ga_gsc: ["GA4_PROPERTY_ID", "GSC_SITE_URL", "GOOGLE_SERVICE_ACCOUNT_EMAIL", "GOOGLE_PRIVATE_KEY"],
  optional_delivery: ["VERCEL_TOKEN", "VERCEL_TEAM", "RESEND_API_KEY", "AIRTABLE_API_KEY", "NOTION_API_KEY"]
};

console.log("Decroche env verification — no secret values are printed.");
console.log("env_files:");
for (const file of loadedFiles) {
  console.log(`- ${file.path}: ${file.exists ? "present" : "missing"}${file.malformed?.length ? ` malformed_lines=${file.malformed.join(",")}` : ""}`);
}

for (const [group, keys] of Object.entries(groups)) {
  console.log(`\n[${group}]`);
  for (const key of keys) console.log(`${key}=${statusOf(env, key)}`);
}

const googleReady = ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GOOGLE_ADS_REFRESH_TOKEN"].every((key) => statusOf(env, key) === "SET");
if (!googleReady) {
  console.log("\n[google_oauth_refresh]");
  console.log("status=SKIPPED_MISSING_CLIENT_OR_REFRESH_TOKEN");
} else {
  console.log("\n[google_oauth_refresh]");
  try {
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
    console.log(`http_status=${res.status}`);
    console.log(`oauth_refresh=${res.ok ? "ok" : "failed"}`);
    if (!res.ok) {
      console.log(`oauth_error=${data.error || "UNKNOWN"}`);
      console.log(`oauth_error_description=${redactLongTokens(data.error_description || "")}`);
    }
  } catch (error) {
    console.log("oauth_refresh=failed");
    console.log(`error_type=${error.constructor?.name || "Error"}`);
  }
}

const customerId = cleanCustomerId(env.GOOGLE_ADS_CUSTOMER_ID);
const keywordPlannerReady = ["GOOGLE_ADS_DEVELOPER_TOKEN", "GOOGLE_ADS_REFRESH_TOKEN"].every((key) => statusOf(env, key) === "SET") && Boolean(customerId);
console.log("\n[keyword_planner]");
console.log(`ready=${keywordPlannerReady}`);
console.log(`customer_id_shape=${customerId ? /^\d+$/.test(customerId) : false}`);
console.log(`api_version=${env.GOOGLE_ADS_API_VERSION || "v22"}`);

console.log("\n[vapi_probe]");
if (statusOf(env, "VAPI_API_KEY") !== "SET") {
  console.log("status=SKIPPED_MISSING_VAPI_API_KEY");
} else {
  try {
    const baseUrl = (env.VAPI_BASE_URL || "https://api.vapi.ai").replace(/\/$/, "");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`${baseUrl}/assistant`, {
      method: "GET",
      headers: { Authorization: `Bearer ${env.VAPI_API_KEY.trim()}` },
      signal: controller.signal
    });
    clearTimeout(timer);
    console.log(`http_status=${res.status}`);
    console.log(`status=${res.ok ? "ok" : "failed"}`);
  } catch (error) {
    console.log("status=probe_failed");
    console.log(`error_type=${error.constructor?.name || "Error"}`);
  }
}

console.log("\n[composio_probe]");
if (statusOf(env, "COMPOSIO_MCP_URL") !== "SET") {
  console.log("status=SKIPPED_MISSING_COMPOSIO_MCP_URL");
} else {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(env.COMPOSIO_MCP_URL, { method: "GET", signal: controller.signal });
    clearTimeout(timer);
    console.log(`http_status=${res.status}`);
    console.log("status=reachable_or_requires_mcp_handshake");
  } catch (error) {
    console.log("status=probe_failed");
    console.log(`error_type=${error.constructor?.name || "Error"}`);
  }
}
