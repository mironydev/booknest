import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCard from "./ListedBookCard";

const ReadListCard = ({ sortingType }) => {
  const { storedBooks } = useContext(BookContext);
  const [filteredList, setFilteredList] = useState(storedBooks);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => b.totalPages - a.totalPages,
        );
        setFilteredList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...storedBooks].sort((a, b) => b.rating - a.rating);
        setFilteredList(sortedData);
      } else if (sortingType === "year") {
        const sortedData = [...storedBooks].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing,
        );
        setFilteredList(sortedData);
      }
    }
  }, [sortingType, storedBooks]);

  if (filteredList.length === 0) {
    return (
      <div className=" bg-base-300 p-6 gap-6 rounded-2xl text-2xl font-medium flex justify-center items-center opacity-50 h-50">
        Read List is Empty
      </div>
    );
  }

  return (
    <>
      {filteredList.map((book, i) => (
        <ListedBookCard book={book} key={i} />
      ))}
    </>
  );
};

export default ReadListCard;
