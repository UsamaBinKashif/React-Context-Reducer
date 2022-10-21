import { useContext, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

const AddNew = () => {
  const { dispatch } = useContext(BookContext);
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title: form.title,
        author: form.author,
        description: form.description,
      },
    });
    setForm({ title: "", author: "", description: "" });
  };

  return (
    <section className="text-gray-900 dark:text-gray-200  font-semibold body-font relative h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl uppercase font-medium title-font mb-4 text-gray-900 dark:text-gray-200">
            Add new book
          </h1>
        </div>
        <form onSubmit={onSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="title"
                  className="leading-7 text-base text-gray-900 dark:text-gray-200  font-semibold"
                >
                  <span className="text-red-500">*</span>Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={onChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="author"
                  className="leading-7 text-base text-gray-900 dark:text-gray-200  font-semibold"
                >
                  <span className="text-red-500">*</span>Author{" "}
                </label>
                <input
                  value={form.author}
                  type="text"
                  name="author"
                  onChange={onChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="description"
                  className="leading-7 text-base text-gray-900 dark:text-gray-200  font-semibold"
                >
                  Description <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  value={form.description}
                  onChange={onChange}
                  name="description"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>

            <div className="p-2 w-full">
              <button  className=" flex mx-auto bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-1 px-2 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNew;
