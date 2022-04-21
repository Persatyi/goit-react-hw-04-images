import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
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

export default ImageGallery;
