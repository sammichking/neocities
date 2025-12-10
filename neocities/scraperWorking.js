const puppeteer = require("puppeteer");

async function productScraper(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    //const container = await page.locator("#container #content > img");
    //test = container.innerHTML;
    const imgData = await page.evaluate((url) => {
        const container = document.querySelector('#container');
        const content = container.querySelector('#content');
        const url2 = "https://past-the-watershed.neocities.org/"
        const imgSrc = url2 + content.querySelector('img').getAttribute('src');

        return container
    }, url)

    console.log(imgData);




    //const img = await container.getProperty('src');
    //const srcText = img.jsonValue();
    //console.log({test});

    


}

productScraper("https://past-the-watershed.neocities.org/posts/2025-08-18-001-Let-Em-Know-Im-Camera-Shy-A-Transgender-Reading-of-billy-woods")