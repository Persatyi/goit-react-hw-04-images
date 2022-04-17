import s from './Modal.module.css';
import { Component } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
  }

  closeModalByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModalByClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { image, nextImage, prevImage } = this.props;
    const { src, alt } = image;
    return (
      <div className={s.overlay} onClick={this.closeModalByClick}>
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
}

export default Modal;
