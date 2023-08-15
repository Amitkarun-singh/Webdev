/* 9. Check for Divisibility.
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. Use a for loop and continue statement.*/

let number = [2, 3, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30]
let divisible = [];
for(let i=0; i<number.length; i++){
    if((number[i]%3 == 0) && (number[i]%2 !=0)){
        divisible.push(number[i]);
    }else{
        continue;
    }
}
console.log(divisible);