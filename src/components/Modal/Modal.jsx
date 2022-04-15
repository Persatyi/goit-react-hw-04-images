import s from './Modal.module.css';
import { Component } from 'react';

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
    const { image } = this.props;
    const { src, alt } = image;
    return (
      <div className={s.overlay} onClick={this.closeModalByClick}>
        <div className={s.modal}>
          <img src={src} alt={alt} width="800px" />
        </div>
      </div>
    );
  }
}

export default Modal;
