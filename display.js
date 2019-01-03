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
            newBook.innerHTML = "<a href='#' class='text-white'><div class='card-body "+colors[book.status]+"'>"
                                    +"<h3>"+book.title+"</h3>"
                                    +"<p>"+book.author+"</p>"
                                +"</div></a>"
            booksContainer.appendChild(newBook);
        });   
    }
    static section() {
        const sectionToGo = this.innerText.toLowerCase();
        if(sectionToGo != "faq"){
            Display.books(sectionToGo);
        }
    }
}