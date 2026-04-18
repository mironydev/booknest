import React, { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  return (
    <div className="container mx-auto mt-16 md:mt-20">
      <h3 className="text-center text-4xl font-bold">Books</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10 mb-10 md:mb-20 gap-10 px-5 sm:px-0">
        {books.map((book) => (
          <BookCard book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
