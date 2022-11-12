import { useContext, useEffect, useState } from "react";
import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { CharactersContext } from "../context/CharactersContext";
import styles from "./BtnAddFavorite.module.css";
const BtnAddFavorite = ({ id, characterName, status, image }) => {
  const { setStorage, favorites } = useContext(CharactersContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const foundFavoriteDuplicated = favorites.some(
    (favorite) => favorite.id === id
  );
  useEffect(() => {
    setIsFavorite(foundFavoriteDuplicated);
  }, [foundFavoriteDuplicated]);
  const handleSaveFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsFavorite(foundFavoriteDuplicated);
    if (!foundFavoriteDuplicated)
      setStorage([...favorites, { id, name: characterName, status, image }]);
  };
  return (
    <button onClick={handleSaveFavorite} className={styles.favoriteBtn}>
      {isFavorite ? <BsFillBookmarkCheckFill /> : <BsFillBookmarkPlusFill />}
    </button>
  );
};

export default BtnAddFavorite;
