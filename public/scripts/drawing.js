let rows = 16;
let columns = 16;
addAll()
let colour = "black";
let palette = Array.from(document.querySelectorAll(".colour"));
for (let i=0;i<palette.length;i++){
    palette[i].style.backgroundColor = palette[i].getAttribute("id");
    palette[i].addEventListener("click", () => {
        colour = palette[i].getAttribute("id");
    })
}
let sizeButton = document.querySelector(".buttons");


sizeButton.addEventListener("click",() =>{
    removeAll();
    rows = prompt("Number of rows:");
    columns = prompt("Number of columns");
    addAll();

})

function removeAll(){
    let drawingContainer = document.querySelector(".drawingContainer")
    for(let i=0;i<rows;i++){
        let rowDestinedForDeath = drawingContainer.firstElementChild;
        drawingContainer.removeChild(rowDestinedForDeath)
    }
}



function addAll(){
    for (let i=0;i<rows;i++){
        let drawingContainer = document.querySelector(".drawingContainer")

        let rowContainer = document.createElement("div");
        rowContainer.setAttribute("class","rowContainer");
        if (i==0){
            rowContainer.style.borderTop = "2px solid rgb(211,211,211)"
            rowContainer.style.marginTop = "2px"
        }
        if (i == (rows-1)){
            rowContainer.style.borderBottom = "2px solid rgb(211,211,211)"
            rowContainer.style.marginBottom = "2px"
        }
        drawingContainer.appendChild(rowContainer);
        for (let j=0;j<columns;j++){
            let cell = document.createElement("div");
            cell.setAttribute("class","cell");
            rowContainer.appendChild(cell);
            cell.addEventListener("click", () => {
                let palette = document.querySelector(".palette");
                cell.style.backgroundColor = colour;
            })
        }
    }

}


