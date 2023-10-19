import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [allRentedBooks, setAllRentedBooks] = useState([]);

  function addRentedBooks(bookName, bookWriter) {
    const rentedBook = {
      bookName: bookName,
      bookWriter: bookWriter,
    };
    setAllRentedBooks(allRentedBooks.concat(rentedBook));
  }

  function removeRentedBooks(bookName, bookWriter) {
    const rentedBook = {
      bookName: bookName,
      bookWriter: bookWriter,
    };
    let newAllRentedBooks = allRentedBooks.filter((item) => item.bookName !== rentedBook.bookName);
    setAllRentedBooks(newAllRentedBooks);
  }

  return (
    <BookContext.Provider
      value={{ addRentedBooks: addRentedBooks, removeRentedBooks: removeRentedBooks, allRentedBooks: allRentedBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};
