import styles from "./TableHeadTh.module.css";

type TableThProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  children: React.ReactNode;
};
export function TableHeadTh({ children, className, ...rest }: TableThProps) {
  return (
    <th className={`${styles.th} ${className || ""}`} {...rest}>
      {children}
    </th>
  );
}
