const newBookBtn = document.getElementById("new-book-btn")
const formEl = document.getElementById("form")
const authorEl = document.getElementById("author")
const titleEl = document.getElementById("title")
const pagesEl = document.getElementById("pages")
const checkboxEl = document.getElementById("checkbox-input")
const storedBooksEl = document.getElementById("stored-books")

let myLibrary = []

document.addEventListener("click", (e) => {
  const target = e.target
  const bookID = target.dataset.book
  if (target.id === "new-book-btn") {
    formEl.classList.remove("hidden")
  }
  if (target.id === "remove-book-btn") {
    removeBook(bookID)
    renderBooks()
  }
  if (target.id === "toggle-read-btn") {
    toggleRead(bookID)
    console.log(bookID)
    renderBooks()
  }
})

document.addEventListener("submit", addBookToLibrary)

function Book(author, title, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function addBookToLibrary(e) {
  e.preventDefault()
  formEl.classList.add("hidden")
  myLibrary.push(
    new Book(authorEl.value, titleEl.value, pagesEl.value, checkboxEl.checked)
  )
  clearInputs()
  renderBooks()
}

function renderBooks() {
  let bookData = ""
  //   iterate over array and print out books in a boilerplate
  for (let i = 0; i < myLibrary.length; i++) {
    const { author, title, pages, isRead } = myLibrary[i]
    bookData += `
    <div class="card-container"">
      <h2 class="book-author">${author}</h2>
      <h2 class="book-title">${title}</h2>
      <h2 class="book-pages">${pages}</h2>
      <button id="toggle-read-btn" data-book="${i}">${
      isRead ? "Unread" : "Read"
    }</button>
      <button id="remove-book-btn" data-book="${i}">Remove</button>
      </div>
  `
  }
  storedBooksEl.innerHTML = bookData
  console.log(myLibrary)
}

function removeBook(id) {
  myLibrary = myLibrary.filter((book, index) => index !== parseInt(id))
}

function clearInputs() {
  authorEl.value = ""
  titleEl.value = ""
  pagesEl.value = ""
  checkboxEl.checked = false
}

function toggleRead(id) {
  const getBook = myLibrary.filter((book, index) => index === parseInt(id))[0]

  getBook.isRead = !getBook.isRead
}

// all book objects are stored in myLibrary array
//

;[
  {
    title: "123",
    author: "123",
    pages: "123",
    isRead: false,
  },
]
