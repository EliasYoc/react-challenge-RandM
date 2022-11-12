import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConfigurationContext } from "../context/ConfigurationContext";
import BtnDeleteFavorite from "./BtnDeleteFavorite";
import styles from "./FavoriteCard.module.css";
const FavoriteCard = ({ name, status, image, id }) => {
  const { handleOpenFavorite } = useContext(ConfigurationContext);
  const statusLower = status.toLowerCase();
  return (
    <Link
      onClick={handleOpenFavorite}
      to={`character/${id}`}
      className={styles.favCard}
    >
      <div
        className={`${styles.favCardWrap} ${
          statusLower === "alive" ? styles.favCardWrapAlive : ""
        }${statusLower === "dead" ? styles.favCardWrapDead : ""}${
          statusLower === "unknown" ? styles.favCardWrapUnknown : ""
        }`}
      >
        <img src={image} alt={name} />
      </div>
      <div className={styles.favCardDetails}>
        <h3>{name}</h3>
        <span>{statusLower}</span>
      </div>
      <BtnDeleteFavorite id={id} />
    </Link>
  );
};

export default FavoriteCard;
