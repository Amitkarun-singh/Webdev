function validateLinkedInProfileURL(url) {
    const pattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9\-_]{5,30}[a-zA-Z0-9]$/;

    if (pattern.test(url)) {
        console.log(`The LinkedIn profile URL "${url}" is valid.`);
    } else {
        console.log(`The LinkedIn profile URL "${url}" is not valid.`);
    }
}

const linkedInURL = "https://www.linkedin.com/in/john_doe123";
validateLinkedInProfileURL(linkedInURL);
