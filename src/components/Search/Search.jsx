import style from './style.module.css';

export const Search = ({ keywords, setKeywords }) => {
  const resetBehavior = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.search} onSubmit={resetBehavior}>
      <input
        className={style.input}
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter keywors..."
      />
    </form>
  );
};
