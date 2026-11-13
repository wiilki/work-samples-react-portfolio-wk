/**
 * Capture genuine project-site screenshots for the portfolio.
 * Uses a browser rather than relying on transient third-party thumbnail APIs.
 *
 * Run: npm install --no-save playwright
 *      npx playwright install chromium
 *      node scripts/capture-previews.mjs
 *
 * The output files are committed by the one-time GitHub Actions capture job.
 */
import { chromium } from "playwright";
import { mkdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "public", "previews");
const sources = JSON.parse(await readFile(path.join(root, "scripts", "preview-sources.json"), "utf8"));
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
let successes = 0;
const failed = [];
try {
  for (const { id, url } of sources) {
    if (!/^[a-z0-9-]+$/.test(id) || new URL(url).protocol !== "https:") {
      throw new Error("Invalid screenshot source: " + id);
    }

    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
      colorScheme: "light",
    });

    try {
      console.log("Capturing " + id + " (" + url + ")");
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      if (!response || response.status() >= 400) {
        throw new Error("HTTP " + (response ? response.status() : "no response"));
      }
      await page.waitForLoadState("load", { timeout: 12000 }).catch(() => {});
      await page.evaluate(() => document.fonts?.ready).catch(() => {});
      await page.waitForTimeout(1800);

      const title = await page.title();
      if (/\\b404\\b|not found|deployment not found|authentication required/i.test(title)) {
        throw new Error("Site error page: " + title);
      }
      const bodyText = (await page.locator("body").innerText({ timeout: 5000 })).trim();
      if (bodyText.length < 25 || /404: NOT_FOUND|DEPLOYMENT_NOT_FOUND|Application error: a client-side exception/i.test(bodyText.slice(0, 400))) {
        throw new Error("Page rendered an error or has no meaningful content");
      }

      const out = path.join(outputDir, id + ".png");
      await page.screenshot({ path: out, type: "png", animations: "disabled", fullPage: false });
      if ((await stat(out)).size < 10000) {
        throw new Error("Screenshot too small; likely blank");
      }
      successes += 1;
      console.log("Saved " + out);
    } catch (error) {
      failed.push({ id, reason: String(error.message || error) });
      console.error("Skipping " + id + ": " + String(error.message || error));
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
console.log("Captured " + successes + " of " + sources.length + " published projects.");
for (const item of failed) console.log("Unavailable: " + item.id + " — " + item.reason);
if (!successes) process.exitCode = 1;
