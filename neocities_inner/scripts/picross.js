//let rows = 8;
//let columns = 6;
//addAll()
let deviceType = "web";
let fff = typeof screen.orientation
if (typeof screen.orientation !== "undefined" && typeof screen.orientation !== "object"){
    deviceType = "mobile";
}


let colour = "black";
let palette = Array.from(document.querySelectorAll(".colour2"));
for (let i=0;i<palette.length;i++){
    palette[i].style.backgroundColor = palette[i].getAttribute("id");
    palette[i].addEventListener("click", () => {
        colour = palette[i].getAttribute("id");
    })
}


function removeAll(){
    let drawingProper = document.querySelector(".drawingProper")
    for(let i=0;i<rows;i++){
        let rowDestinedForDeath = drawingProper.firstElementChild;
        drawingProper.removeChild(rowDestinedForDeath)
    }
}



function addAll(rows,columns){
    let cells = [];
    for (let i=0;i<rows;i++){
        let drawingProper = document.querySelector(".drawingProper")

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
        drawingProper.appendChild(rowContainer);
        for (let j=0;j<columns;j++){
            let cell = document.createElement("div");
            cell.setAttribute("class","cell");
            rowContainer.appendChild(cell);
            cells.push(cell);
        }
    }
    return cells

}

const practiceCode = "010010,111111,100001,110011,100001,101101,100001,111111"

function initialisation(drawingCode){
    let codeRows = drawingCode.split(",");
    let numRows = codeRows.length;
    let numColumns = codeRows[0].split("").length;
    let cells = addAll(numRows,numColumns)
    setCode(codeRows, cells);
    hintMaker(codeRows);
    //Takes in string of 1s and 0s separated by commas to indicate rows
    //use .split(",") to split rows into terms
    //then use .split("") on each term to split into the individual 1s and 0s
    //if 1 then setAttribute(".on") if 0 then (".off")
    //then put the cell on the page
    //afterwards we go through to have the minesweeper hints
    //how do the hints work?
        //they work by listing the runs of consecutive on cells in order
        //so for rows that's easy since right now I'm living in a row world
        //columns it's a little more tricky but still doable
        //columns you iterate throught the list of rows, like if we're doing column 2
        //we go rows[0][1], then rows[1][1], rows[2][1] etc
    
}

initialisation(practiceCode);

function setCode(codeRows,cells){
    let wholeCode = codeRows.join("");
    let separatedCode = wholeCode.split("");
    
    separatedCode.length == cells.length;
    
    for (let i =0;i<separatedCode.length;i++){
        let certainCell = cells[i];
        if (separatedCode[i] == 1){
            certainCell.setAttribute("id","on");
            certainCell.addEventListener("click", (event) => {
                if (deviceType == "mobile"){
                    //palette stuff
                    if (colour == "black"){
                        certainCell.style.backgroundColor = "black";
                    }
                    if (colour == "lightgrey"){
                        certainCell.style.backgroundColor = "black";
                        certainCell.textContent= "X";
                        certainCell.style.fontsize = 30;
                    }
                }
                else if (event.button == 0){
                    certainCell.style.backgroundColor = "black";
                }
                
                
                
            })
            certainCell.addEventListener("contextmenu", function(ev) {
                ev.preventDefault();
                //code for WRONG
                certainCell.style.backgroundColor = "black";
                certainCell.textContent = "X";
                certainCell.style.color = "white"
                certainCell.style.fontsize = 30;
            })
        }
        else{
            certainCell.setAttribute("id","off");
            certainCell.addEventListener("click", (event) => {
                if (deviceType == "mobile"){
                    //palette stuff
                    if (colour == "black"){
                        certainCell.style.backgroundColor = "lightgrey";
                        certainCell.textContent ="X";
                        certainCell.style.fontsize = 30;
                    }
                    if (colour == "lightgrey"){
                        certainCell.style.backgroundColor = "lightgrey";
                        
                    }
                }
                else if (event.button == 0){
                    //code for WRONG
                    certainCell.style.backgroundColor = "lightgrey";
                    certainCell.textContent = "X";
                    certainCell.style.fontsize = 30;
                }
                
                
                
            })
            certainCell.addEventListener("contextmenu", function(ev) {
                ev.preventDefault();
                certainCell.style.backgroundColor = "lightgrey";
            
            })
        }
        
    }
}

function hintMaker(codeRows){
    let rowHints = [];

    for (let i=0;i<codeRows.length;i++){
        let codeRow = codeRows[i];
        let rowArray = codeRow.split("");
        let counter = 0;
        let rowHint = [];
        for (let j=0;j<rowArray.length;j++){
            if (rowArray[j] == "1"){
                counter += 1;
            }
            if ((rowArray[j] == "0" && counter !== 0) || j == (rowArray.length-1)){
                rowHint.push(counter);
                counter = 0;
            }
        }
        rowHints.push(rowHint);
    }
    
    let rowHintContainer = document.querySelector(".rowHints");
    let rowContainers = Array.from(document.querySelectorAll(".rowContainer"));
    for (let i=0;i<rowContainers.length;i++){
        //I put the row hint in this spot:
        //parentNode.insertBefore(newNode, referenceNode)
        //to actually calculate the row spot
        //for each cell in a certain row container
        //check if hasAttribute(.on), if yes then counter += 1;
        //if not then hints.push(counter), counter reset to 0
        let niceNumbers = rowHints[i].join(" ");
        let hint = document.createElement("div");
        hint.setAttribute("class","rowHint");
        hint.textContent = niceNumbers;
        rowHintContainer.appendChild(hint);
    }

    //Now for column hints

    let columnHints = []
    for (let i=0;i<codeRows[0].length;i++){
        //i = column number 
        let columnHint = []
        let counter = 0;
        for (let j=0; j<codeRows.length;j++){
            //j = row number
            let numberOfInterest = codeRows[j][i];
            if (numberOfInterest == "1"){
                counter += 1;
            }
            if ((numberOfInterest == "0" && counter !== 0) || j == (codeRows.length-1)){
                columnHint.push(counter);
                counter = 0;
            }
        }
        columnHints.push(columnHint);
    }
    let columnHintContainer = document.querySelector(".columnHints");
    for (let i=0;i<codeRows[0].length;i++){
        let niceNumbers = columnHints[i];
        let hint = document.createElement("div");
        hint.setAttribute("class","columnHint");
        
        
        for (let j=0;j<niceNumbers.length;j++){
            let innerHint = document.createElement("p");
            innerHint.setAttribute("class", "innerHint");
            innerHint.textContent = niceNumbers[j];
            hint.appendChild(innerHint);
            //let br = document.createElement("br");
            //hint.appendChild(br);
            
        }
        columnHintContainer.appendChild(hint);
        
        
        
    }
}

