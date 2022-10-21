import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(reducer, [], () => {
    const DB = localStorage.getItem("books");
    return DB ? JSON.parse(DB) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
