class Storage{
    static loadBooks() {
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
            status: "reading",
            code: 1
        },{
            title: "Book1",
            author: "Juan",
            status: "reading",
            code: 2
        }];
        return books;
    }
    static saveBook(book) {
        const books = this.loadBooks();
        books.push(book);
        
    }
}