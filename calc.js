//variables
const numbers = document.querySelectorAll('[data-number]');
const display = document.getElementById('display')
let displayValue = '';
const operators = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals');
const clear = document.getElementById('clearButton');
let operator = '';
let number1 = 0;
let number2 = 0;

//event listeners
for (let i=0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',printToDisplay)
};
for (let i=0; i < operators.length; i++) {
    operators[i].addEventListener('click',selectOperator)
};
equalsButton.addEventListener('click',equals);
clear.addEventListener('click',clearState)

//functions
function printToDisplay() {
    if (number1 !== 0) {
        number2 += this.dataset.number;
        let displayNumber2 = number2.toString();
        display.innerText = displayNumber2.substr(1);
    } else {
        displayValue += this.dataset.number;
        display.innerText = displayValue;
    }
}

function selectOperator() {
    if (operator != '') {
        equals();
        operator = this.dataset.operator;
        number1 = displayValue;
    } else {
        operator = this.dataset.operator;
        number1 = displayValue;
    }
};

function equals() {
    displayValue = operate(operator,number1,number2);
    if (displayValue.toString().length > 10) {
        let roundDown = displayValue.toFixed(10);
        display.innerText = roundDown;
        number2 = 0;
    } else {
        display.innerText = displayValue;
        number2 = 0;
    }
}

function add(number1,number2) {
    let sum = number1 + number2;
    return sum;
};

function subtract(number1,number2) {
    let difference = number1 - number2;
    return difference;
};

function multiply(number1,number2) {
    let product = number1 * number2;
    return product;
};

function divide(number1,number2) {
    let quotient = number1 / number2;
    return quotient;
};

function operate(operator,number1,number2) {
    let sign = operator.toString();
    let answer;
    number1 = Number(number1);
    number2 = Number(number2);
        switch (sign) {
            case '+':
                answer = add(number1,number2);            
                break;
            case '-':
                answer = subtract(number1,number2);            
                break;
            case '*':
                answer = multiply(number1,number2);           
                break;
            case '/':
                answer = divide(number1,number2);         
                break;
            default:
                break;
        }
    return answer;
};

function clearState() {
    number1 = 0;
    number2 = 0;
    operator = '';
    displayValue = '';
    display.innerText = 0;
}