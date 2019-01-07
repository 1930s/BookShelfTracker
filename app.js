//localStorage.clear();
window.onload = Display.books();
document.getElementById("newBookForm").addEventListener("submit", Book.add);
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", Display.section);   
});
document.querySelectorAll("[data-book]").forEach(book => {
    book.addEventListener("click", Display.bookInfo);
});
document.getElementById("showQuestionsButton").addEventListener("click", Display.questions);
document.querySelectorAll("[data-bookChange]").forEach(link => {
    link.addEventListener("click", Book.changeState);
});


