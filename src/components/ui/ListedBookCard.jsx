import React from "react";
import { FaRegClock } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { MdOutlineMenuBook } from "react-icons/md";

const ListedBookCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    totalPages,
    publisher,
    rating,
    category,
  } = book;
  return (
    <div className="border border-gray-300 p-6 gap-6 rounded-2xl flex flex-col md:flex-row mx-5 lg:mx-0">
      <figure className="p-8 bg-base-300 rounded-xl flex items-center justify-center">
        <img src={image} alt="" className="rounded-md max-w-40 md:max-w-25" />
      </figure>
      <div>
        <h3 className="font-bold text-3xl">{bookName}</h3>
        <p className="text-stone-600 font-medium text-sm mt-1">By: {author}</p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 text-gray-500">
          <p className="flex items-center gap-2 my-3">
            <span className="font-bold text-black">Tag:</span>{" "}
            <span className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#F4FCF2] text-[#23BE0A] px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaRegClock />
            Year of Publishing:&nbsp;
            {yearOfPublishing}
          </p>
        </div>
        <div className="flex flex-wrap space-x-4 text-gray-500 text-sm my-1 sm:my-0">
          <p className="flex items-center gap-2 mb-1 sm:mb-0">
            <GoPeople />
            Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2 mb-1 sm:mb-0">
            <MdOutlineMenuBook />
            {totalPages} pages
          </p>
        </div>
        <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-4 mt-4">
          <button className="btn bg-[#E1EEFF] text-blue-500 rounded-full cursor-pointer">
            Catagory: {category}
          </button>
          <button className="btn bg-[#FFF3E1] text-orange-500 rounded-full cursor-pointer">
            Rating: {rating}
          </button>
          <button className="btn bg-green-500 text-white rounded-full cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
