// One-time helper to mint a Google Business Profile refresh token and discover
// your account + location IDs.
//
// Setup (one time):
//   1. In Google Cloud Console → your OAuth client → "Authorized redirect URIs",
//      add:  http://localhost:5555/oauth2callback
//   2. Make sure GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET are set in .env.local
//   3. Run:  node scripts/google-business-auth.mjs
//   4. Open the printed URL, approve, and copy the values it prints back into
//      .env.local (GOOGLE_REFRESH_TOKEN, GOOGLE_BUSINESS_ACCOUNT_ID,
//      GOOGLE_BUSINESS_LOCATION_ID).
//
// Uses only Node built-ins (http, fs) — no dependencies.

import http from "node:http";
import { readFileSync } from "node:fs";

const PORT = 5555;
const REDIRECT_URI = `http://localhost:${PORT}/oauth2callback`;
const SCOPE = "https://www.googleapis.com/auth/business.manage";

function loadEnv() {
  const env = {};
  try {
    const raw = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2];
    }
  } catch {
    /* ignore — fall back to process.env */
  }
  return { ...env, ...process.env };
}

const env = loadEnv();
const CLIENT_ID = env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Missing GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET in .env.local");
  process.exit(1);
}

const authUrl =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
  });

console.log("\n1) Open this URL in your browser and approve access:\n");
console.log(authUrl + "\n");
console.log(`2) Waiting for the redirect on ${REDIRECT_URI} ...\n`);

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith("/oauth2callback")) {
    res.writeHead(404).end();
    return;
  }
  const code = new URL(req.url, REDIRECT_URI).searchParams.get("code");
  if (!code) {
    res.writeHead(400).end("No code in callback.");
    return;
  }

  try {
    // Exchange the code for tokens.
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });
    const tokens = await tokenRes.json();
    if (!tokens.refresh_token) {
      throw new Error(
        "No refresh_token returned. Remove this app's access at " +
          "https://myaccount.google.com/permissions and try again.",
      );
    }

    // Best-effort discovery of account + location IDs.
    let accountId = "";
    let locationId = "";
    try {
      const accRes = await fetch(
        "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
        { headers: { Authorization: `Bearer ${tokens.access_token}` } },
      );
      const accJson = await accRes.json();
      const account = accJson.accounts?.[0]?.name; // "accounts/123"
      accountId = account?.split("/")[1] ?? "";
      if (account) {
        const locRes = await fetch(
          `https://mybusinessbusinessinformation.googleapis.com/v1/${account}/locations?readMask=name,title&pageSize=10`,
          { headers: { Authorization: `Bearer ${tokens.access_token}` } },
        );
        const locJson = await locRes.json();
        locationId = locJson.locations?.[0]?.name?.split("/")[1] ?? "";
      }
    } catch {
      /* discovery is optional; you can fill IDs in manually */
    }

    console.log("\n✅ Success! Add these to .env.local:\n");
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
    if (accountId) console.log(`GOOGLE_BUSINESS_ACCOUNT_ID=${accountId}`);
    if (locationId) console.log(`GOOGLE_BUSINESS_LOCATION_ID=${locationId}`);
    console.log("");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Done. You can close this tab and return to the terminal.</h2>");
  } catch (err) {
    console.error("\n❌ Token exchange failed:", err.message);
    res.writeHead(500).end("Token exchange failed — see terminal.");
  } finally {
    setTimeout(() => server.close(() => process.exit(0)), 500);
  }
});

server.listen(PORT);
