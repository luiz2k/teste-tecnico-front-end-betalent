import { createContext } from "react";
import { Employee } from "../../types/Employee";

interface TableContextType {
  employees: Employee[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const TableContext = createContext({} as TableContextType);
