import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "none",
    padding: "0",
    borderStyle: "none",
  },
};

const ImageModal = ({
  modalData: { regular, alt_description },
  onImageClose,
  isOpen,
}) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onImageClose}
      contentLabel="Image modal"
    >
      <img src={regular} alt={alt_description} className={css.img} />
    </Modal>
  );
};

export default ImageModal;
