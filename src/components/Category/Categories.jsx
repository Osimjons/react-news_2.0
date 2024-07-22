import { Button } from '../Button/Button';
import style from './style.module.css';

export const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className={style.categories}>
      <Button
        activeButton={!selectedCategory ? true : false}
        onClick={() => {
          setSelectedCategory(null);
        }}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          activeButton={selectedCategory === category ? true : false}
          onClick={() => {
            setSelectedCategory(category);
          }}
          key={category}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </div>
  );
};
