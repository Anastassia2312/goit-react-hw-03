import css from "./SearchBox.module.css";
export default function SearchForm({ value, onFilter }) {
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
