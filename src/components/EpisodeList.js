import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../context/CharactersContext";
import CardEpisode from "./CardEpisode";
import styles from "./EpisodeList.module.css";
const EpisodeList = () => {
  const { characterInfo, episodes, setEpisodes } =
    useContext(CharactersContext);
  const [episodesId, setEpisodesId] = useState([]);
  const [loadingEpisodes, setLoadingEpisodes] = useState(true);
  console.log(episodesId);
  useEffect(() => {
    if (characterInfo.episode) {
      console.log("id");
      let ids = characterInfo.episode.map((episode) =>
        episode.split("/").at(-1)
      );
      setEpisodesId(ids);
    }
  }, [characterInfo.episode]);

  useEffect(() => {
    if (episodesId.length > 0) {
      console.log("fetch episodes");
      const getEpisodes = async () => {
        const res = await fetch(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        const data = await res.json(); //devuelve array si son mas de 1 elemento, si no será objeto
        setEpisodes(data.length ? data : [data]);
        setLoadingEpisodes(false);
      };
      getEpisodes();
    }
  }, [episodesId, setEpisodes]);
  if (loadingEpisodes) return <p>Loading episodes</p>;
  return (
    <section className={styles.list}>
      {episodes.map((episode) => (
        <CardEpisode
          key={episode.id}
          air_date={episode.air_date}
          name={episode.name}
          episode={episode.episode}
        />
      ))}
    </section>
  );
};

export default EpisodeList;
