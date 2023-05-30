const myLibrary = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 336,
        hasRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        hasRead: false
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 432,
        hasRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        hasRead: true
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        pages: 224,
        hasRead: false
    },
    {
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        pages: 209,
        hasRead: true
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        pages: 288,
        hasRead: false
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 304,
        hasRead: true
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        pages: 585,
        hasRead: true
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: 280,
        hasRead: false
    }
];




const addbtn = document.querySelector('.add-book');
const bookForm = document.querySelector('.book-form');

addbtn.addEventListener('click', hideModal);
bookForm.addEventListener('submit', addBookToLibrary);

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(e) {
    e.preventDefault();

    createBook();

    bookForm.reset();

    hideModal();
    render();
}

function createBook() {
    const title = bookForm.title.value;
    const author = bookForm.author.value;
    const pages = bookForm.pages.value;
    const read = bookForm.read.checked

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function render() {
    const cardContainer = document.querySelector('.card-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => cardContainer.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        createBookElement(myLibrary[i], i);
    }
}

function createBookElement(book, index) {
    console.log(book);

    const cardContainer = document.querySelector('.card-container');
    const cardDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const buttonDiv = document.createElement('div')
    const isRead = document.createElement('button')
    const deleteBtn = document.createElement('button')

    cardDiv.classList.add('book');
    cardDiv.setAttribute('id', index);
    cardContainer.appendChild(cardDiv);

    titleDiv.textContent = book.title;
    cardDiv.appendChild(titleDiv);

    authorDiv.innerText = book.author;
    cardDiv.appendChild(authorDiv);

    pagesDiv.innerText = `${book.pages} pages`;
    cardDiv.appendChild(pagesDiv);

    cardDiv.appendChild(buttonDiv)

    deleteBtn.textContent = 'Delete Book'
    deleteBtn.setAttribute('id', 'removeBtn')
    buttonDiv.appendChild(deleteBtn)

    isRead.setAttribute('id', 'isRead')
    buttonDiv.appendChild(isRead)
    if (book.hasRead) {
        console.log(book.hasRead)
        isRead.innerText = "read";
        isRead.style.backgroundColor = "green"
    } else {
        isRead.innerText = "unread";
        isRead.style.backgroundColor = "red"
    }

    deleteBtn.addEventListener('click', () => {

        myLibrary.splice(myLibrary.indexOf(book), 1)
        render()
    })

    isRead.addEventListener('click', toggleRead)

    function toggleRead() {
        book.hasRead = !book.hasRead
        console.log(myLibrary)
        render()

    }
}

function hideModal() {
    let modal = document.getElementById('modal');
    modal.classList.toggle('hide');
}

render();
