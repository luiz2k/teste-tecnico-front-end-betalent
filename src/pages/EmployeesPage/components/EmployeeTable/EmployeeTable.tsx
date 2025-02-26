import globals from "../../../../styles/globals.module.css";
import styles from "./EmployeeTable.module.css";

import React, { use, useState } from "react";
import { ChevronDown } from "../../../../components/_icons/ChevronDown";
import { ChevronUp } from "../../../../components/_icons/ChevronUp";
import { TableBody } from "../../../../components/Table/TableBody/TableBody";
import { TableHead } from "../../../../components/Table/TableHead/TableHead";
import { TableBodyTd } from "../../../../components/Table/TableTd/TableBodyTd";
import { TableHeadTh } from "../../../../components/Table/TableTh/TableHeadTh";
import { formatPhoneNumber } from "../../../../utils/formatPhoneNumber";
import { TableContext } from "../../contexts/TableContext/TableContext";

export function EmployeeTable() {
  const { employees } = use(TableContext);
  const [showDetails, setShowDetails] = useState<number[]>([]);

  const toggleShowDetails = (employeeId: number) => {
    setShowDetails((employeeIds) => {
      if (employeeIds.includes(employeeId)) {
        return employeeIds.filter((prevId) => prevId !== employeeId);
      }

      return [...employeeIds, employeeId];
    });
  };

  return (
    <div className={styles.container}>
      <table
        className={`${styles.table} ${globals.rounded_lg} ${globals.overflow_hidden} ${globals.width_full}`}
      >
        <colgroup className={styles.table__colgroup}>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <TableHead>
          <tr className={styles.table__th_tr}>
            <TableHeadTh>Foto</TableHeadTh>
            <TableHeadTh className={`${globals.text_start}`}>Nome</TableHeadTh>
            <TableHeadTh>⚪</TableHeadTh>
            <TableHeadTh className={`${globals.text_start}`}>Cargo</TableHeadTh>
            <TableHeadTh
              className={`${globals.text_start} ${globals.text_nowrap}`}
            >
              Data de admissão
            </TableHeadTh>
            <TableHeadTh className={`${globals.text_start}`}>
              Telefone
            </TableHeadTh>
          </tr>
        </TableHead>
        <TableBody>
          {employees.length > 0 ? (
            <>
              {employees.map((employee) => (
                <React.Fragment key={employee.id}>
                  <tr
                    className={`${!showDetails.includes(employee.id) && globals.shadow_xs} ${styles.md__shadow_xs}`}
                  >
                    <TableBodyTd>
                      <img
                        src={employee.image}
                        alt={`Foto de ${employee.name}`}
                        className={`${styles.table__img} ${globals.rounded_full} ${globals.object_cover}`}
                      />
                    </TableBodyTd>
                    <TableBodyTd>{employee.name}</TableBodyTd>
                    <TableBodyTd className={styles.md__display_none}>
                      <button onClick={() => toggleShowDetails(employee.id)}>
                        {showDetails.includes(employee.id) ? (
                          <ChevronUp
                            fontSize={32}
                            strokeWidth={1}
                            className={styles.table__icon}
                          />
                        ) : (
                          <ChevronDown
                            fontSize={32}
                            strokeWidth={1}
                            className={styles.table__icon}
                          />
                        )}
                      </button>
                    </TableBodyTd>
                    <TableBodyTd
                      className={`${styles.md__display_cell} ${globals.text_nowrap}`}
                    >
                      {employee.job}
                    </TableBodyTd>
                    <TableBodyTd className={`${styles.md__display_cell}`}>
                      {new Date(employee.admission_date).toLocaleDateString()}
                    </TableBodyTd>
                    <TableBodyTd
                      className={`${styles.md__display_cell} ${globals.text_nowrap}`}
                    >
                      {formatPhoneNumber(employee.phone)}
                    </TableBodyTd>
                  </tr>

                  {showDetails.includes(employee.id) && (
                    <tr
                      className={`${styles.table__details} ${globals.shadow_xs}`}
                    >
                      <td colSpan={3}>
                        <div>
                          <p>
                            <span className={`${globals.font_bold}`}>
                              Cargo:{" "}
                            </span>
                            {employee.job}
                          </p>
                          <p>
                            <span className={`${globals.font_bold}`}>
                              Data de admissão:{" "}
                            </span>
                            {new Date(
                              employee.admission_date,
                            ).toLocaleDateString()}
                          </p>
                          <p>
                            <span className={`${globals.font_bold}`}>
                              Telefone:{" "}
                            </span>
                            {formatPhoneNumber(employee.phone)}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </>
          ) : (
            <tr className={styles.table__notfound}>
              <TableBodyTd colSpan={5} className={globals.text_center}>
                Nenhum registro encontrado
              </TableBodyTd>
            </tr>
          )}
        </TableBody>
      </table>
    </div>
  );
}
