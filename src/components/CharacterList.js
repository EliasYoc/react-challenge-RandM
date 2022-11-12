import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import CardCharacter from "./CardCharacter";
import styles from "./CharacterList.module.css";
import Pagination from "./Pagination";
const CharacterList = () => {
  const { foundCharacter } = useContext(CharactersContext);

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
      <Pagination />
      {/* <div className={styles.wrapperPag}>
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
      </div> */}
    </>
  );
};

export default CharacterList;
