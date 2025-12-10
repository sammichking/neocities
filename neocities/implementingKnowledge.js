const puppeteer = require("puppeteer");

const url = "https://www.musictaste.xyz/release/wXVWsefP8vxb_";

const main = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil:'networkidle2',waitUntil:'domcontentloaded',waitUntil:'load',waitUntil:'networkidle0'});
   
    

    //I WAS RIGHT THESE MOTHERFUCKER ARRRRE TRYING TO DO SHIT BEFORE ITS LOADED
    const bookData = await page.evaluate((url) => {
        
        const images = document.querySelector('#cover').getAttribute('src');
        
        return images

    }, url)
    await page.screenshot({path:'musictaste2.png',fullPage:true});
    await page.screenshot({path:'musictaste3.png',fullPage:true});
    console.log(bookData);

    await browser.close();
}

main()