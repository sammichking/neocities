import puppeteer from "puppeteer";


const url = "https://www.musictaste.xyz/release/wXVWsefP8vxb_";

const main = async() => {
    const browser = await puppeteer.launch({headless:false});
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
                    console.log(goodSpan);
                    const albumSelector = goodSpan.lastElementChild;
                    const artistName = goodSpan.lastElementChild.textContent;
                    console.log(artistName)
                    
                    //const artistName = 5;

                    const albumNameSpan = spans[i+1];
                    const albumName = albumNameSpan.textContent;
                    console.log(albumName);
                    return [image,albumName,artistName];
                    
                }
            }
        }
        // if not found
        return null;
        
        
        

    }, url)
    await page.screenshot({path:'musictaste2.png',fullPage:true});
    await page.screenshot({path:'musictaste3.png',fullPage:true});
    console.log(bookData[0]);
    console.log(bookData[1]);
    console.log(bookData[2]);

    await browser.close();
}

main()
