import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ImageGallery = props => {
  const { images, openModal } = props;
  return (
    <ul className={s.gallery}>
      {images.map(el => (
        <ImageGalleryItem key={nanoid()} item={el} openModal={openModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
