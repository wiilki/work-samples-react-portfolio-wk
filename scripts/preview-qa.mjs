import { chromium } from "playwright";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const build = path.join(root, "build");
const out = path.join(root, "docs", "previews");
const mime = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css", ".png":"image/png", ".svg":"image/svg+xml", ".jpg":"image/jpeg", ".ico":"image/x-icon", ".json":"application/json" };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const fullPath = path.resolve(build, "." + (pathname === "/" ? "/index.html" : pathname));
    if (fullPath !== build && !fullPath.startsWith(build + path.sep)) {
      res.writeHead(403); res.end(); return;
    }
    const bytes = await readFile(fullPath);
    res.writeHead(200, { "Content-Type": mime[path.extname(fullPath)] || "application/octet-stream" });
    res.end(bytes);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const url = "http://127.0.0.1:" + server.address().port;
await mkdir(out, {recursive:true});

const browser = await chromium.launch({headless:true,args:["--no-sandbox"]});
try {
  for (const [name, viewport] of [["desktop",{width:1440,height:900}],["mobile",{width:390,height:844}]]) {
    const context = await browser.newContext({viewport,deviceScaleFactor:1,reducedMotion:"reduce"});
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", error => pageErrors.push(error.message));
    const response = await page.goto(url,{waitUntil:"load",timeout:30000});
    assert.equal(response.status(),200);
    await page.locator(".hero h1").waitFor();
    await page.locator(".project-card").first().waitFor();
    assert.equal(await page.locator(".project-card").count(),14,"All 14 project cards should render");
    assert.equal(await page.locator(".tech-grid").count(),1,"The tech background must exist");
    assert.equal(await page.locator(".signal-strip").count(),1,"The signal strip must exist");
    assert.equal(await page.locator('a[href="https://atmos-weather-roan.vercel.app/"]').count(),1,"Updated Atmos URL must be present");
    const state = await page.evaluate(() => ({
      bg:getComputedStyle(document.body).backgroundColor,
      gridMotion:getComputedStyle(document.querySelector(".tech-grid")).animationName,
      overflow:document.documentElement.scrollWidth > window.innerWidth + 2,
    }));
    assert.equal(state.bg,"rgb(5, 11, 23)","The new dark theme should be active");
    assert.equal(state.gridMotion,"none","Reduced motion should disable grid animation");
    assert.equal(state.overflow,false,"Page should not overflow the viewport");
    if (name === "mobile") {
      const toggle = page.getByRole("button",{name:"Open navigation"});
      await toggle.click();
      assert.equal(await page.locator("#primary-navigation").getAttribute("class"),"primary-navigation is-open");
      await page.getByRole("button",{name:"Close navigation"}).click();
    }
    await page.screenshot({path:path.join(out,name+".png"),animations:"disabled"});
    assert.deepEqual(pageErrors,[],"Uncaught browser errors");
    console.log(name + " visual checks passed, background="+state.bg);
    await context.close();
  }
} finally {
  await browser.close();
  await new Promise(resolve=>server.close(resolve));
}
