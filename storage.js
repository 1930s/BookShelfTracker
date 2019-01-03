class Storage{
    static loadBooks(bookStatus) {
        let books;
        if(window.localStorage.getItem("books") === null){
            books = [];
        }else{
            //books = JSON.parse(window.localStorage.getItem("books"));
        }
        /* TEST CASE BELOW */
        books = [{
            title: "Book1",
            author: "Juan",
            category: "novel",
            status: "reading",
            code: 1
        }, {
            title: "Book2",
            author: "Juancho",
            category: "biography",
            status: "completed",
            code: 2
        }, {
            title: "Book3",
            author: "Juanchito",
            category: "history",
            status: "to read",
            code: 2
        }];

        if(bookStatus != undefined && books.length > 0){
            return books.filter(book => {
                if(book.status == bookStatus) return book;
            });
        }
        return books;
    }
    static saveBook(book) {
        const books = this.loadBooks();
        books.push(book);
        
    }
}