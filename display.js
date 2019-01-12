class Display{

    static books(bookStatus) {
        /* TODO: Reduce the length of the function. It does to much. Check if it can be
           modified to not need bookStatus argument. 
        */
        const books = (typeof bookStatus == "string") ? Storage.getBooks(bookStatus) : Storage.getBooks();
        const booksContainer = document.getElementById("booksDisplay");
        const colors = {"reading": "bg-warning",
                        "to read": "bg-info",
                        "completed": "bg-success"}
        booksContainer.innerHTML = "";
        
        books.forEach(book =>{
            const newBook = document.createElement("div");
            newBook.classList.add("card");
            newBook.classList.add("mb-3");
            newBook.classList.add(colors[book.status]);
            newBook.classList.add("relative");
            newBook.innerHTML = "<div class='dropdown'>"
                                    +"<button class='dropdown-toggle btn text-white dropdown-arrow' type='button' data-toggle='dropdown'>Book Status</button>"
                                    +"<div class='dropdown-menu border-primary' data-code='"+book.code+"'>"
                                        +"<a href='#' class='dropdown-item' data-bookChange>To Read</a>"
                                        +"<a href='#' class='dropdown-item' data-bookChange>Reading</a>"
                                        +"<a href='#' class='dropdown-item' data-bookChange>Completed</a>"
                                        +"<a href='#' class='dropdown-item  text-info' data-bookChange data-toggle='modal' data-target='#addNewBook'>Edit</a>"
                                        +"<a href='#' class='dropdown-item  text-danger' data-bookChange>Delete</a>"
                                    +"</div>"
                                +"</div>"
                                +"<a href='#' class='text-white' data-toggle='modal' data-target='#bookInfo'>"
                                    +"<div data-book='open' data-code='"+book.code+"' class='card-body'>"
                                        +"<h3>"+book.title+"</h3>"
                                        +"<p>"+book.author+"</p>"
                                        +"<p>"+book.category+"</p>"
                                     +"</div>"
                                +"</a>"
            booksContainer.appendChild(newBook);
        });   
    }
    static bookInfo(book) {
        const bookTitle = document.getElementById("bookName");
        const bookInfoBody = document.getElementById("bookInfoBody");
        const bookCode = book.getAttribute("data-code");
        bookInfoBody.setAttribute("data-code", bookCode);
        bookTitle.innerText = book.querySelector("h3").innerText;
        bookInfoBody.innerHTML = "<p>Did you read this book toady?</p>"
                                 +"<button class='btn btn-primary' id='showQuestionsButton'>Yes</button>"
                                 +"<button class='btn btn-primary' data-dismiss='modal'>No</button>"
    }
    static questions(button) {
        const bookCode = button.parentNode.getAttribute("data-code");
        const bookCategory = Storage.getBookCategory(bookCode);
        const categoryQuestions = Storage.getRandomQuestionsByBookCategory(bookCategory);
        const commonQuestions = Storage.getRandomGlobalQuestions();
        const questionsContainer = button.parentNode;
        let questionsOnHtml = "";
        console.log(categoryQuestions, commonQuestions);
        while (categoryQuestions.length != 0 && commonQuestions.length != 0) {
            questionsOnHtml += "<p>" + categoryQuestions.shift() +"</p>";
            questionsOnHtml += "<p>" + commonQuestions.shift() +"</p>";
        }
        questionsContainer.innerHTML = "<h3>Then, question time!</h3>" 
                                        + questionsOnHtml
                                        +"<button class='btn btn-primary' data-dismiss='modal'>Done</button>";
        
        
    }
    static booksByStatus(status) {
        if(status != "faq"){
            Display.books(status);
        }
    }
}