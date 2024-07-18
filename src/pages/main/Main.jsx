import { useEffect, useState } from 'react';
import { NewsBunner } from '../../components/NewsBunner/NewsBunner';
import style from './style.module.css';
import { getNews } from '../../API/apiNews';
import { NewList } from '../../components/NewsList/NewsList';

export const Main = () => {
  const [news, setNews] = useState([]);

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
      {news.length > 0 && <NewsBunner item={news[0]} />}
      <NewList news={news} />
    </main>
  );
};
