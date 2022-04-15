import s from './Searchbar.module.css';
import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

class Searchbar extends Component {
  state = {
    value: '',
  };

  getValue = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.getValue}>
          <button type="submit" className={s.button}>
            <FcSearch />
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            onChange={e => this.setState({ value: e.target.value.trim() })}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
