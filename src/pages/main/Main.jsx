import { useEffect, useState } from 'react';
import { getCategories, getNews } from '../../API/apiNews';
import { NewsBunner } from '../../components/NewsBunner/NewsBunner';
import { NewList } from '../../components/NewsList/NewsList';
import style from './style.module.css';
import ThemeButton from '../../context/ThemChenger/ThemeChanger';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import { Pagination } from '../../components/Pagination/Pagination';
import { Categories } from '../../components/Category/Categories';
import { capitalize } from '../../helpers/capitalize';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const TOTALPAGES = 10; //Общее кол-во стр
  const PAGE_SIZE = 10; //Общее кол-во новостей в 1 стр

  const fetchNews = async (currentPage, PAGE_SIZE) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: PAGE_SIZE,
        category: selectedCategory === 'all' ? null : selectedCategory,
        PAGE_SIZE,
      });
      setNews(response.news);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(capitalize(['all', ...response.categories]));
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage, PAGE_SIZE);
  }, [currentPage, selectedCategory]);

  const handlePreviosPage = () => {
    if (currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < TOTALPAGES) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <main className={style.main}>
      <ThemeButton />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {news.length > 0 && !isLoading ? (
        <NewsBunner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}

      <Pagination
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        totalPages={TOTALPAGES}
      />

      {news.length > 0 && !isLoading ? (
        <NewList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
      <Pagination
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        totalPages={TOTALPAGES}
      />
    </main>
  );
};
