import css from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  console.log(photo);

  return (
    <>
      <img
        className={css.image}
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
    </>
  );
};

export default ImageCard;
