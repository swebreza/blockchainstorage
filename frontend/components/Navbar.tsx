import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["navbar-logo"]}></div>
      <ul className={styles["navbar-links"]}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
