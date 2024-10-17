import css from "./ImageCard.module.css";

const ImageCard = ({
  data: {
    alt_description,
    urls: { regular },
  },
  onOpenModal,
}) => {
  const onClickOpenModal = () => {
    onOpenModal({ alt_description, regular });
  };

  return (
    <div className={css.imageCard}>
      <img
        src={regular}
        alt={alt_description}
        height={100}
        width={200}
        className={css.image}
        onClick={onClickOpenModal}
      />
    </div>
  );
};

export default ImageCard;
