import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src="/logo.png" alt="Logo" className={styles.header__logo} />
      </div>
    </header>
  );
}
