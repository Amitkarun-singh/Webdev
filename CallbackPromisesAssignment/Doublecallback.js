/*Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.*/

function doubleArray(arr, callback) {
    const doubledArray = arr.map(num => callback(num));
    return doubledArray;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleArray(numbers, num => num * 2);
  console.log(doubledNumbers);