class Book{
    constructor(name, author, code, status){
        this.name = name;
        this.author = author;
        this.code = code;
        this.status = status;
    }
    static add() {
        event.preventDefault();
        const newBookModal = document.getElementById("addNewBook");
        const title = document.getElementById("bookTitle").value;
        const author = document.getElementById("bookAuthor").value;
        const bookStatus = document.getElementById("bookStatus").value;
        const category = document.getElementById("bookCategory").value
        const code = Storage.getNewCode();
        const book = {
            title: title,
            author: author,
            status: bookStatus,
            category: category,
            code: code
        };
        Storage.saveBook(book);
        Display.books(); 
    }
    static changeState() {
        event.preventDefault();
        const newStatus = this.innerText;
        const bookCode = this.parentNode.parentNode.nextElementSibling.querySelector("[data-code]").getAttribute("data-code");
        if(newStatus == "Delete") {
            Storage.deleteBook(bookCode);
        } else {
            Storage.changeBookStatus(bookCode, newStatus);
        }
        Display.books(); 

    }
}
