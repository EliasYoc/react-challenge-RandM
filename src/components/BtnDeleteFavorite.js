import styles from "./BtnDeleteFavorite.module.css";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
const BtnDeleteFavorite = ({ id }) => {
  const { setStorage, favorites } = useContext(CharactersContext);

  const handleDeleteFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const favoriteDeleted = favorites.filter((el) => el.id !== id);
    setStorage(favoriteDeleted);
  };
  return (
    <button onClick={handleDeleteFavorite} className={styles.favoriteBtn}>
      <BsFillBookmarkXFill />
    </button>
  );
};

export default BtnDeleteFavorite;
