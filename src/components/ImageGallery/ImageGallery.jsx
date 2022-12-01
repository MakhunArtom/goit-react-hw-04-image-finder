import css from './ImageGallery.module.css';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    isOpen: false,
  };

  img = '';

  handelImgClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }

    this.img = e.target.dataset.source;
    this.togelModal();
  };

  togelModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { imeges, incrimentpage } = this.props;

    return (
      <>
        <div>
          <ul className={css.ImageGallery} onClick={this.handelImgClick}>
            <ImageGalleryItem imeges={imeges} />
          </ul>
          <div className={css.loadMore}>
            <Button incrimentpage={incrimentpage} />
          </div>
        </div>

        {isOpen && (
          <Modal onClose={this.togelModal}>
            <img className={css.modalImg} src={this.img} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
