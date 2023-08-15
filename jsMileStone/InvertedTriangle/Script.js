/* 8. Inverted right-angled triangle pattern with asterisks
Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks
with i rows.
Inverted right-angled pattern:
*****
****
***
**
*
If i=6*/

// let i=prompt("Enter any number");
let i=5;
while (i!=0) {
    let j=i;
    let line = '';
    while (j!=0) {
        line += '*';
        j--;
    }
    console.log(line);
    i--;
}