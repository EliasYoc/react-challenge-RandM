import { useContext } from "react";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";
import BtnAddFavorite from "./BtnAddFavorite";
import styles from "./CardCharacter.module.css";

const CardCharacter = ({ name, id, status, image, allInfo }) => {
  const { setCharacterInfo } = useContext(CharactersContext);
  const statusLower = status.toLowerCase();
  const handleCharacterCach√© = () => {
    setCharacterInfo(allInfo);
  };
  return (
    <Link
      onClick={handleCharacterCach√©}
      className={styles.link}
      to={`character/${id}`}
    >
      <article className={styles.card}>
        <div className={styles.containerImg}>
          <img className={styles.img} src={image} alt={name} />
          <BtnAddFavorite
            id={id}
            status={status}
            image={image}
            characterName={name}
          />
        </div>
        <div>
          <h3
            className={`${statusLower === "alive" ? styles.nameAlive : ""}${
              statusLower === "dead" ? styles.nameDead : ""
            }${statusLower === "unknown" ? styles.nameUnknown : ""} ${
              styles.name
            } `}
          >
            {name}
          </h3>
          <p className={styles.status}>{status}</p>
        </div>
      </article>
    </Link>
  );
};

export default CardCharacter;
