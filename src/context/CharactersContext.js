import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const CharactersContext = createContext();
const CharactersProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [foundCharacter, setFoundCharacter] = useState([]);
  const [characterInfo, setCharacterInfo] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [recentSearch, setStorageRecents] = useLocalStorage([], "resentSearch");
  const [favorites, setStorage] = useLocalStorage([], "favoritesRM");

  const data = {
    foundCharacter,
    setFoundCharacter,
    setCharacterInfo,
    characterInfo,
    episodes,
    setEpisodes,
    favorites,
    setStorage,
    setStorageRecents,
    recentSearch,
    search,
    setSearch,
  };
  return (
    <CharactersContext.Provider value={data}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
