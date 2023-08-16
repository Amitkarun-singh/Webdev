/**Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order. */

function getTitleList(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles.sort());
  }
  
  const books = [
    { title: "Book C", author: "Author C", year: 2020 },
    { title: "Book A", author: "Author A", year: 2018 },
    { title: "Book B", author: "Author B", year: 2019 }
  ];
  
  function logTitles(titles) {
    console.log("Titles in alphabetical order:", titles);
  }
  
  getTitleList(books, logTitles);
  