import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ hendelFormSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onHendelInput = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const submit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    hendelFormSubmit(inputValue);

    setInputValue('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={submit} className={css.searchForm}>
        <button type="submit" className={css.searchForm__button}>
          <span className="button-label">Search</span>
        </button>

        <input
          onChange={onHendelInput}
          className={css.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
        />
      </form>
    </header>
  );
};

// class oldSearchbar extends Component {
//   // state = {
//   //   inputValue: '',
//   // };

//   onHendelInput = e => {
//     this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
//   };

//   submit = e => {
//     e.preventDefault();

//     const { inputValue } = this.state;
//     const { hendelFormSubmit } = this.props;

//     if (inputValue.trim() === '') {
//       return;
//     }

//     hendelFormSubmit(inputValue);

//     this.setState({
//       inputValue: '',
//     });
//   };

//   render() {
//     const { inputValue } = this.state;

//     return (
//       <header className={css.searchbar}>
//         <form onSubmit={this.submit} className={css.searchForm}>
//           <button type="submit" className={css.searchForm__button}>
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             onChange={this.onHendelInput}
//             className={css.searchForm__input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={inputValue}
//           />
//         </form>
//       </header>
//     );
//   }
// }
