import style from './style.module.css';

export const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className={style.categories}>
      <button
        className={!selectedCategory ? style.active : style.item}
        onClick={() => {
          setSelectedCategory(null);
        }}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? style.active : style.item}
          onClick={() => {
            setSelectedCategory(category);
          }}
          key={category}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};
