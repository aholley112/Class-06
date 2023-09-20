// As a challenge, design a Library class. This class should be able to store book objects.
// For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
// The Library should feature methods that allow a user to add a book, remove a book, and list all books.
// Implement this system and run a series of operations, such as adding a book, listing books, etc.

class Book {
    constructor(isbn, title, author, yearPublished) {
      this._isbn = isbn;
      this.title = title;
      this.author = author;
      this.yearPublished = yearPublished;
    }
  
    // Getter for ISBN (read-only)
    get isbn() {
      return this._isbn;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      if (!(book instanceof Book)) {
        console.error('Invalid book object. Please provide a Book instance.');
        return;
      }
  
      this.books.push(book);
    }
  
    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    }
  
    listBooks() {
      console.log('List of Books:');
      this.books.forEach(book => {
        console.log(`ISBN: ${book.isbn}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Year Published: ${book.yearPublished}`);
        console.log('---');
      });
    }
  }
  
  // Create a Library instance
  const library = new Library();
  
  // Add books
  const book1 = new Book('978-0451573625', 'The Great Gatsby', 'F. Scott Fitzgerald', '1925');
  const book2 = new Book('978-0061916427', 'Where the Forest Meets the Stars', 'Glendy Vanderah', 2019);
  const book3 = new Book('978-1400017340', 'The Alchemist', 'Paulo Coelho', 1988);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  // List all books
  library.listBooks();
  
  // Remove a book by ISBN
  library.removeBook('978-0451526531');
  
  // List books after removal
  library.listBooks();
  