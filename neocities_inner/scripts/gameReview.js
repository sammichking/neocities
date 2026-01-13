let url = window.location.pathname;

let reviewsArray = ["aiTheSomniumFiles.html","killer7.html","pikmin4.html","halfLife.html",
    "bluePrince.html","deadCells.html","cryptOfTheNecrodancer.html","hades.html","mario64.html"
]

let relativePath = "./"
let fileName = url.split("games/")[1];
if (url.includes("games/")){
    relativePath = "../"
    
}
let currentPosition = 0;
let nextPost = null;
let previousPost = null;
let body = document.querySelector("body");

for (let i =0; i<reviewsArray.length;i++){
    if (i == reviewsArray.length-1){
        currentPosition = i;
        previousPost = reviewsArray[i-1]

    }
    
    else if (fileName == reviewsArray[i]){
        currentPosition = i;
        previousPost = reviewsArray[i-1]
        let prev = document.createElement("div");
        prev.setAttribute("class","postNavigator")
        prev.textContent = previousPost.split(".")[0];
        body.appendChild(prev)
        nextPost = reviewsArray[i+1]
        let next = document.createElement("div")
        next.setAttribute("class","postNavigator")
        next.textContent = nextPost.split(".")[0];
        body.appendChild(next)
        
    }
}






