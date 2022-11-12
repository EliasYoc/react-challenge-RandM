import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import CardCharacter from "./CardCharacter";
import styles from "./CharacterList.module.css";
import ReactPaginate from "react-paginate";
import { ConfigurationContext } from "../context/ConfigurationContext";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const CharacterList = () => {
  const { foundCharacter } = useContext(CharactersContext);
  const { homePaginationInfo, setPageNumber } =
    useContext(ConfigurationContext);
  const handleSelectPageNum = (obj) => {
    const { selected } = obj;
    const page = selected + 1;
    setPageNumber(page);
  };
  return (
    <>
      <section className={styles.list}>
        {foundCharacter.map((character) => (
          <CardCharacter
            key={character.id}
            id={character.id}
            image={character.image}
            status={character.status}
            name={character.name}
            allInfo={character}
          />
        ))}
      </section>
      <div className={styles.wrapperPag}>
        <ReactPaginate
          containerClassName={`${styles.pagination} scroll`}
          breakClassName={styles.ellipsis}
          activeClassName={styles.active}
          pageLinkClassName={styles.link}
          pageClassName={styles.pagLi}
          breakLabel="..."
          nextLabel={<FiChevronRight />}
          previousLabel={<FiChevronLeft />}
          pageCount={homePaginationInfo.pages}
          onPageChange={handleSelectPageNum}
          pageRangeDisplayed={3}
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default CharacterList;
