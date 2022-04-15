import s from './Button.module.css';

const Button = props => {
  const { onClick } = props;
  return (
    <>
      <button type="button" className={s.button} onClick={onClick}>
        Load more
      </button>
    </>
  );
};

export default Button;
