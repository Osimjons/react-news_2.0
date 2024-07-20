import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import { withSkeleton } from '../../hocs/withSkeleton';
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
export const NewsBunnerWithSkeleton = withSkeleton(NewsBunner, 'banner', 1);
