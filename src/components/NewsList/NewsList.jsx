import { withSkeleton } from '../../hocs/withSkeleton';
import { NewsItem } from '../NewsItem/NewsItem';
import style from './style.module.css';

export const NewList = ({ news }) => {
  return (
    <ul className={style.list}>
      {news && news.map((item) => <NewsItem key={item.id} item={item} />)}
    </ul>
  );
};
export const NewListWithSkeleton = withSkeleton(NewList, 'item', 10);
