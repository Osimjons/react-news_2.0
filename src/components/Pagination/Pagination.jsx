import { Button } from '../Button/Button';
import style from './style.module.css';
export const Pagination = ({
  handlePreviosPage,
  handleNextPage,
  handlePageClick,
  currentPage,
  totalPages,
}) => {
  return (
    <div className={style.header}>
      <button
        onClick={handlePreviosPage}
        className={style.button}
        disabled={currentPage <= 1}
      >
        {'<'}
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <Button
          onClick={() => {
            handlePageClick(i + 1);
          }}
          disabled={currentPage === i + 1}
          activeButton={currentPage !== i + 1 ? false : true}
          key={i}
        >
          {i + 1}
        </Button>
      ))}
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={style.button}
      >
        {'>'}
      </button>
    </div>
  );
};
