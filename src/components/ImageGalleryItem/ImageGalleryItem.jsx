import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const { item, openModal } = props;
  return (
    <li className={s.galleryItem} onClick={openModal}>
      <img
        className={s.image}
        src={item.webformatURL}
        alt={item.tags}
        data-src={item.largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
