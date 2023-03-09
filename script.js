const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let someBook = new Book("Of Mice and Men", "John Steinbeck", 175, true);

const form = document.getElementById("form");
const modalClose = document.querySelector(".close-modal");
const formModal = document.querySelector(".form-container");
const addBookBtn = document.querySelector(".btn-add-book");
const bookDisplay = document.querySelector(".book-display");

form.addEventListener("submit", onFormSubmit);
modalClose.addEventListener("click", hideForm);
addBookBtn.addEventListener("click", showForm);

addBookToLibrary(someBook);
console.log(myLibrary);
renderLibrary();

function addBookToLibrary(book) {
  myLibrary.push(book);
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

  event.target.reset();

  addBookToLibrary(newBook);
  hideForm();
  renderLibrary();
}

function hideForm() {
  formModal.classList.add("hidden");
}

function showForm() {
  formModal.classList.remove("hidden");
}

function createBookCard(book) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("book-card");

  const titleH = document.createElement("h2");
  titleH.textContent = book.title;
  newDiv.appendChild(titleH);

  const authorP = document.createElement("p");
  authorP.textContent = book.author;
  newDiv.appendChild(authorP);

  const pagesP = document.createElement("p");
  pagesP.textContent = book.pages;
  newDiv.appendChild(pagesP);

  const readP = document.createElement("p");
  if (book.read) {
    readP.textContent = "Read";
  } else {
    readP.textContent = "Not Read";
  }
  newDiv.appendChild(readP);

  return newDiv;
}

function renderLibrary() {
  myLibrary.forEach((book) => {
    bookDisplay.appendChild(createBookCard(book));
  });
}
