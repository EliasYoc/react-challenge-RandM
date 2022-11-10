import React, { createContext, useState } from "react";
export const CharactersContext = createContext();
const CharactersProvider = ({ children }) => {
  const [foundCharacter, setFoundCharacter] = useState([]);
  const [characterInfo, setCharacterInfo] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const data = {
    foundCharacter,
    setFoundCharacter,
    setCharacterInfo,
    characterInfo,
    episodes,
    setEpisodes,
  };
  return (
    <CharactersContext.Provider value={data}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
