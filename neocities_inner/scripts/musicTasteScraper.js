//const { default: puppeteer } = require("puppeteer");

//import puppeteer from "puppeteer";
var puppeteer = require("puppeteer")

const url = "https://www.musictaste.xyz/release/Q5jZmQz5mfO8"
//let url = prompt("Submit a musictaste.xyz link for the album!");

async function albumRecommendation(url){
    
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
                    let artistSpan = goodSpan.firstElementChild;
                    let artistName = goodSpan.firstElementChild.textContent;
                    let checker = 0;
                    while (checker == 0){
                        if (artistSpan.nextElementSibling != null){
                            let tempName = artistName + ", " + artistSpan.nextElementSibling.textContent;
                            artistSpan = artistSpan.nextElementSibling;
                            artistName = tempName;
                        }
                        else{
                            checker = 1;
                        }
                    }
                    
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
    console.log(bookData[0]);
    console.log(bookData[1]);
    console.log(bookData[2]);

    await browser.close();
}

albumRecommendation(url);
