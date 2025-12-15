const puppeteer = require("puppeteer");

const url = "https://www.albumoftheyear.org/album/1401596-joanne-robertson-blurrr.php";

const main = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultTimeout(100000)
    await page.goto(url, {waitUntil:'networkidle2',waitUntil:'domcontentloaded',waitUntil:'load',waitUntil:'networkidle0'});
   
    

    //I WAS RIGHT THESE MOTHERFUCKER ARRRRE TRYING TO DO SHIT BEFORE ITS LOADED
    const bookData = await page.evaluate((url) => {
        
        const images = document.querySelector('.showImage img').getAttribute('src');
        
        return images

    }, url)
    
    console.log(bookData);

    await browser.close();
}

main()