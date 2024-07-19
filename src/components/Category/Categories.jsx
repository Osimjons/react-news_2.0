import style from './style.module.css';

export const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? style.active : style.item}
          onClick={() => {
            setSelectedCategory(category);
          }}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
