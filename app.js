let myLibrary = [{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 324,
    haveRead: false
},
{
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    haveRead: false
},];
document.addEventListener('load', generateBookCards())

const addbtn = document.querySelector('.add-book')
const bookForm = document.querySelector('.book-form')


addbtn.addEventListener('click', hideModal)
bookForm.addEventListener('submit', addBookToLibrary)


function Book(title, author, numberOfPages, haveRead = false) {
    this.title = title,
        this.author = author,
        this.numberOfPages = numberOfPages,
        this.haveRead = haveRead

}

function addBookToLibrary(e) {
    e.preventDefault()
    let title = document.getElementById('book-title').value
    let author = document.getElementById('author-name').value
    let numberOfPages = parseInt(document.getElementById('number-pages').value)
    let haveRead = document.getElementById('have-read').checked


    const newBook = new Book(title, author, numberOfPages, haveRead)
    myLibrary.push(newBook)
    bookForm.reset()
    generateBookCards()
    hideModal()
}
function generateBookCards() {
    const cardContainer = document.querySelector('.card-container')
    let cardHtml = ''
    myLibrary.forEach(book => {
        let bookHtml = `
        <div class="book-card">
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.numberOfPages}</p>
            </div>
        `
        cardHtml += bookHtml
    })
    cardContainer.innerHTML = cardHtml
}
function hideModal() {
    let modal = document.getElementById('modal')
    modal.classList.toggle('hide')
}

console.log(myLibrary)

