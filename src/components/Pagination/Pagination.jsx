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
        <button
          onClick={() => {
            handlePageClick(i + 1);
          }}
          disabled={currentPage === i + 1}
          className={
            currentPage !== i + 1
              ? style.button
              : `${style.button} ${style.current}`
          }
          key={i}
        >
          {i + 1}
        </button>
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
