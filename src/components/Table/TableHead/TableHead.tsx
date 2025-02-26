import styles from "./TableHead.module.css";

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode;
};
export function TableHead({ children, ...rest }: TableHeadProps) {
  return (
    <thead className={styles.thead} {...rest}>
      {children}
    </thead>
  );
}
