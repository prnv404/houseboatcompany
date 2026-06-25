// Lists your Google Business Profile account + location IDs.
//
// Prereqs: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET and GOOGLE_REFRESH_TOKEN must
// already be set in .env.local (run scripts/google-business-auth.mjs first), and
// the "My Business Account Management" + "Business Information" APIs must be
// enabled in Google Cloud Console.
//
// Run:  node scripts/google-business-ids.mjs

import { readFileSync } from "node:fs";

function loadEnv() {
  const env = {};
  try {
    const raw = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2];
    }
  } catch {
    /* ignore */
  }
  return { ...env, ...process.env };
}

const env = loadEnv();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = env;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
  console.error(
    "Missing GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REFRESH_TOKEN in .env.local.\n" +
      "Run `node scripts/google-business-auth.mjs` first.",
  );
  process.exit(1);
}

async function accessToken() {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error("Could not refresh token: " + JSON.stringify(json));
  return json.access_token;
}

const token = await accessToken();
const auth = { headers: { Authorization: `Bearer ${token}` } };

const accRes = await fetch(
  "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
  auth,
);
const accJson = await accRes.json();

if (!accJson.accounts?.length) {
  console.error("No accounts returned:", JSON.stringify(accJson, null, 2));
  process.exit(1);
}

console.log("\nYour Business Profile accounts & locations:\n");
for (const account of accJson.accounts) {
  const accountId = account.name.split("/")[1]; // "accounts/123" -> "123"
  console.log(`Account: ${account.accountName ?? "(unnamed)"}`);
  console.log(`  GOOGLE_BUSINESS_ACCOUNT_ID=${accountId}`);

  const locRes = await fetch(
    `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title&pageSize=100`,
    auth,
  );
  const locJson = await locRes.json();
  for (const loc of locJson.locations ?? []) {
    const locationId = loc.name.split("/")[1];
    console.log(`    ${loc.title ?? "(untitled)"}  ->  GOOGLE_BUSINESS_LOCATION_ID=${locationId}`);
  }
  console.log("");
}
