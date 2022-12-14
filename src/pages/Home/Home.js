import CanvasSticker from "../../components/CanvasSticker";
import Search from "../../components/Search";
import happyMorty from "../../assets/video/RickAndMorty-512px-22.mp4";
import styles from "./Home.module.css";
import { useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";
import CharacterList from "../../components/CharacterList";

const Home = () => {
  const { foundCharacter } = useContext(CharactersContext);
  return (
    <div className={styles.home}>
      <Search />
      {foundCharacter.length > 0 ? (
        <CharacterList />
      ) : (
        <CanvasSticker
          title="Busca los personajes de Rick & Morty"
          video={happyMorty}
        />
      )}
    </div>
  );
};

export default Home;
