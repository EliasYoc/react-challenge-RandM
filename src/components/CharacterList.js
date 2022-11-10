import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import CardCharacter from "./CardCharacter";
import styles from "./CharacterList.module.css";
const CharacterList = () => {
  const { foundCharacter } = useContext(CharactersContext);

  return (
    <section className={styles.list}>
      {foundCharacter.map((character) => (
        <CardCharacter
          key={character.id}
          id={character.id}
          image={character.image}
          status={character.status}
          name={character.name}
          allInfo={character}
        />
      ))}
    </section>
  );
};

export default CharacterList;
