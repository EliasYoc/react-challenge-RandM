import { useContext } from "react";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";
import { ConfigurationContext } from "../context/ConfigurationContext";
import BtnDeleteRecent from "./BtnDeleteRecent";
import styles from "./SearchRecents.module.css";
const SearchRecents = () => {
  const { recentSearch } = useContext(CharactersContext);
  const { setConfiguration } = useContext(ConfigurationContext);

  const handleClick = (e) => {
    e.stopPropagation();
    setConfiguration((prev) => ({ ...prev, showRecents: false }));
  };
  return (
    <>
      <div onClick={handleClick} className={styles.wrapRecents}></div>
      <ul className={`${styles.recentList} scroll`}>
        {recentSearch.map(
          (recent, i) =>
            recent && (
              <Link
                to={`/?q=${recent}`}
                onClick={handleClick}
                key={i}
                className={styles.recent}
              >
                {recent}
                <BtnDeleteRecent value={recent} />
              </Link>
            )
        )}
      </ul>
    </>
  );
};

export default SearchRecents;
