function reverseStringWithDelay(input) {
    setTimeout(() => {
        const reversed = input.split('').reverse().join('');
        console.log(`Original String: ${input}`);
        console.log(`Reversed String: ${reversed}`);
    }, 2000);
}

const input = "Hello, world!";
reverseStringWithDelay(input);
