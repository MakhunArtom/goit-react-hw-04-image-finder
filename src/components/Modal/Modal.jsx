import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, img }) => {
  useEffect(() => {
    window.addEventListener('keydown', hendelKeydownModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', hendelKeydownModal);
    };
  });

  const hendelKeydownModal = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handelBakdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handelBakdropClick}>
      <div className={css.Modal}>
        <img className={css.modalImg} src={img} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.hendelKeydownModal);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.hendelKeydownModal);
//   }

//   hendelKeydownModal = e => {
//     console.log(e.code);
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handelBakdropClick = ({ target, currentTarget }) => {
//     if (target === currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={css.Overlay} onClick={this.handelBakdropClick}>
//         <div className={css.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
