let previousInput = '';
let currentInput = '';
let previousOperator = '';
let currentOperator = '';
let display = document.getElementById('display');

//Number display on Screen
const appendNumber = (number) => {
    // display.value = '';
    currentInput += number;
    updatedDisplay(currentInput);
}

//Append decimal point to Number
const appendPoint = (point) => {
    currentInput += point;
    updatedDisplay(currentInput);
}

//Displaying Operator 
const appendOperator = (operator) => {
    if (previousInput !== '') {
        calculate()
    } else {
        previousInput = currentInput;
        updatedDisplay(operator);
    }

    if (currentInput == '' && previousInput !== '') return;
    else {
        currentOperator = operator;
        updatedDisplay(`${previousInput}${currentOperator}`)

    }

    currentInput = '';
    console.log(previousInput)
    console.log(currentOperator);
    console.log(currentInput)
}

// const appendOperation = (operator) => {

// }


const calculate = () => {
    console.log(previousInput)
    console.log(currentOperator);
    console.log(currentInput)
    if (previousInput == '' && currentInput == '') return;

    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput)
    let result;

    switch (currentOperator) {
        case '-':
            result = prev - curr;
            break;
        case '+':
            result = prev + curr;
            break;
        case '/':
            if (curr === 0) {
                display.value = 'Number is not divisible by 0'
                return;
            }
            result = prev / curr;
            break;
        case 'x':
            result = prev * curr;
            break;
        default:
            return;
    }

    previousInput = result;
    currentOperator = '';
    currentInput = '';
    console.log(previousInput)
    console.log(currentOperator);
    console.log(currentInput)
    updatedDisplay(`${previousInput}`)
}

const clearDisplay = () => {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    display.value = '0';
}

const updatedDisplay = (updated) => {
    display.value = updated;
}
