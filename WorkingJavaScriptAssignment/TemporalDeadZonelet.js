/**05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
assigned a value to demonstrate the temporal dead zone. */

{
    console.log(blockVar); // Output: ReferenceError: Cannot access 'blockVar' before initialization
    let blockVar = 20;
  }
  