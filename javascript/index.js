let previousInput = '';
let currentInput = '';
let previousOperator = '';
let currentOperator = '';
let display = document.getElementById('display');

//Number display on Screen
const appendNumber = (number) => {
    // display.value = '';
    currentInput += number;
    updatedDisplay();
}

//Append decimal point to Number
const appendPoint = (point) => {
    currentInput += point;
    updatedDisplay();
}

//Displaying Operator 
const appendOperator = (operator) => {
    if (currentInput == '') return;
    if (previousInput != '') calculate();
    console.log(currentOperator)
    if (currentOperator != '') {
        currentOperator = ''
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
    updatedDisplay();
}

const calculate = () => {
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

    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';
    updatedDisplay()
}

const clearDisplay = () => {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    display.value = '0';
}

const startBtn = () => {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    display.value = '';

}

const updatedDisplay = () => {
    display.value = `${previousInput}${currentOperator}${currentInput}`;
}
