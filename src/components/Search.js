import React, { useContext, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { CharactersContext } from "../context/CharactersContext";
import styles from "./Search.module.css";
const Search = () => {
  const { setFoundCharacter } = useContext(CharactersContext);
  const [search, setSearch] = useState("");
  const refName = useRef("");
  const handleChange = (e) => {
    setSearch(() => e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (refName.current !== search) {
      fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then((res) => res.json())
        .then((data) => setFoundCharacter(data.results));
    }
    refName.current = search;
  };
  return (
    <div className={styles.search}>
      <label className={styles.label} htmlFor="search">
        Busca tu personaje:
        <form onSubmit={handleSubmit} className={styles.inputContainer}>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            name="search"
            id="search"
            value={search}
          />
          <button className={styles.inputBtn} type="sumbit">
            <RiSearchLine />
          </button>
        </form>
      </label>
    </div>
  );
};

export default Search;
