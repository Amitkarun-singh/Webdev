/*19. Validate Password
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

function validate() {
    const form = document.querySelector('#myForm');
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;
  
    const index = email.indexOf("@");
  
    const newPara = document.createElement("p");
  
    if (index !== -1 && password.length >= 8) {
      newPara.textContent = "Valid email and password!";
      newPara.style.color = 'green';
    } else {
      newPara.textContent = "Invalid email and password!";
      newPara.style.color = 'red';
    }
  
    document.body.appendChild(newPara);
  }
  