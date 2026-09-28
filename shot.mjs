import pkg from '/home/claude/.npm-global/lib/node_modules/playwright/index.js'; const { chromium } = pkg;

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500); // let loader finish
await page.screenshot({ path: '/tmp/hero.png' });

await page.evaluate(() => window.scrollTo(0, window.innerHeight * 4));
await page.waitForTimeout(800);
await page.screenshot({ path: '/tmp/services.png' });

await page.evaluate(() => window.scrollTo(0, window.innerHeight * 7));
await page.waitForTimeout(800);
await page.screenshot({ path: '/tmp/carousel.png' });

await page.goto('http://localhost:4173/contact', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
await page.screenshot({ path: '/tmp/contact.png' });

await browser.close();
console.log('done');
