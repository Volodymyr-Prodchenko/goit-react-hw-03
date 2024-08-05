import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
