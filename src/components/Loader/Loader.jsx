import css from './Loader.module.css';
import CircularProgress from '@mui/material/CircularProgress';

export function Loader() {
  return (
    <div role="alert">
      <div className={css.icon__spin}>
        <CircularProgress className={css.spinner} />
        Загружаем...
      </div>
    </div>
  );
}
