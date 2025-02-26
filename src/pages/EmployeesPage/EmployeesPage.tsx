import styles from "./EmployeesPage.module.css";

import { EmployeeTable } from "./components/EmployeeTable/EmployeeTable";
import { TitleAndSearch } from "./components/TitleAndSearch/TitleAndSearch";
import { TableContextProvider } from "./contexts/TableContext/TableContextProvider";

export function EmployeesPage() {
  return (
    <div className={styles.container}>
      <TableContextProvider>
        <TitleAndSearch />

        <EmployeeTable />
      </TableContextProvider>
    </div>
  );
}
