//localStorage.clear();
document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    let book;

    if (clickedElement.matches("[data-book]") || clickedElement.parentNode.matches("[data-book]")){
        book = (clickedElement.matches("[data-book]")) ? clickedElement : clickedElement.parentNode;
        Display.bookInfo(book);
    }
    
    if (clickedElement.matches(".nav-link")) {
        Display.booksByStatus(clickedElement.innerText.toLowerCase());
    }

    if (clickedElement.matches(".new-book")) {
        Display.cleanBookModal();
    }

    if (clickedElement.matches("[data-bookChange]")){
        Book.changeState(event,clickedElement);
    }

    if (clickedElement.matches("#showQuestionsButton")) {
        Display.questions(clickedElement);
    }
    
});
document.getElementById("newBookForm").addEventListener("submit", Book.whatToDo);
Display.books();


