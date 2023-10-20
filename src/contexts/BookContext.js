import { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const auth = useContext(AuthContext);
  const [allRentedBooks, setAllRentedBooks] = useState([]);

  useEffect(() => {
    if (auth.client !== undefined) {
      setAllRentedBooks(auth.client.rentBooks);
    }
  }, [auth.client]);

  function addRentedBooks(bookName, bookWriter) {
    const rentedBook = {
      bookName: bookName,
      bookWriter: bookWriter,
    };
    let newAllRentedBooks = allRentedBooks.concat(rentedBook);
    setAllRentedBooks(newAllRentedBooks);
    auth.toClientRentBooks(newAllRentedBooks);
  }

  function removeRentedBooks(bookName, bookWriter) {
    const rentedBook = {
      bookName: bookName,
      bookWriter: bookWriter,
    };
    let newAllRentedBooks = allRentedBooks.filter((item) => item.bookName !== rentedBook.bookName);
    setAllRentedBooks(newAllRentedBooks);
    auth.toClientRentBooks(newAllRentedBooks);
  }

  return (
    <BookContext.Provider
      value={{ addRentedBooks: addRentedBooks, removeRentedBooks: removeRentedBooks, allRentedBooks: allRentedBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};
