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