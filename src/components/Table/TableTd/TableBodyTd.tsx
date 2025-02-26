import styles from "./TableBodyTd.module.css";

type TableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  children: React.ReactNode;
};

export function TableBodyTd({ children, className, ...rest }: TableTdProps) {
  return (
    <td className={`${styles.td} ${className || ""}`} {...rest}>
      {children}
    </td>
  );
}
