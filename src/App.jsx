import { Navbar, Booklist, AddNew } from "./components";
import BookContextProvider from "./contexts/BookContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900  transition-all dark:text-white">
      <BrowserRouter>
        <Navbar />
        <BookContextProvider>
          <Routes>
            <Route path="/" element={<Booklist />}></Route>
            <Route path="add" element={<AddNew />}></Route>
          </Routes>
        </BookContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
