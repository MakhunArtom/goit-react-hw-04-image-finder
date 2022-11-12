import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    sourceName: '',
    page: 1,
  };

  onHendelInput = e => {
    this.setState({ sourceName: e.currentTarget.value.toLowerCase() });
  };

  submit = e => {
    e.preventDefault();
    const { sourceName, page } = this.state;
    const { hendelFormSubmit } = this.props;

    if (sourceName.trim() === '') {
      return;
    }

    hendelFormSubmit(sourceName, page);

    this.setState({
      sourceName: '',
      page: 1,
    });
  };

  render() {
    const { sourceName } = this.state;

    return (
      <header className={css.searchbar}>
        <form onSubmit={this.submit} className={css.searchForm}>
          <button type="submit" className={css.searchForm__button}>
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onHendelInput}
            className={css.searchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={sourceName}
          />
        </form>
      </header>
    );
  }
}
