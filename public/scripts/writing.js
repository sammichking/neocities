
if (window.innerWidth < 1000){
    let paragraphs = Array.from(document.querySelectorAll("p"));
    let h3s = Array.from(document.querySelectorAll("h3"));
    let h2s = Array.from(document.querySelectorAll("h2"));
    let h1s = Array.from(document.querySelectorAll("h1"));
    for (let i=0;i<paragraphs.length;i++){
        paragraphs[i].style.marginLeft = "5%";
        paragraphs[i].style.marginRight = "5%";
        h1s[i].style.marginLeft = "5%";
        h1s[i].style.marginRight = "5%";
        h2s[i].style.marginLeft = "5%";
        h2s[i].style.marginRight = "5%";
        h3s[i].style.marginLeft = "5%";
        h3s[i].style.marginRight = "5%";
    }
}