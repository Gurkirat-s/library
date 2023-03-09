const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let someBook = new Book("Of Mice and Men", "John Steinbeck", 175, true);
let someBook2 = new Book(
  "The Fellowship of the Ring",
  "J.R.R. Tolkien",
  435,
  false
);
let someBook3 = new Book(
  "The Game of Thrones",
  "George R. R. Martin",
  1000,
  true
);

const form = document.getElementById("form");
const modalClose = document.querySelector(".close-modal");
const formModal = document.querySelector(".form-container");
const addBookBtn = document.querySelector(".btn-add-book");
const bookDisplay = document.querySelector(".book-display");

form.addEventListener("submit", onFormSubmit);
modalClose.addEventListener("click", hideForm);
addBookBtn.addEventListener("click", showForm);

addBookToLibrary(someBook);
addBookToLibrary(someBook2);
addBookToLibrary(someBook3);
renderLibrary();

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBook(book) {
  myLibrary.splice(myLibrary.indexOf(book), 1);
  renderLibrary();
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log("Book Added");
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
  newDiv.classList.add("book-card");

  const titleH = document.createElement("h2");
  titleH.textContent = book.title;
  newDiv.appendChild(titleH);

  const authorP = document.createElement("p");
  authorP.classList.add("author");
  authorP.textContent = book.author;
  newDiv.appendChild(authorP);

  const pagesP = document.createElement("p");
  pagesP.classList.add("pages");
  pagesP.textContent = "Pages: " + book.pages;
  newDiv.appendChild(pagesP);

  const readP = document.createElement("p");
  if (book.read) {
    readP.textContent = "Read";
  } else {
    readP.textContent = "Not Read";
  }
  readP.classList.add("read");
  newDiv.appendChild(readP);

  const readBtn = document.createElement("button");
  readBtn.classList.add("btn", "btn-toggle-read");
  readBtn.textContent = "Read";
  readBtn.addEventListener("click", () => {
    book.read = !book.read;
    renderLibrary();
  });
  newDiv.appendChild(readBtn);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "btn-remove-book");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    removeBook(book);
  });
  newDiv.appendChild(removeBtn);

  return newDiv;
}

function renderLibrary() {
  bookDisplay.innerHTML = "";
  myLibrary.forEach((book, index) => {
    let newBookCard = createBookCard(book);
    newBookCard.dataset.index = index;
    bookDisplay.appendChild(newBookCard);
  });
}
