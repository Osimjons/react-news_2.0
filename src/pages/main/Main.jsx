import { useEffect, useState } from 'react';
import { getNews } from '../../API/apiNews';
import { NewsBunner } from '../../components/NewsBunner/NewsBunner';
import { NewList } from '../../components/NewsList/NewsList';
import style from './style.module.css';
import ThemeButton from '../../context/ThemChenger/ThemeChanger';
import { Skeleton } from '../../components/Skeleton/Skeleton';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={style.main}>
      <ThemeButton />
      {news.length > 0 && !isLoading ? (
        <NewsBunner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      {!isLoading ? (
        <NewList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
    </main>
  );
};
