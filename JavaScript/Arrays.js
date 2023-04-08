// *How to declare Array in JavaScript

//First method:- declare an array using square brackets [], and separate the array elements with commas.

let arr=[1,2,3,4,5,];
console.log(arr);

//                                           OR

let arr1=[];
for(let i=0; i<5; i++){
    arr1[i]=i+1;
}
console.log(arr1);

// Second method:- Using the Array Constructor you can create an array using the Array constructor function.

let arr2 = new Array(1,2,3,4,5);
console.log(arr2);

//                                           OR

let arr3 = new Array(5); // Here 5 is the size of array arr3.
console.log(arr3);

// First index of array in javascript is 0 and last index is arrayname.length-1
// arrayname.length is in-bulit method/function of javascript which give size of array 

// *Most used Method or Function of Array.

// arrayname.push() - adds one or more elements to the end of an array and returns the new length of the array.

arr.push(6, 7);
console.log(arr);

// arrayname.pop() - removes the last element from an array and returns that element.

let pop = arr.pop();
console.log(pop);
console.log(arr);

// arrayname.shift() - removes the first element from an array and returns that element.

let shift = arr.shift();
console.log(shift);
console.log(arr);

// arrayname.unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.

arr.unshift(0, 1);
console.log(arr);

// arrayname.splice() - adds or removes elements from an array at a specified index.

    // Without removing any element and add    

arr.splice(2, 0, 10);
console.log(arr);

    // removing and adding element 

arr.splice(2, 1, 11, 15);
console.log(arr);

// arrayname.slice() - returns a shallow copy of a portion of an array into a new array object.
console.log(arr.slice(2, 5));

// arrayname.concat() - merges two or more arrays into a new array.

let arr4 = arr1.concat(arr2);
console.log(arr4);

// arrayname.indexOf() - returns the first index at which a given element can be found in an array.

console.log(arr4.indexOf(4));

// arrayname.lastIndexOf() - returns the last index at which a given element can be found in an array.

console.log(arr4.lastIndexOf(4));

// arrayname.join() - joins all elements of an array into a string.

console.log(arr1.join(","));

// arrayname.reverse() - reverses the order of the elements in an array in place.

console.log(arr4.reverse());

// arrayname.sort() - sorts the elements of an array in place.

console.log(arr4.sort());