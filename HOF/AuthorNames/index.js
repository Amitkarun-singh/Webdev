const books = [
    { title: "Book A", author: "author a", year: 2005 },
    { title: "Book B", author: "author b", year: 2015 },
    { title: "Book C", author: "author c", year: 2012 }
];

const filteredAndCapitalizedBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
    }));

console.log("Original List of Books:", books);
console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);
