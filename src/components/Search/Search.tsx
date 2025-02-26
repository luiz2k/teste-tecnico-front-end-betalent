import { Search as SearchIcon } from "../_icons/Search";
import styles from "./Search.module.css";

export function Search(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.search__container}>
      <SearchIcon
        fontSize={24}
        strokeWidth={1}
        className={styles.search__icon}
      />
      <input type="search" className={styles.search} {...props} />
    </div>
  );
}
