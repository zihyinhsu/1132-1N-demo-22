const userInput = document.querySelector('.input-number');
const addBtn = document.querySelector('.btn-add');
const subtractBtn = document.querySelector('.btn-subtract');
const divideBtn = document.querySelector('.btn-divide');
const currentResultOutput = document.querySelector('.current-result');
const currentCalculationOutput = document.querySelector('.current-calculation');

const defaultResult = 0;
let currentResult = defaultResult;

// console.log('userInput',userInput);
// console.log('addBtn',addBtn);
// console.log('currentResultOutput',currentResultOutput);

function getUserInput(){
    return parseInt(userInput.value);
}
function outputResult(result,text)
{
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

function add(){
    const operand1 = parseFloat(currentResult);
    const operand2 = getUserInput();
    currentResult = operand1 + operand2;
    const calText = `${operand1} + ${operand2}`;    
    console.log('calText: ',calText);
    outputResult(currentResult,calText);
}

addBtn.addEventListener('click',add);

function subtract(){
    const operand1 = parseFloat(currentResult);
    const operand2 = getUserInput();
    currentResult = operand1 - operand2;
    const calText = `${operand1} - ${operand2}`;    
    console.log('calText: ',calText);
    outputResult(currentResult,calText);
}

subtractBtn.addEventListener('click',subtract);

function divide(){
    const operand1 = parseFloat(currentResult);
    const operand2 = getUserInput();
    if(operand2 == 0)alert('Can not divide by 0');
    else {
        currentResult = (operand1 / operand2).toFixed(2);
        const calText = `${operand1} / ${operand2}`;    
        console.log('calText: ',calText);
        outputResult(currentResult,calText);
    }
}

divideBtn.addEventListener('click',divide);