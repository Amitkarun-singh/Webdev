/*04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.*/

{
    console.log(letVar);   // Output: ReferenceError: Cannot access 'letVar' before initialization
    console.log(varVar);   // Output: undefined
    console.log(constVar); // Output: ReferenceError: Cannot access 'constVar' before initialization
  
    let letVar = 5;
    var varVar = 10;
    const constVar = 15;
  
    console.log(letVar);   // Output: 5
    console.log(varVar);   // Output: 10
    console.log(constVar); // Output: 15
  }
  