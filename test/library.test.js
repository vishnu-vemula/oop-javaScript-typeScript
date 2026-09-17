import test from "node:test";
import assert from "node:assert/strict";
import { Book, Library } from "../src/oop/library.js";

test("encapsulates book state and returns a safe copy", () => {
  const library = new Library("Test library");
  const book = new Book({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    price: 700,
  });
  library.addBook(book);
  book.markAsRead();
  const listed = library.listBooks();

  assert.equal(listed.length, 1);
  assert.equal(listed[0].isRead, true);
  assert.notEqual(listed, library.listBooks());
});
