 /* 
 Create a class named Book with a constructor that initializes a title, author, and year properties. 
 The title and author should be strings and the year should be a number
 Create a subclass named Ebook that extends Book.
 The Ebook class should have an additional property fileSize which is a number and a method download() that returns a string with the title of the ebook and its fileSize.
*/

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    static createBookReceipt(receipt){
        const randomPrice = Math.floor(Math.random() * 1000);
        return `Your book was ${randomPrice}`
    }

    displayBook(){
        return `This book is called ${this.title} by ${this.author} released in ${this.year}.`
    }

}

class Ebook extends Book {
    constructor(title, author, year, fileSize){
        super(title, author, year);
        this.fileSize = fileSize;
    }
    static createEBookReceipt(){
        const randomPrice = Math.floor(Math.random() * 1000); //generate random number
        return `Your book was ${randomPrice}`
    }
    download(){
        return `You're downloading: ${this.title} with a size of ${this.fileSize} KBS.`;
    }
}

const myBook1 = new Book("Something In The Water", "Marie Lu", 2023);
const myEBook1 = new Ebook("Wild Card", "Marie Lu", 2018, 23);
console.log(Book.createBookReceipt());
console.log(Ebook.createEBookReceipt());
console.log(myBook1.displayBook());
console.log(myEBook1.download());

//turn on copilot after finished :)