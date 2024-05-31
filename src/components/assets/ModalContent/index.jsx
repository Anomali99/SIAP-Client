import React from "react";
import styles from "./index.module.css";

const ModalContent = ({ closeModal, content, title, description }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          Close
        </button>
        {description}
        {title ? <h2>{title}</h2> : ""}
        {content}
      </div>
    </div>
  );
};

export default ModalContent;
