import { useEffect, useState } from "react";

import { api } from "../../../../services/api";
import { TableContext } from "./TableContext";
import { useDebounce } from "../../../../hooks/useDebounce";
import { Employee } from "../../types/Employee";

interface TableContextProps {
  children: React.ReactNode;
}

export const TableContextProvider = ({ children }: TableContextProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>("");
  const result = useDebounce<string>(search, 500);

  useEffect(() => {
    const findEmployees = async () => {
      try {
        const res = await api.request<Employee[]>({
          method: "GET",
          path: "/employees",
        });

        setEmployees(res);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    };

    findEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(result.toLowerCase());
  });

  return (
    <TableContext.Provider value={{ employees: filteredEmployees, setSearch }}>
      {children}
    </TableContext.Provider>
  );
};
