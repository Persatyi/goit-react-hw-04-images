import s from './Searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

const Searchbar = props => {
  const [value, setValue] = useState('');

  const getValue = e => {
    e.preventDefault();
    const { onSubmit } = props;
    onSubmit(value);
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={getValue}>
        <button type="submit" className={s.button}>
          <FcSearch />
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          onChange={e =>
            setValue({
              value: e.target.value,
            })
          }
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
