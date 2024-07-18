import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import style from './style.module.css';

export const NewsItem = ({ item }) => {
  return (
    <li className={style.item}>
      <div
        className={style.wrapper}
        style={{
          backgroundImage: `url(${
            item.image !== 'None' ? item.image : '../../../public/favicon.svg'
          })`,
        }}
      ></div>
      <div className={style.info}>
        <h3 className={style.title}>{item.title}</h3>
        <p className={style.extra}>
          {formatTimeAgo(item.published)} автор {item.author}
        </p>
      </div>
    </li>
  );
};
