import s from './Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Modal = props => {
  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  });

  const closeModalByEsc = e => {
    if (e.code === 'Escape') {
      props.closeModal();
    }
  };

  const closeModalByClick = e => {
    if (e.target === e.currentTarget) {
      props.closeModal();
    }
  };

  const { image, nextImage, prevImage } = props;
  const { src, alt } = image;
  return (
    <div className={s.overlay} onClick={closeModalByClick}>
      <button onClick={prevImage} className={s.arrowLeft}>
        <HiArrowLeft />
      </button>
      <button onClick={nextImage} className={s.arrowRight}>
        <HiArrowRight />
      </button>
      <div className={s.modal}>
        <img className={s.img} src={src} alt={alt} width="800px" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
};

export default Modal;
