/**24. Text Highlighting
Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8
characters. The highlighted words should be with a yellow background color. */

const paragraph = document.getElementById("paragraph");
const words = paragraph.textContent.split(/\s+/);

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
        const span = document.createElement("span");
        span.textContent = words[i];
        span.classList.add("highlight");
        paragraph.replaceChild(span, paragraph.childNodes[i]);
    }
}

