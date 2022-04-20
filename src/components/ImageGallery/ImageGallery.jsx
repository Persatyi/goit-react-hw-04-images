import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = props => {
  const { images, openModal } = props;
  return (
    <ul className={s.gallery}>
      {images.map(el => (
        <ImageGalleryItem item={el} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
