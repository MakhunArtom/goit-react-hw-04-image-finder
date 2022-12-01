import css from './Buton.module.css';

export const Button = ({ incrimentpage }) => (
  <button className={css.Button} type="button" onClick={incrimentpage}>
    Load More
  </button>
);
