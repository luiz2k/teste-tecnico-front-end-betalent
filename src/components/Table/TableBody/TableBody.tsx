import styles from "./TableBody.module.css";

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode;
};

export function TableBody({ children, ...rest }: TableBodyProps) {
  return (
    <tbody className={styles.tbody} {...rest}>
      {children}
    </tbody>
  );
}
