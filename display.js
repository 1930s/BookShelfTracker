class Display{

    static books(bookStatus) {
        const books = (typeof bookStatus == "string") ? Storage.loadBooks(bookStatus) : Storage.loadBooks();
        const booksContainer = document.getElementById("booksDisplay");
        const colors = {"reading": "bg-warning",
                        "to read": "bg-info",
                        "completed": "bg-success"}
        booksContainer.innerHTML = "";
        
        books.forEach(book =>{
            const newBook = document.createElement("div");
            newBook.classList.add("card");
            newBook.classList.add("mb-3");
            newBook.innerHTML = "<div class='dropdown'>"
                                    +"<button class='dropdown-toggle btn' type='button' data-toggle='dropdown'>Change state</button>"
                                    +"<div class='dropdown-menu'>"
                                        +"<a href='#' class='dropdown-item' data-bookChange>To Read</a>"
                                        +"<a href='#' class='dropdown-item' data-bookChange>Reading</a>"
                                        +"<a href='#' class='dropdown-item' data-bookChange>Completed</a>"
                                        +"<a href='#' class='dropdown-item  text-danger' data-bookChange>Delete</a>"
                                    +"</div>"
                                +"</div>"
                                +"<a href='#' class='text-white' data-toggle='modal' data-target='#bookInfo'>"
                                    +"<div data-book='open' data-code='"+book.code+"' class='card-body "+colors[book.status]+"'>"
                                        +"<h3>"+book.title+"</h3>"
                                        +"<p>"+book.author+"</p>"
                                        +"<p>"+book.category+"</p>"
                                     +"</div>"
                                +"</a>"
            booksContainer.appendChild(newBook);
        });   
    }
    static bookInfo() {
        const bookTitle = document.getElementById("bookName");
        const bookInfoBody = document.getElementById("bookInfoBody");
        bookTitle.innerText = this.querySelector("h3").innerText;
    }
    static questions() {
        console.log(document.getElementById("bookName"));
    }
    static section() {
        const sectionToGo = this.innerText.toLowerCase();
        if(sectionToGo != "faq"){
            Display.books(sectionToGo);
        }
    }
}