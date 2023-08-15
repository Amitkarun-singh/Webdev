function validateURL(url) {
    const pattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._]+[.][a-zA-Z]+$/;

    if (pattern.test(url)) {
        console.log(`The URL "${url}" is valid.`);
    } else {
        console.log(`The URL "${url}" is not valid.`);
    }
}

const inputURL = "https://www.example.com";
validateURL(inputURL);
