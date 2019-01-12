class Book{
    constructor(name, author, code, status){
        this.name = name;
        this.author = author;
        this.code = code;
        this.status = status;
    }
    static add(event) {
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
    static editBookModal(bookCode) {
        
    }
    static changeState(event, selectedOption) {
        event.preventDefault();
        const newStatus = selectedOption.innerText.toLowerCase();
        const bookCode = selectedOption.parentNode.getAttribute("data-code");
        if(newStatus == "delete") {
            Storage.deleteBook(bookCode);
        } else if(newStatus == "edit") {
            Display.editBookModal(bookCode);
        } else {
            Storage.changeBookStatus(bookCode, newStatus);
        }
        Display.books(); 

    }
}
