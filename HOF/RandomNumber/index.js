function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;

    const intervalId = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime} seconds`);
            remainingTime--;
        } else {
            clearInterval(intervalId);
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}

const delayInSeconds = 3;
generateRandomNumberWithDelay(delayInSeconds);
