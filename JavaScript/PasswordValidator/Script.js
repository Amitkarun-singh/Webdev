/* 1. Password Validator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.*/

let password = prompt("Enter the password");
let confirmedPassword = 'Amit4802';
if(password === confirmedPassword){
   document.getElementById('output').innerHTML = "Password Matched. Password validation Successful.";
    // console.log("Password Matched. Password validation Successful.");
}else{
    document.getElementById('output').innerHTML = "Password didn't match. Password validation unsuccessful.";
    // console.log("Password didn't match. Password validation unsuccessful.");
}