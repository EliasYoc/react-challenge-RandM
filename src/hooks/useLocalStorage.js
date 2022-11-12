import { useEffect, useState } from "react";

const useLocalStorage = (initialState, keyLocalStorage) => {
  const [state, setLocal] = useState(initialState);
  useEffect(
    function getStorageValue() {
      const dataStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
      if (dataStorage) setLocal(dataStorage);
    },
    [keyLocalStorage]
  );

  const setStorage = (valueStorage) => {
    localStorage.setItem(keyLocalStorage, JSON.stringify(valueStorage));
    setLocal(valueStorage);
  };

  return [state, setStorage];
};

export default useLocalStorage;
