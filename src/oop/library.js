export class Book {
  #read = false;

  constructor({ title, author, isbn, price }) {
    if (!title || !author || !isbn || price < 0) {
      throw new Error("A book requires title, author, ISBN, and a non-negative price.");
    }
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
  }

  get isRead() {
    return this.#read;
  }

  markAsRead() {
    this.#read = true;
  }

  toJSON() {
    return {
      title: this.title,
      author: this.author,
      isbn: this.isbn,
      price: this.price,
      isRead: this.isRead,
    };
  }
}

export class Library {
  #books = [];

  constructor(name) {
    if (!name?.trim()) throw new Error("A library needs a name.");
    this.name = name;
  }

  addBook(book) {
    if (!(book instanceof Book)) throw new TypeError("Only Book instances can be added.");
    if (this.#books.some((existing) => existing.isbn === book.isbn)) {
      throw new Error(`A book with ISBN ${book.isbn} already exists.`);
    }
    this.#books.push(book);
  }

  listBooks() {
    return [...this.#books];
  }

  findByAuthor(author) {
    return this.#books.filter((book) => book.author === author);
  }
}
