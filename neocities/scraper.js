const puppeteer = require("puppeteer");

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}


async function productScraper(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(100000);
    await page.goto(url);
    await page.keyboard.press()
    await page.waitForNavigation();
    //delay(100000);
    console.log("test please")
    //await page.waitForNavigation();
    //const container = await page.locator("#container #content > img");
    //test = container.innerHTML;
    const imgData = await page.evaluate((url) => {
        //console.log("first step")
        const test = url + "3";
        
        const body = document.querySelector("span")

        //const centerContent = document.querySelector("#centerContent");
        //const fullWidth = centerContent;


        //const container = document.querySelector('.showImage');
        //console.log("second step")
        //const content = container.querySelector('img').getAttribute('src');
        //console.log("third step")
        //const url2 = "https://past-the-watershed.neocities.org/"
        //const imgSrc = url2 + content.querySelector('img').getAttribute('src');

        return body
    }, url)

    console.log(imgData);




    //const img = await container.getProperty('src');
    //const srcText = img.jsonValue();
    //console.log({test});

    


}

productScraper("https://www.albumoftheyear.org/album/1511616-dove-ellis-blizzard.php")