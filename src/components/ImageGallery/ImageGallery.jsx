import css from './ImageGallery.module.css';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export const ImageGallery = ({ imeges, incrimentpage, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const handelImgClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }

    setModalImg(e.target.dataset.source);

    togelModal();
  };

  const togelModal = () => {
    setIsOpen(state => !state);
  };

  return (
    <>
      <div>
        <ul className={css.ImageGallery} onClick={handelImgClick}>
          <ImageGalleryItem imeges={imeges} />
        </ul>
        {status === 'resolved' && (
          <div className={css.loadMore}>
            <Button incrimentpage={incrimentpage} />
          </div>
        )}
      </div>

      {isOpen && <Modal img={modalImg} onClose={togelModal}></Modal>}
    </>
  );
};

// class oldmageGallery extends Component {
//   state = {
//     isOpen: false,
//   };

//   img = '';

//   handelImgClick = e => {
//     if (e.target.nodeName !== 'IMG') {
//       return;
//     }

//     this.img = e.target.dataset.source;
//     this.togelModal();
//   };

//   togelModal = () => {
//     this.setState(({ isOpen }) => ({
//       isOpen: !isOpen,
//     }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     const { imeges, incrimentpage, status } = this.props;

//     return (
//       <>
//         <div>
//           <ul className={css.ImageGallery} onClick={this.handelImgClick}>
//             <ImageGalleryItem imeges={imeges} />
//           </ul>
//           {status === 'resolved' && (
//             <div className={css.loadMore}>
//               <Button incrimentpage={incrimentpage} />
//             </div>
//           )}
//         </div>

//         {isOpen && (
//           <Modal onClose={this.togelModal}>
//             <img className={css.modalImg} src={this.img} alt="" />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
