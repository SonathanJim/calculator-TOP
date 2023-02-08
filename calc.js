const numbers = document.querySelectorAll('[data-number]');
for (let i=0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',printToDisplay)
};
const display = document.getElementById('display')
let displayValue = '';

function printToDisplay() {
    displayValue += this.dataset.number;
    display.innerText = displayValue;
}

const operators = document.querySelectorAll('[data-operator]');
for (let i=0; i < operators.length; i++) {
    operators[i].addEventListener('click',selectOperator)
};

let operator = '';

function selectOperator() {
    operator = this.dataset.operator;
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