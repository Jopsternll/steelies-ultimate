import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE_URL = 'http://localhost:3001';
const OUT_DIR = './screenshots';

const viewports = [
  { name: 'mobile',  width: 390,  height: 844  },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'laptop',  width: 1280, height: 800  },
];

const pages = [
  { name: 'home',        path: '/'             },
  { name: 'segmenten',   path: '/segmenten'    },
  { name: 'over-ons',    path: '/over-ons'     },
  { name: 'schappenplan',path: '/schappenplan' },
];

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();

for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();

  for (const pg of pages) {
    await page.goto(`${BASE_URL}${pg.path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: `${OUT_DIR}/${pg.name}_${vp.name}.png`,
      fullPage: true,
    });
    console.log(`✓ ${pg.name} @ ${vp.name}`);
  }

  await ctx.close();
}

await browser.close();
console.log('Done — screenshots saved to', OUT_DIR);
