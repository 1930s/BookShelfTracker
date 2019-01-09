//localStorage.clear();
document.addEventListener("click", () => {
    const clickedElement = event.target;
    let book;

    if (clickedElement.matches(".nav-link")) {
        Display.booksByStatus(clickedElement.innerText.toLowerCase());
    }

    if (clickedElement.matches("[data-bookChange]")){
        Book.changeState(clickedElement);
    }

    if (clickedElement.matches("[data-book]") || clickedElement.parentNode.matches("[data-book]")){
        book = (clickedElement.matches("[data-book]")) ? clickedElement : clickedElement.parentNode;
        Display.bookInfo(book);
    }

    if (clickedElement.matches("#showQuestionsButton")) {
        Display.questions(clickedElement);
    }
    
});

window.onload = Display.books();

document.getElementById("newBookForm").addEventListener("submit", Book.add);


