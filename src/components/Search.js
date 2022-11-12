import React, { useContext, useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { CharactersContext } from "../context/CharactersContext";
import { ConfigurationContext } from "../context/ConfigurationContext";
import LoaderCircle from "./LoaderCircle";
import styles from "./Search.module.css";
import SearchFilters from "./SearchFilters";
import SearchRecents from "./SearchRecents";
const Search = () => {
  const {
    setFoundCharacter,
    setStorageRecents,
    recentSearch,
    search,
    setSearch,
  } = useContext(CharactersContext);
  const {
    configuration,
    setConfiguration,
    showRecents,
    filterCharacters,
    setHomePaginationInfo,
    searchParams,
    setSearchParams,
    pageNumber,
    setPageNumber,
  } = useContext(ConfigurationContext);
  const [searchError, setSearchError] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const name = searchParams.get("q");
  const { character } = filterCharacters;
  useEffect(
    function request() {
      setConfiguration((prev) => ({ ...prev, showRecents: false }));
      setSearch(name ?? "");
      if (name === null) return;
      const gralQuery = `${
        character.status ? `&status=${character.status}` : ""
      }${character.gender ? `&gender=${character.gender}` : ""}${
        character.species ? `&species=${character.species}` : ""
      }${pageNumber ? `&page=${pageNumber}` : ""}`;

      setSearchLoading(true);
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}${gralQuery}`
      )
        .then((res) => {
          if (!res.ok) return Promise.reject(`No hay resultados`);
          return res.json();
        })
        .then((data) => {
          setHomePaginationInfo(data.info);
          setFoundCharacter(data.results);
          setSearchError("");
          setSearchLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setSearchError(err);
          setSearchLoading(false);
        });

      return () => {};
    },
    [
      name,
      setFoundCharacter,
      setConfiguration,
      character.status,
      character.gender,
      character.species,
      setHomePaginationInfo,
      setSearch,
      pageNumber,
    ]
  );

  const handleChange = (e) => {
    setSearch(() => e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPageNumber(1);
    if (!recentSearch.includes(search))
      setStorageRecents([...recentSearch, search]);
    setSearchParams(`q=${search}`);
    // navigate({ pathname: "/", search: `?q=${search}` });
  };

  return (
    <>
      <div className={styles.search}>
        <form
          className={styles.form}
          onFocus={showRecents}
          onSubmit={handleSubmit}
        >
          <label htmlFor="search">Nombre del personaje:</label>
          <div className={styles.container}>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              name="search"
              id="search"
              value={search}
              autoComplete="off"
            />
            <button className={styles.inputBtn} type="sumbit">
              {searchLoading ? <LoaderCircle /> : <RiSearchLine />}
            </button>
          </div>
          {configuration.showRecents && <SearchRecents />}
        </form>
        <SearchFilters />
      </div>
      {searchError && <h1 className={styles.error}>{searchError}</h1>}
    </>
  );
};

export default Search;
