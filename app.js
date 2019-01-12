//localStorage.clear();
document.addEventListener("click", (event) => {
    console.log(event.target);
    const clickedElement = event.target;
    let book;

    if (clickedElement.matches(".nav-link")) {
        Display.booksByStatus(clickedElement.innerText.toLowerCase());
    }

    if (clickedElement.matches("[data-bookChange]")){
        Book.changeState(event,clickedElement);
    }

    if (clickedElement.matches("[data-book]") || clickedElement.parentNode.matches("[data-book]")){
        book = (clickedElement.matches("[data-book]")) ? clickedElement : clickedElement.parentNode;
        Display.bookInfo(book);
    }

    if (clickedElement.matches("#showQuestionsButton")) {
        Display.questions(clickedElement);
    }
    
});

Display.books();

document.getElementById("newBookForm").addEventListener("submit", Book.add);


