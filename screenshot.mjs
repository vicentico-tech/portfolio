import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";

const outDir = "screenshots";
mkdirSync(outDir, { recursive: true });

const url = process.env.URL ?? "http://localhost:3000";

const browser = await puppeteer.launch({ headless: "new" });

const consoleErrors = [];
const pageErrors = [];

async function scrollThroughPage(page) {
  // Scroll to bottom in steps so IntersectionObserver fires for every section.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    const total = document.body.scrollHeight;
    for (let y = 0; y <= total; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise((r) => setTimeout(r, 200));
  });
}

async function capture(vp) {
  const page = await browser.newPage();
  await page.setViewport(vp);
  page.on("console", (m) => {
    if (m.type() === "error") consoleErrors.push(`[${vp.name}] ${m.text()}`);
  });
  page.on("pageerror", (e) => pageErrors.push(`[${vp.name}] ${e.message}`));

  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 500));

  // Hero shot before scrolling
  await page.screenshot({
    path: `${outDir}/${vp.name}-01-hero.png`,
    fullPage: false,
  });

  await scrollThroughPage(page);
  // scroll back through to each section anchor and screenshot
  const anchors = ["about", "journey", "skills", "portfolio", "contact"];
  for (let i = 0; i < anchors.length; i++) {
    const id = anchors[i];
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }, id);
    await new Promise((r) => setTimeout(r, 700));
    await page.screenshot({
      path: `${outDir}/${vp.name}-0${i + 2}-${id}.png`,
      fullPage: false,
    });
  }

  // Full page after all animations have fired
  await page.evaluate(() =>
    window.scrollTo({ top: 0, behavior: "instant" })
  );
  await new Promise((r) => setTimeout(r, 200));
  await page.screenshot({
    path: `${outDir}/${vp.name}-full.png`,
    fullPage: true,
  });

  await page.close();
}

await capture({ name: "desktop", width: 1440, height: 900 });
await capture({ name: "mobile", width: 390, height: 844 });

await browser.close();

console.log("CONSOLE_ERRORS:", consoleErrors.length);
consoleErrors.forEach((e) => console.log("  ·", e));
console.log("PAGE_ERRORS:", pageErrors.length);
pageErrors.forEach((e) => console.log("  ·", e));
console.log("Screenshots saved to ./screenshots/");
