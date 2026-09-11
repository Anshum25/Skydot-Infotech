const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  const urls = [
    'http://localhost:5173/',
    'http://localhost:5173/about',
    'http://localhost:5173/solutions',
    'http://localhost:5173/products',
    'http://localhost:5173/work',
    'http://localhost:5173/contact'
  ];

  for (const url of urls) {
    console.log(`\nNavigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2' });
    // Wait a bit for React to render
    await new Promise(r => setTimeout(r, 1000));
    const title = await page.title();
    console.log(`Title: ${title}`);
    const bodyContent = await page.evaluate(() => document.body.innerHTML.substring(0, 100));
    console.log(`Body starts with: ${bodyContent.trim().substring(0, 50)}...`);
  }

  await browser.close();
})();
