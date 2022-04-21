import s from './Button.module.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
