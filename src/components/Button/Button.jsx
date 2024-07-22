import style from './style.module.css';

export const Button = ({ children, activeButton, ...rest }) => {
  return (
    <div className={style.wrapper} {...rest}>
      <button className={activeButton ? style.active : style.button}>
        {children}
      </button>
    </div>
  );
};
