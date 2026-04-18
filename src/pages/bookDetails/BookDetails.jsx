import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const clickedBook = books.find((book) => book.bookId === Number(id));

  const { handleReadButton, handleWishlistButton } = useContext(BookContext);

  return (
    <div className="container mx-auto mb-10 md:mt-20 flex flex-col md:flex-row items-center gap-14 lg:gap-24">
      <figure className="flex-1 p-10 lg:p-20 flex sm:rounded-xl bg-base-300 max-w-100 mx-auto md:mx-0">
        <img src={clickedBook.image} alt="" className="rounded-xl" />
      </figure>
      <div className="flex-1 space-y-5 px-5 md:px-0">
        <h2 className="text-4xl sm:text-5xl font-bold">
          {clickedBook.bookName}
        </h2>
        <p className="text-xl font-semibold opacity-80">
          By: {clickedBook.author}
        </p>
        <p className="border-y border-gray-300 py-2 text-lg font-medium">
          {clickedBook.category}
        </p>
        <p className="font-bold">
          Review:{" "}
          <span className="font-normal opacity-70 text-sm">
            {clickedBook.review}
          </span>
        </p>
        <div className="flex gap-3">
          <p className="font-bold">Tag:</p>
          {clickedBook.tags.map((tag, i) => (
            <p
              key={i}
              className="badge bg-[#F4FCF2] text-green-500 font-medium rounded-full"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex gap-10 sm:gap-20 border-t border-gray-300 pt-4">
          <div className="space-y-2 opacity-70">
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Rating: </p>
          </div>
          <div className="font-semibold space-y-2">
            <p>{clickedBook.totalPages}</p>
            <p>{clickedBook.publisher}</p>
            <p>{clickedBook.yearOfPublishing}</p>
            <p>{clickedBook.rating}</p>
          </div>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleReadButton(clickedBook)}
            className="btn bg-white p-5 hover:bg-base-300"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishlistButton(clickedBook)}
            className="btn bg-[#50B1C9] text-white p-5"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
