/* 2. Calculator
Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbersQ
The calculator function should"
. Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator.
. Use a switch statement to determine which operation to perform based on the value of the operator.
. If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a variable called result.
. If the operator is not one of the valid operators, log "Invalid operator" to the console. */

let num1 = parseInt(prompt("Enter any number"));
let num2 = parseInt(prompt("Enter any number"));
let operator = prompt("Enter the operator(+, -, *, /)");
let sum;

switch(operator){
    case '+':
        sum = num1 + num2;
        document.getElementById('output').innerHTML = "Addition of two number is:-" + sum ;
        // console.log("Addition of two number is:-", sum);
    break;
    case '-':
        sum = num1 - num2;
        document.getElementById('output').innerHTML = "Subtraction of two number is:-" + sum ;
        // console.log("Subtraction of two number is:-", sum);
    break;
    case '*':
        sum = num1 * num2;
        document.getElementById('output').innerHTML = "Multiplication of two number is:-" + sum ;
        // console.log("Multiplication of two number is:-", sum);
    break;
    case '/':
        sum = num1 / num2;
        document.getElementById('output').innerHTML = "Division of two number is:-" + sum ;
        // console.log("Division of two number is:-", sum);
    break;
    default:
        document.getElementById('output').innerHTML = "Invalid operator" ;
        // console.log("Invalid operator");
    break;
}