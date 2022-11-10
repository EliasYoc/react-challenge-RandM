import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt="rick&morty logo"
        />
      </div>
    </header>
  );
};

export default Header;
