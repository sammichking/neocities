const puppeteer = require("puppeteer");

const url = "https://www.musictaste.xyz/release/wXVWsefP8vxb_";

const main = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil:'networkidle2',waitUntil:'domcontentloaded',waitUntil:'load',waitUntil:'networkidle0'});
   
    

    //I WAS RIGHT THESE MOTHERFUCKER ARRRRE TRYING TO DO SHIT BEFORE ITS LOADED
    const bookData = await page.evaluate((url) => {
        
        

        const image = document.querySelector('#cover').getAttribute('src');
        const spans = document.querySelectorAll('span');
        for (const i=0;i<=spans.length;i++){
            if (spans[i].hasAttribute('color')){
                if (spans[i].getAttribute('color') == 'sub'){
                    const goodSpan = spans[i];
                    const albumName = goodSpan.lastElementChild
                    const artistName = albumName.previousElementSibling;
                    return (image,albumData,artistName);
                    
                }
            }
        }
        // if not found
        return null;
        
        
        

    }, url)
    await page.screenshot({path:'musictaste2.png',fullPage:true});
    await page.screenshot({path:'musictaste3.png',fullPage:true});
    console.log(bookData);

    await browser.close();
}

main()

async function getAlbum(){
    let url = prompt("Enter musictaste.xyz album page url");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil:'networkidle2',waitUntil:'domcontentloaded',waitUntil:'load',waitUntil:'networkidle0'});
   
    

    //I WAS RIGHT THESE MOTHERFUCKER ARRRRE TRYING TO DO SHIT BEFORE ITS LOADED
    const albumData = await page.evaluate((url) => {
        
        const image = document.querySelector('#cover').getAttribute('src');
        
        const spans = document.querySelectorAll('span');
        for (const i=0;i<=spans.length;i++){
            if (spans[i].hasAttribute('color')){
                if (spans[i].getAttribute('color') == 'sub'){
                    const goodSpan = spans[i];
                }
            }
        }
        const albumName = goodSpan.lastElementChild();
        const artistName = goodSpan.previousElementSibling(albumName);
        
        return (image,albumData,artistName);

    }, url)
    await page.screenshot({path:'musictaste2.png',fullPage:true});
    await page.screenshot({path:'musictaste3.png',fullPage:true});
    console.log(bookData);
    await browser.close();


}