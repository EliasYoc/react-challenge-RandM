import { Link } from "react-router-dom";
import BtnGeneral from "./BtnGeneral";
import { IoListOutline } from "react-icons/io5";

import styles from "./Header.module.css";
import { useContext } from "react";
import { ConfigurationContext } from "../context/ConfigurationContext";
const Header = () => {
  const { handleOpenFavorite } = useContext(ConfigurationContext);

  return (
    <header className={styles.header}>
      <Link to={`/`} className={styles.logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt="rick&morty logo"
        />
      </Link>
      <div>
        {/* <BtnOpenFavorite /> */}
        <BtnGeneral
          icon={IoListOutline}
          onClick={handleOpenFavorite}
          className={styles.btnFavorites}
        />
      </div>
    </header>
  );
};

export default Header;
