import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle/Toggle";

function Navbar() {
  return (
    <>
      <header className="font-semibold m-0 p-5 flex items-center justify-around flex-wrap bg-gray-200 dark:bg-gray-800 ">
        <div>
          <h1 className="text-base font-bold">Book List</h1>
        </div>
        <nav className="flex items-center justify-center gap-10 ">
          <Link
            to="/"
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-1 px-2 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
          >
            Your List
          </Link>
          <Link
            to="add"
            className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-1 px-2 border-b-4 border-purple-700 hover:border-purple-500 rounded"
          >
            Add New
          </Link>
        </nav>
        <div className="toggle">
          <Toggle />
        </div>
      </header>
    </>
  );
}

export default Navbar;
