import { getCategories, getNews } from '../../API/apiNews';
import { Categories } from '../../components/Category/Categories';
import { NewsBunnerWithSkeleton } from '../../components/NewsBunner/NewsBunner';
import { NewListWithSkeleton } from '../../components/NewsList/NewsList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';
import { PAGE_SIZE, TOTALPAGES } from '../../constatnts/constatnts';
import ThemeButton from '../../context/ThemChenger/ThemeChanger';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';
import style from './style.module.css';
export const Main = () => {
  const { filters, chengeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    categories: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const [data, isLoading] = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const [dataCategory] = useFetch(getCategories);

  const handlePreviosPage = () => {
    if (filters.page_number >= 1) {
      chengeFilter('page_number', filters.page_number - 1);
    }
  };

  const handleNextPage = () => {
    if (filters.currentPage < TOTALPAGES) {
      chengeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePageClick = (page_number) => {
    chengeFilter('page_number', page_number);
  };

  return (
    <main className={style.main}>
      <ThemeButton />

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => chengeFilter('keywords', keywords)}
      />

      {dataCategory && (
        <Categories
          categories={dataCategory.categories}
          selectedCategory={filters.categories}
          setSelectedCategory={(categories) =>
            chengeFilter('categories', categories)
          }
        />
      )}

      <NewsBunnerWithSkeleton
        item={data && data.news && data.news[0]}
        isLoading={isLoading}
      />

      <Pagination
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTALPAGES}
      />
      <NewListWithSkeleton news={data && data.news} isLoading={isLoading} />

      <Pagination
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTALPAGES}
      />
    </main>
  );
};
