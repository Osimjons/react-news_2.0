import { formateDate } from '../../helpers/formateDate';
import style from './style.module.css';
export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>News Reactify</h1>
      <p>
        <strong className={style.date}>{formateDate(new Date())}</strong>
      </p>
    </header>
  );
};
