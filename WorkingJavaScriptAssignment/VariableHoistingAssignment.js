/**03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
the function using the var keyword and log its value to the console before it is assigned a value to
demonstrate variable hoisting. */

function sumNumbers(x, y) {
    console.log(result); // Output: undefined
    var result = x + y;
    console.log(result); // Output: sum of x and y
  }
  
  sumNumbers(5, 7);
  