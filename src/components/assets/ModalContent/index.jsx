import React from "react";
import styles from "./index.module.css";

const ModalContent = ({ closeModal, content }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          Close
        </button>
        <h2>Modal Title</h2>
        <p>This is a modal pop-up.</p>
        {content}
      </div>
    </div>
  );
};

export default ModalContent;
