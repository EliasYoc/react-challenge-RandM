import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { CharactersContext } from "../context/CharactersContext";
import styles from "./BtnDeleteRecent.module.css";
const BtnDeleteRecent = ({ value }) => {
  const { recentSearch, setStorageRecents } = useContext(CharactersContext);
  const handleDeleteRecent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const deletedValues = recentSearch.filter((recent) => recent !== value);
    setStorageRecents(deletedValues);
  };
  return (
    <button onClick={handleDeleteRecent} className={styles.btn}>
      <CgClose />
    </button>
  );
};

export default BtnDeleteRecent;
