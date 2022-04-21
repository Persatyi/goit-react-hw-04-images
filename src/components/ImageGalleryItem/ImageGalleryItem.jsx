import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { item, openModal } = props;
  const { largeImageURL, webformatURL, tags } = item;
  return (
    <li className={s.galleryItem} onClick={openModal}>
      <img
        key={largeImageURL}
        className={s.image}
        src={webformatURL}
        alt={tags}
        data-src={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  item: PropTypes.shape({
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};

export default ImageGalleryItem;
