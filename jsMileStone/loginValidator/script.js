/*Validate Password
You are building a login form for a website and need to validate user input using JavaScript. The form has two
input fields: email and password, and a submit button.
Your task is to implement JavaScript code that validates the email and password input fields. The email field
should contain the "@" symbol. The password field should have a minimum length of 8 characters. If either of
these conditions is not met, an error message “Invalid email or password!” should be displayed in red color as a
paragraph text below the form. If the password is valid the message “Valid email and password!” must be
displayed in green color as a paragraph text below the form.
Your code should run when the user clicks the submit button and should prevent the form from submitting if
the input is invalid. The input type of email must be text and the input type of password must be password
without any minLength attribute specified.*/
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const show = document.querySelector("#show");

    const email = emailInput.value;
    const password = passwordInput.value;

    if(email.includes("@") && password.length >= 8){
        show.textContent = "Valid email and password!";
        show.style.color="green";
    }else{
        show.textContent = "Invalid email or password!";
        show.style.color="red";
    }
});
