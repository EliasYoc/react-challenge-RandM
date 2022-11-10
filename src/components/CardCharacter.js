import { useContext } from "react";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";
import styles from "./CardCharacter.module.css";

const CardCharacter = ({ name, id, status, image, allInfo }) => {
  const { setCharacterInfo } = useContext(CharactersContext);
  const statusLower = status.toLowerCase();
  const handleCharacterCaché = () => {
    setCharacterInfo(allInfo);
  };
  return (
    <Link
      onClick={handleCharacterCaché}
      className={styles.link}
      to={`character/${id}`}
    >
      <article className={styles.card}>
        <div className={styles.containerImg}>
          <img className={styles.img} src={image} alt={name} />
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
