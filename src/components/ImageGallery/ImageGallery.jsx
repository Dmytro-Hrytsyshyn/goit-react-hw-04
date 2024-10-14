import ImageCard from "./ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

function ImageGallery({ photos }) {
  return (
    <ul className={css.photos_list}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
