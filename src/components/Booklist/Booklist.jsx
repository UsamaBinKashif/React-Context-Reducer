import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import BookDetail from "./BookDetail/BookDetail";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="flex flex-wrap justify-center h-screen">
      {books.map((book) => {
        return <BookDetail book={book} key={book.id} />;
      })}
    </div>
  ) : (
    <div className="grid place-items-center h-screen text-2xl uppercase font-semibold underline decoration-wavy decoration-purple-600 ">
      No books to read, Add Some.
    </div>
  );
};

export default BookList;
