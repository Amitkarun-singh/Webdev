/**02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their
product. Use function expressions to define the function and call the function before it is declared to
demonstrate hoisting. */

multiplyNumbers(3, 7); // This will cause an error

var multiplyNumbers = function(a, b) {
  return a * b;
};
