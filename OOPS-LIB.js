/**
 * Browser-friendly entry point for the object-oriented programming example.
 * Open index.html directly or serve the repository with any static server.
 */
import { Book, Library } from "./src/oop/library.js";

const library = new Library("Learning Library");
library.addBook(
  new Book({
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    isbn: "9780261102217",
    price: 300,
  }),
);
library.addBook(
  new Book({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    price: 700,
  }),
);

const output = document.querySelector("#library-output");
if (output) {
  output.innerHTML = library
    .listBooks()
    .map(
      (book) =>
        `<li><strong>${book.title}</strong> by ${book.author} · ₹${book.price}</li>`,
    )
    .join("");
}
