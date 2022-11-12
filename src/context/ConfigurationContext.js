import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
export const ConfigurationContext = createContext();
const initialFilterState = {
  character: { status: "", gender: "", species: "", type: "" },
  location: { name: "", type: "", dimension: "" },
  episode: { name: "", episode: "" },
};
const initialConfigState = {
  isFavoritesOpen: false,
  showRecents: false,
};
const ConfigurationProvider = ({ children }) => {
  const [configuration, setConfiguration] = useState(initialConfigState);
  const [homePaginationInfo, setHomePaginationInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [filterCharacters, setFilterCharacters] = useState(initialFilterState);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenFavorite = () => {
    setConfiguration({
      ...configuration,
      isFavoritesOpen: !configuration.isFavoritesOpen,
    });
  };
  const showRecents = () => {
    setConfiguration((prev) => ({ ...prev, showRecents: true }));
  };
  const handleFilterCharacters = (e, searchName) => {
    const queryCharacterName = searchParams.get("q");
    if (!queryCharacterName) setSearchParams(`q=${searchName}`);

    const field = e.target.dataset.field;
    const param = e.target.dataset.queryParam;
    const paramValue = e.target.value;
    setFilterCharacters({
      ...filterCharacters,
      [field]: { ...filterCharacters[field], [param]: paramValue },
    });
  };
  const handleDeleteCharacterFilter = (field) => {
    setFilterCharacters({
      ...filterCharacters,
      [field]: { ...initialFilterState[field] },
    });
  };
  const value = {
    configuration,
    setConfiguration,
    handleOpenFavorite,
    showRecents,
    handleFilterCharacters,
    filterCharacters,
    handleDeleteCharacterFilter,
    setHomePaginationInfo,
    homePaginationInfo,
    searchParams,
    setSearchParams,
    pageNumber,
    setPageNumber,
  };
  return (
    <ConfigurationContext.Provider value={value}>
      {children}
    </ConfigurationContext.Provider>
  );
};

export default ConfigurationProvider;
