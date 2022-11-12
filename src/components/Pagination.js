import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ConfigurationContext } from "../context/ConfigurationContext";
import { useContext } from "react";
import styles from "./Pagination.module.css";
const Pagination = () => {
  const { homePaginationInfo, setPageNumber, pageNumber } =
    useContext(ConfigurationContext);
  const handleSelectPageNum = (obj) => {
    const { selected } = obj;
    const page = selected + 1;
    setPageNumber(page);
  };
  return (
    <div className={styles.wrapperPag}>
      <ReactPaginate
        forcePage={pageNumber - 1}
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
  );
};

export default Pagination;
