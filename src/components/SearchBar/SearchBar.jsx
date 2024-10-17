import css from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("🛑The input field is empty ");

const SearchBar = ({ onHandleSubmit }) => {
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userInput = form.elements.text.value.trim("");
    if (userInput === "") {
      notify();
      return;
    }
    onHandleSubmit(form.elements.text.value);

    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={onFormSubmit} className={css.form}>
        <input
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.submitBtn}>
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
