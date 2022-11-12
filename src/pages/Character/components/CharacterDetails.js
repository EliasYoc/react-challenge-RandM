import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharactersContext } from "../../../context/CharactersContext";
import CharacterSomeInfo from "./CharacterSomeInfo";
import styles from "./CharacterDetails.module.css";
import BtnAddFavorite from "../../../components/BtnAddFavorite";
const CharacterDetails = () => {
  const params = useParams();
  const [characterLoading, setCharacterLoading] = useState(true);
  const { characterInfo, setCharacterInfo } = useContext(CharactersContext);
  useEffect(() => {
    if (characterInfo.id !== params.id) {
      const controller = new AbortController();
      const { signal } = controller;
      fetch(`https://rickandmortyapi.com/api/character/${params.id}`, {
        signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setCharacterInfo(data);
          setCharacterLoading(false);
        });
      return () => {
        controller.abort();
      };
    }
    setCharacterLoading(false);
  }, [params.id, setCharacterInfo, characterInfo.id]);
  const statusLower = characterInfo.status?.toLowerCase();
  if (characterLoading) return <p>Loading...</p>;
  return (
    <section className={`${styles.details} `}>
      <div className={styles.imgWrapper}>
        <img src={characterInfo.image} alt={characterInfo.name} />
        <BtnAddFavorite
          id={characterInfo.id}
          characterName={characterInfo.name}
          status={characterInfo.status}
          image={characterInfo.image}
        />
      </div>
      <article className={styles.container}>
        <h2
          className={`${styles.name} ${
            statusLower === "alive" ? styles.statusAlive : ""
          }${statusLower === "dead" ? styles.statusDead : ""}${
            statusLower === "unknown" ? styles.statusUnknown : ""
          }`}
        >
          {characterInfo.name}
        </h2>
        <span
          className={`${styles.span} ${
            statusLower === "alive" ? styles.spanAlive : ""
          }${statusLower === "dead" ? styles.spanDead : ""}${
            statusLower === "unknown" ? styles.spanUnknown : ""
          }`}
        >
          {characterInfo.status}
        </span>
        <CharacterSomeInfo title="Specie" titleInfo={characterInfo.species} />
        <CharacterSomeInfo
          title="Last location"
          titleInfo={characterInfo.location?.name}
        />
        <CharacterSomeInfo
          title="Origin location"
          titleInfo={characterInfo.origin?.name}
        />
      </article>
    </section>
  );
};

export default CharacterDetails;
