const puppeteer = require("puppeteer");

const url = "https://www.musictaste.xyz/release/wXVWsefP8vxb_";

const main = async() => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);
    //await page.waitForSelector('#cover')

    const html = await page.content();
    //console.log(html)

    const title = await page.evaluate(()=>{
        const cover = document.querySelector("#cover").getAttribute('src');
        return cover;
});
    console.log(title);

    


    await browser.close();
}


main();