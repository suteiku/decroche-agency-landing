import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function stripQuotes(value) {
  const trimmed = String(value ?? "").trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).replace(/\\n/g, "\n");
  }
  return trimmed;
}

export function parseEnvFile(path) {
  const out = {};
  const malformed = [];
  if (!existsSync(path)) return { values: out, exists: false, malformed };
  const text = readFileSync(path, "utf8");
  text.split(/\r?\n/).forEach((line, index) => {
    const raw = line.trim();
    if (!raw || raw.startsWith("#")) return;
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) {
      malformed.push(index + 1);
      return;
    }
    out[match[1]] = stripQuotes(match[2]);
  });
  return { values: out, exists: true, malformed };
}

const ENV_ALIASES = {
  GOOGLE_CLIENT_ID: ["GOOGLE_ADS_CLIENT_ID"],
  GOOGLE_CLIENT_SECRET: ["GOOGLE_ADS_CLIENT_SECRET"],
  GOOGLE_SERVICE_ACCOUNT_EMAIL: ["GOOGLE_CLIENT_EMAIL"]
};

function applyAliases(env) {
  for (const [canonicalKey, aliases] of Object.entries(ENV_ALIASES)) {
    if (env[canonicalKey] && String(env[canonicalKey]).trim()) continue;
    for (const alias of aliases) {
      if (env[alias] && String(env[alias]).trim()) {
        env[canonicalKey] = env[alias];
        break;
      }
    }
  }
}

export function loadDecrocheEnv(localPath = ".env.local") {
  const resolvedLocal = resolve(localPath);
  const local = parseEnvFile(resolvedLocal);
  const fallbackList = (local.values.DECROCHE_ENV_FALLBACK_FILES || process.env.DECROCHE_ENV_FALLBACK_FILES || "")
    .split(":")
    .map((item) => item.trim())
    .filter(Boolean);

  const env = { ...process.env };
  const loadedFiles = [];
  for (const file of fallbackList) {
    const parsed = parseEnvFile(file);
    loadedFiles.push({ path: file, exists: parsed.exists, malformed: parsed.malformed });
    if (!parsed.exists) continue;
    for (const [key, value] of Object.entries(parsed.values)) {
      if (value) env[key] = value;
    }
  }

  loadedFiles.push({ path: resolvedLocal, exists: local.exists, malformed: local.malformed });
  if (local.exists) {
    for (const [key, value] of Object.entries(local.values)) {
      if (value) env[key] = value;
      else if (!(key in env)) env[key] = "";
    }
  }

  applyAliases(env);
  return { env, loadedFiles };
}

export function statusOf(env, key) {
  const value = env[key];
  return value && String(value).trim() ? "SET" : "MISSING";
}

export function cleanCustomerId(value) {
  return String(value || "").replace(/-/g, "").trim();
}

export function redactLongTokens(text) {
  return String(text || "").replace(/[A-Za-z0-9_./:+-]{16,}/g, "[REDACTED_LONG]");
}
