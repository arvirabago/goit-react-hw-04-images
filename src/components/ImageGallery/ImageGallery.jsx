import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem key={image.id + index} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};