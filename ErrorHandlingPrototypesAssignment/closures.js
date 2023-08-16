/*

9. Check the presence using closures.

Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.


*/

function numberChecker(numbers) {
    return function (num) {
      return numbers.includes(num);
    };
  }
  
  // Expected Result:
  const arr = [1, 2, 3, 4, 5];
  const checkNum = numberChecker(arr);
  
  console.log(checkNum(3)); // true
  console.log(checkNum(6)); // false
  
  