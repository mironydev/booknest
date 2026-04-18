import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState(() =>
    getAllReadListFromLocalDB(),
  );
  const [wishlist, setWishlist] = useState(() => getAllWishListFromLocalDB());

  const handleReadButton = (currentBook) => {
    addReadListToLocalDB(currentBook);

    const bookExists = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (bookExists) {
      toast.error("book already marked as read");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success("book marked as read");
    }
  };

  const handleWishlistButton = (currentBook) => {
    addWishListToLocalDB(currentBook);
    const existsInReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (existsInReadList) {
      toast.info("book is already in readlist");
      return;
    }

    const bookExists = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (bookExists) {
      toast.error("book already added to wishlist");
    } else {
      setWishlist([...wishlist, currentBook]);
      toast.success("book added to wishlist");
    }
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleReadButton,
    wishlist,
    setWishlist,
    handleWishlistButton,
  };
  return <BookContext value={data}>{children}</BookContext>;
};

export default BookProvider;
