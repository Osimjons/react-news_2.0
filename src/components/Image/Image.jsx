import style from './style.module.css';

export const Image = ({ image }) => {
  return (
    <div className={style.wrapper}>
      {image && (
        <img
          src={image !== 'None' ? image : '../../../public/favicon.svg'}
          alt="news image"
          className={style.image}
        />
      )}
    </div>
  );
};
