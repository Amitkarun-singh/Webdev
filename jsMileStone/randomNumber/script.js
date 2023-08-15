/*16. Generate a random number
Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
Use a self-invoking arrow function to generate the random number. This program can be used as a component
in various games or applications that require a random number generator.*/

const generateRandomNumber = () => {
    // Generate a random number between 0 and 1.
    const randomNumber = Math.random();
  
    // Multiply the random number by 100 and round it up to get a number between 1 and 100.
    const roundedRandomNumber = Math.floor(randomNumber * 100) + 1;
  
    // Return the rounded random number.
    return roundedRandomNumber;
  };
  
  // Generate the random number and print it to the console.
  const randomNumber = generateRandomNumber();
  console.log(`The random number is ${randomNumber}`);
  