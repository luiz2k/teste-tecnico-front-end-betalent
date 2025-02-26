import styles from "./TitleAndSearch.module.css";

import { Search } from "../../../../components/Search/Search";
import { use } from "react";
import { TableContext } from "../../contexts/TableContext/TableContext";

export function TitleAndSearch() {
  const { setSearch } = use(TableContext);

  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>Funcionários</h1>

      <Search
        placeholder="Pesquisar"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
