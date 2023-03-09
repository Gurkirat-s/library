const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let someBook = new Book("Of Mice and Men", "John Steinbeck", 175, true);

console.log(myLibrary);
addBookToLibrary(someBook);
console.log(myLibrary);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function renderLibrary() {
  for (i in myLibrary) {
    console.log(myLibrary[i]);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log("form submitted");
  let newBook = new Book(
    event.target.title.value,
    event.target.author.value,
    event.target.pages.value,
    event.target.read.checked
  );

  addBookToLibrary(newBook);
  console.log(myLibrary);
  renderLibrary();
}

const form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit);
