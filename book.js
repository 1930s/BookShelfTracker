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
        const book = {
            title: title,
            author: author,
            status: bookStatus 
        };
        
        Storage.saveBook(book);
        Display.books(); 
    }
}
