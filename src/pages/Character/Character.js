import CharacterDetails from "./components/CharacterDetails";
import styles from "./Character.module.css";
import EpisodeList from "../../pages/Character/components/EpisodeList";
const Character = () => {
  return (
    <div className={styles.characterPage}>
      <CharacterDetails />
      <EpisodeList />
    </div>
  );
};

export default Character;
