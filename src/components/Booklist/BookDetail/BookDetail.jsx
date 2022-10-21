import React, { useContext } from "react";
import { BookContext } from "../../../contexts/BookContext";

const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <article className="p-4">
      <div className="rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700 w-max ">
        <div className="p-5">
          <h5 className=" text-lg font-bold mb-2">{book.title}</h5>
          <p className=" text-sm mb-4 text-gray-800 dark:text-gray-300 ">
            {book.description}
          </p>
          <p className="mb-4">
            Author:{" "}
            <span className="font-bold uppercase  underline decoration-wavy decoration-indigo-600">
              {book.author}
            </span>
          </p>
          <button
            onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
            className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-1 px-2 border-b-4 border-purple-700 hover:border-purple-500 rounded"
          >
           Remove 
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookDetail;
