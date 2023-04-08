/*6. Vowel Counter
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
counted*/

let name = prompt("Enter your name.");
let vowelscount=0;
for(let i=0; i<name.length; i++){
    if((name.charAt(i) == 'a') || (name.charAt(i) == 'e') || (name.charAt(i) == 'i') || (name.charAt(i) == 'o') || (name.charAt(i) == 'u') || (name.charAt(i) == 'A') || (name.charAt(i) == 'E') || (name.charAt(i) == 'I') || (name.charAt(i) == 'O') || (name.charAt(i) == 'U')){
        vowelscount++;
    }
}
document.getElementById('output').innerHTML="Total number of vowels in your name is:- " + vowelscount;