import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ sourceName, page }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem sourceName={sourceName} page={page} />
    </ul>
  );
};
