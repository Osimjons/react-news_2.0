import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import { Image } from '../Image/Image';
import style from './style.module.css';

export const NewsBunner = ({ item }) => {
  return (
    <div className={style.bunner}>
      <Image image={item?.image} />
      <h3 className={style.title}>{item.title}</h3>
      <p className={style.extra}>
        {formatTimeAgo(item.published)} автор {item.author}
      </p>
    </div>
  );
};
