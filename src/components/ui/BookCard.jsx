import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="p-10 lg:p-20 bg-base-200">
        <img src={book.image} alt="" className="rounded-xl max-h-120" />
      </figure>
      <div className="card-body">
        <div className="flex space-x-2">
          {book.tags.map((tag, i) => (
            <div
              key={i}
              className="badge bg-[#F4FCF2] text-green-500 font-medium rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="text-2xl font-semibold">{book.bookName}</p>
        <p className="font-medium opacity-70">By: {book.author}</p>
        <div className="card-actions justify-end"></div>
        <div className="flex items-center border-t-2 border-stone-200 border-dotted pt-5">
          <p>{book.category}</p>
          <div className="text-right flex items-center justify-center gap-2">
            {book.rating}
            <span className="text-yellow-400 text-xl">
              <FaStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
