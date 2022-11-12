import { useContext } from "react";
import { IoListOutline } from "react-icons/io5";
import { CharactersContext } from "../context/CharactersContext";
import { ConfigurationContext } from "../context/ConfigurationContext";

import CanvasSticker from "./CanvasSticker";
import FavoriteCard from "./FavoriteCard";
import styles from "./Favorites.module.css";
import mortyCrying from "../assets/video/mortyCrying.mp4";
import BtnGeneral from "./BtnGeneral";
const Favorites = () => {
  const { favorites } = useContext(CharactersContext);
  const {
    handleOpenFavorite,
    configuration: { isFavoritesOpen },
  } = useContext(ConfigurationContext);
  return (
    <div
      onClick={handleOpenFavorite}
      className={`${styles.favoritesWrap} ${
        isFavoritesOpen ? styles.wrapOpen : styles.wrapClose
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`${styles.favorites} ${
          isFavoritesOpen ? styles.favoritesOpen : styles.favoritesClose
        } scroll`}
      >
        <header className={styles.favoritesTitle}>
          <h2>Favoritos</h2>
          {/* <BtnOpenFavorite /> */}
          <BtnGeneral
            icon={IoListOutline}
            onClick={handleOpenFavorite}
            className={styles.btnFavorites}
          />
        </header>
        <div className={styles.favoritesList}>
          {favorites.length === 0 && (
            <CanvasSticker
              title="No cuentas con ningún favorito"
              video={mortyCrying}
            />
          )}
          {favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              id={favorite.id}
              image={favorite.image}
              name={favorite.name}
              status={favorite.status}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Favorites;
