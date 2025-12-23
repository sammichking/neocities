let currentOperation = [[]];
let display = document.querySelector(".container .calculator .frame .display");


function operate (symbol,number1,number2){

    if (symbol == "+"){
        return addNumbers(number1,number2)
    }
    if (symbol == "-"){
        return subtractNumbers(number1,number2)
    }
    if (symbol == "*"){
        return multiplyNumbers(number1,number2)
    }
    if (symbol == "/"){
        return divideNumbers(number1,number2)
    }
}

function addNumbers(number1, number2){
    //rounds to 3 decimals places because we are allowing decimals to be input, not just as
    //outputs of division
    return (Math.round((number1 + number2)*1000) / 1000);
}
function subtractNumbers(number1, number2){
    return (Math.round((number1 - number2)*1000) / 1000);
}
function multiplyNumbers(number1, number2){
    return (Math.round((number1 * number2)*1000) / 1000);
}
function divideNumbers(number1, number2){
    
    return (Math.round((number1 / number2)*1000) / 1000);
}

let numberButtons = document.querySelectorAll(".container .calculator .frame .row .number");

for (let i=0; i<numberButtons.length;i++){
    numberButtons[i].addEventListener("click", () => {
        let currentDisplay = display.textContent;
        if (currentDisplay == "5318008" || currentDisplay == "58008"){
            let pair = document.createElement("div");
            pair.textContent = "(.)(.)"
            body.appendChild(pair);
        }
        let newDisplay = currentDisplay + numberButtons[i].textContent;
        display.textContent = newDisplay;
    })
}
let operationButtons = document.querySelectorAll(".container .calculator .frame .row .operation");
let operationStrings = [];
for (let i=0; i<operationButtons.length;i++){
    operationStrings.push(operationButtons[i].textContent);
}

for (let i=0; i<operationButtons.length;i++){
    operationButtons[i].addEventListener("click", () => {
        let currentDisplay = display.textContent;
        if (currentDisplay == "5318008" || currentDisplay == "58008"){
            let pair = document.createElement("div");
            pair.textContent = "(.)(.)"
            body.appendChild(pair);
        }
        if (currentDisplay.length > 0){
            if (currentOperation.length == 2){
                let midpoint = currentDisplay.split(currentOperation[1])
                currentOperation[0][1] = midpoint[1]
                let outcome = operate(currentOperation[1],Number(currentOperation[0][0]),Number(currentOperation[0][1]))
                display.textContent = outcome
                currentOperation = [[]];
                currentDisplay = display.textContent
                currentOperation[0].push(currentDisplay);
                currentOperation.push(operationButtons[i].textContent)
                display.textContent = outcome + operationButtons[i].textContent;

            }
            else {
                
                let newDisplay = currentDisplay + operationButtons[i].textContent;
                display.textContent = newDisplay;
                currentOperation[0].push(currentDisplay);
                currentOperation.push(operationButtons[i].textContent)
            }
            //currentDisplay = display.textContent;
            
        }
        
    })
}

let equalsButton = document.querySelector(".container .calculator .frame .row .equals")

equalsButton.addEventListener("click", () => {
    let currentDisplay = display.textContent;
    if (currentDisplay == "5318008" || currentDisplay == "58008"){
        let pair = document.createElement("div");
        pair.textContent = "(.)(.)"
        body.appendChild(pair);
    }
    if (currentDisplay.length > 0){
        if (currentOperation.length == 2){
            let midpoint = currentDisplay.split(currentOperation[1])
            currentOperation[0][1] = midpoint[1]
            let outcome = operate(currentOperation[1],Number(currentOperation[0][0]),Number(currentOperation[0][1]))
            display.textContent = outcome
            currentOperation = [[]];
        }
    }
})

let decimalButton = document.querySelector(".container .calculator .frame .row .decimal")

decimalButton.addEventListener("click", () => {
    let currentDisplay = display.textContent;
    if (currentDisplay == "5318008" || currentDisplay == "58008"){
            let pair = document.createElement("div");
            pair.textContent = "(.)(.)"
            body.appendChild(pair);
        }
    let newDisplay = currentDisplay + decimalButton.textContent;
    display.textContent = newDisplay;
})



let body = document.body
body.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        equalsButton.click();
    }
    if (event.key === "Backspace"){
        currentDisplay = display.textContent;
        let newDisplay = currentDisplay.substring(0,currentDisplay.length-1);
        for (let i=0;i<operationStrings.length;i++){
            if (currentDisplay[currentDisplay.length - 1] == operationStrings[i]){
                currentOperation = [[]];
            }
        }
        
        
        display.textContent = newDisplay;
    }

    if (event.key == "."){
        decimalButton.click();
    }

    for (let i=0;i<operationButtons.length;i++){
        if (event.key == operationButtons[i].textContent){
            operationButtons[i].click()
        }
    }
    for (let i=0;i<numberButtons.length;i++){
        if (event.key == numberButtons[i].textContent){
            numberButtons[i].click();
        }
    }
});