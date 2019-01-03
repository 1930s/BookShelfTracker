document.getElementById("newBookForm").addEventListener("submit", Book.add);
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", Display.section);   
});
window.onload = Display.books;