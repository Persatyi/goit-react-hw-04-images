import s from './Modal.module.css';
import { useEffect } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

export default function Modal(props) {
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
}
