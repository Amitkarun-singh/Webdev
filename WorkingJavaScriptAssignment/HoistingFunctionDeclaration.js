/**01. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call
the function before it is declared to demonstrate hoisting. */

addNumbers(5, 10); // This will work even though the function is called before declaration

function addNumbers(a, b) {
  return a + b;
}
