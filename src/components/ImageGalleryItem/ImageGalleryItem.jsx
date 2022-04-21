import s from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
