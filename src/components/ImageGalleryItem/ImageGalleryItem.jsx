import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imeges }) => {
  return imeges.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImeg}
        data-source={largeImageURL}
        src={webformatURL}
        alt=""
      />
    </li>
  ));
};
