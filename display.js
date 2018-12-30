class Display{

    static showBooks() {
        const books = Storage.loadBooks();
        const booksContainer = document.getElementById("booksDisplay");
        books.forEach(book =>{
            const newBook = document.createElement("div");
            newBook.classList.add("card");
            newBook.innerHTML = "<div class='card-body'>"
                                    +"<h3>"+book.title+"</h3>"
                                    +"<p>"+book.author+"</p>"
                                +"</div>"
            booksContainer.appendChild(newBook);
        });   
    }
}