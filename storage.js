class Storage{
    static loadBooks(bookStatus) {
        let books;
        if(window.localStorage.getItem("books") == null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem("books"));
        }
        
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
        localStorage.setItem("books", JSON.stringify(books));
    }
    static questions() {
        const questionsList = [
            {
                category: "global",
                questions: ["What is the meaning of what I have read?",
                            "Why did the author end the paragraph (or chapter, or book) in this way?",
                            "What was the author's purpose in writing this?",
                            "Why am I reading this?",
                            "What do I understand from what I just read?",
                            "What is the main idea?",
                            "What picture is the author painting in my head?",
                            "Do I need to reread so that I understand?",
                            "What were the main ideas?",
                            "Is this story fiction or nonfiction? How do you know?",
                            "What are the most important thing you have read so far?",
                            "Is this making sense so far?",
                            "What has happened in the text so far?",
                            "How would you summarize what you have just read?",
                            "What does this text remind you of?"]
            },
            {
                category: "novel",
                questions: ["Who are the characters in the story?",
                            "What has happened in the text so far?",
                            "How do you think the character was feeling?",
                            "How would you feel if this happened to you?",
                            "What do you think will happen next?",
                            "What is this story about?",
                            "What does the main character want?",
                            "What predictions can I make?"]
            },
            {
                category: "history",
                questions: ["What’s the goal of the author? ",
                            "What do you think his or her motives are for writing?",
                            "What are the least — and most — important parts of what you’re reading?",
                            "What does this reading remind you of? Any particular feeling, thought, or event?",
                            "What part of the reading did you not like? What was your favorite part?",
                            "What question(s) would you ask the author if you had the chance?"]
            },
            {
                category: "biography",
                questions: ["What are you picturing in your head as you read?",
                            "What are you picturing in your head as you read?",
                            "What can you tell about the story so far?",
                            "What would you have done if you were the character?",
                            "How would you have felt if you were the character?",
                            "As you read, what are you wondering about?",
                            "Can you put what you’ve just read in your own words?"]
            }
        ];
    }
    static getQuestionsByBookCategory(category) {
        
    }
    static getNewCode() {
        if (window.localStorage.getItem("books") === null) {
            return 1;
        }else{
            const bookList = JSON.parse(localStorage.getItem("books"));
            return bookList[bookList.length - 1].code + 1;
        }
    }
}