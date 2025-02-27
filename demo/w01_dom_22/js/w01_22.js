const userInput = document.querySelector('.input-number');
const addBtn = document.querySelector('.btn-add');
const subtractBtn = document.querySelector('.btn-subtract');
const divideBtn = document.querySelector('.btn-divide');
const multiplyBtn = document.querySelector('.btn-multiply');

const currentResultOutput = document.querySelector('.current-result');
const currentCalculationOutput = document.querySelector('.current-calculation');

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}
function outputResult(result,text)
{
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
    console.log(text);
}

function compute(type)
{
    let calText = '';
    let result = 0;
    const operand1 = parseFloat(currentResult);
    const operand2 = getUserInput();
    switch(type)
    {
        case 'add':
            result = operand1 + operand2;
            calText = `${operand1} + ${operand2} = ${result}`;
            break;
        case 'substract':
            result = operand1 - operand2;
            calText = `${operand1} - ${operand2} = ${result}`;
            break;
        case 'divide':
            if(operand2 == 0)alert('Can not divide by 0');
            else {
                result = (operand1 / operand2).toFixed(2);
                calText = `${operand1} / ${operand2} = ${result}`;
            }
            break;
        case 'multiply':
            result = operand1 * operand2;
            calText = `${operand1} * ${operand2} = ${result}`;
            break;
    }
    currentResult = result;
    outputResult(result,calText);
}

addBtn.addEventListener('click',() => compute('add'));
subtractBtn.addEventListener('click',() => compute('substract'));
divideBtn.addEventListener('click',() => compute('divide'));
multiplyBtn.addEventListener('click',() => compute('multiply'));