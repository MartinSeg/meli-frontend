import puppeteer from 'puppeteer'

test('End to End Testing', async () => {
    const browser = await puppeteer.launch({
        headless:false, 
        slowMo: 80,
        args: ['--window-size=1920, 1080']
    });  

    const page = await browser.newPage();
    // await page.goto('localhost:3000')
})