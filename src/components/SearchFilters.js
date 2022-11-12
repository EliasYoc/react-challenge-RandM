import styles from "./SearchFilters.module.css";
import BtnFilterCharacters from "../components/BtnFilterCharacters";
import { ConfigurationContext } from "../context/ConfigurationContext";
import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import BtnGeneral from "./BtnGeneral";
import { CgClose } from "react-icons/cg";

const SearchFilters = () => {
  const {
    handleFilterCharacters,
    handleDeleteCharacterFilter,
    filterCharacters,
  } = useContext(ConfigurationContext);
  const { search } = useContext(CharactersContext);
  const { character } = filterCharacters;

  return (
    <div className={styles.filterField}>
      <div className={styles.fieldContainer}>
        <BtnFilterCharacters
          onChange={(e) => handleFilterCharacters(e, search)}
          arrOptions={[
            { queryValue: "alive", title: "Filtrar vivos" },
            { queryValue: "dead", title: "Filtrar muertos" },
            { queryValue: "unknown", title: "Desconocido" },
          ]}
          dataQueryParam="status"
          dataField="character"
          firstText="Filtrar por status"
          selectedQueryValue={character.status}
        />
        <BtnFilterCharacters
          onChange={(e) => handleFilterCharacters(e, search)}
          arrOptions={[
            { queryValue: "female", title: "Femenino" },
            { queryValue: "male", title: "Masculino" },
            { queryValue: "unknown", title: "Desconocido" },
            { queryValue: "genderless", title: "Sin género" },
          ]}
          dataQueryParam="gender"
          dataField="character"
          firstText="Filtrar por género"
          selectedQueryValue={character.gender}
        />
        <BtnFilterCharacters
          onChange={(e) => handleFilterCharacters(e, search)}
          arrOptions={[
            { queryValue: "human", title: "Humano" },
            { queryValue: "humanoid", title: "Humanoide" },
            { queryValue: "alien", title: "Alien" },
            { queryValue: "robot", title: "Robot" },
            {
              queryValue: "mythological",
              title: "Criatura mitológica",
            },
            {
              queryValue: "animal",
              title: "Animal",
            },
          ]}
          dataQueryParam="species"
          dataField="character"
          firstText="Filtrar por especies"
          selectedQueryValue={character.species}
        />
      </div>

      <BtnGeneral
        icon={CgClose}
        onClick={() => handleDeleteCharacterFilter("character")}
        className={styles.btnFilterDelete}
      />
    </div>
  );
};

export default SearchFilters;
