// console.log("Hello World")
// console.log(this)
// console.log("Amit Singh"); 

// let greeting;
// greetign={};
// console.log(greetign)
// let a=3;
// let b=new Number(3);
// let c=3;
// console.log(a==b);
// console.log(a===b);
// console.log(b===c);
// let num=0;
// console.log(num++);
// console.log(++num);
// console.log(num);
// const sum = eval("10*10+5");
// console.log(sum);
// var number = 8;
// var number = 10;
// console.log(number);
// console.log(typeof typeof 1);
// const numbers = [1, 2, 3]
// numbers[10]=11;
// console.log(numbers);
// console.log(3+4+"5");
// console.log("I enrolled to the PW FSWD course"[0]);
// // const name = "PW Skills";
// // console.log(name());
// const one = false || {} || null;
// const two = null || false || "";
// const three = [] || 0 || true;
// console.log(one, two, three);
// var x = 2;
// var y = "2";
// console.log(x === y);
// for(let i=1; i<5; i++){
//     if(i===3) break;
//     console.log(i);
// }
// const name = "Pw Skills";
// console.log(!typeof name === "object");
// console.log(!typeof name === "string");
// var arr = [1, 2, 3, 4, 5];
// for(var i in arr){
//     if(a[i]%2 === 0){
//         console.log(a[i]);
//     }
// }
// var x = "20";
// switch (x) {
//     case 20:
//         console.log("X is equal to 20");
//         break;

//     default:
//         console.log("X is not equal to 20"); 
// }
// var x=20;
// var y = x >10 ? x < 30: "x is not grater then 10 and not less than 30"
// console.log(y);
// // var x1=(10>5)?"x is greater then 5"
// // console.log(x1);
// var x1 = 10;
// var y1 = "10";
// var z = x===y ? "equal" : "not equal";
// console.log(z);
// let xi=5;
// while (x<6) {
//     console.log(x);
// }

// conditional statement
let num=10;
if (num % 2 == 0) {
    console.log("The number given is an even number");
    }
// Input

 num = 11; // Output: The number given is an odd number
/* Condition 01: Any number that is completely divisible [ remainder must be 0 ] by 2
 then it is an even number.*/
if (num % 2 == 0) {
console.log("The number given is an even number");
} else {
console.log("The number given is an odd number");
}

// Input
num = 0; // Output: The number given is an even number
// Condition 03: Zero is neither an odd number nor an even number.
if (num == 0) {
console.log("Zero is neither an odd number nor an even number");
} else if (num % 2 == 0) {
/* Condition 01: Any number that is completely divisible [ remainder must be 0 ] by 2
then it is an even number. */
console.log("The number given is an even number");
} else {
/*Condition 02: Any number that is not completely divisible [ remainder must be 0 ]
by 2 then it is an odd number. */
console.log("The number given is an odd number");
}

// Ternary operator

let isTheUserLoggedIn = true;
let isTheCoursePurchased = false;
isTheUserLoggedIn
? isTheCoursePurchased
? console.log("Access Granted")
: console.log("Access Denied!! Please Buy The Course")
: console.log("Access Denied!! Please Login");
// OUTPUT : Access Denied!! Please Buy The Course

// Switch Statement

// Input
let day = 5; // Output: Thursday
switch (day) {
case 1: // if (day = = = 1) then execute this block)
console.log("Sunday");
break;
case 2: // if (day = = = 2) then execute this block)
console.log("Monday");
break;
case 3: // if (day = = = 3) then execute this block)
console.log("Tuesday");
break;
case 4: // if (day = = = 4) then execute this block)
console.log("Wednesday");
break;
case 5: // if (day = = = 5) then execute this block)
console.log("Thursday");
break;
case 6: // if (day = = = 6) then execute this block)
console.log("Friday");
break;
case 7: // if (day = = = 7) then execute this block)
console.log("Saturday");
break;
default: // if (expression = = = none of the previous conditions then execute this block)
console.log("Day doesn't exist");
}

// Loop
//for loop
for (let i = 0; i < 3; i++)
{
let name = "Amit Singh";
console.log(name);
}
// continue

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
    continue;
    }
    console.log(i);
    }
//while
//Break
let i = 0;
while (i < 5) {
console.log(i);
i++;
if (i == 3) {
break;
}
}
//do while
let result = '';
let k = 0;
do {
k = k + 1;
result = result + k;
} while (k < 7);
console.log(result);