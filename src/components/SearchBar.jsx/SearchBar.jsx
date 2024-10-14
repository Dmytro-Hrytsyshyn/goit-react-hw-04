import css from "./SearchBar.module.css";

function SearchBar({ handleSubmit, setValue, value }) {
  return (
    <header className={css.header}>
      <h1 className={css.title}>SnapFinder </h1>
      <div className="container">
        <form className={css.form}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            className={css.search_btn}
            type="submit"
          >
            Пошук
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchBar;
