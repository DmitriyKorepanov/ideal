import React, { FC } from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTexts: any;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, modalTexts }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.header}>{modalTexts.title}</h2>
        <form
          className={styles.form}
          action="https://idealtechno.ru/email.php"
          method="POST"
        >
          <input
            type="text"
            placeholder={modalTexts.fio}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder={modalTexts.mail}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder={modalTexts.phone}
            className={styles.input}
            required
          />
          <textarea
            placeholder={modalTexts.comment}
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
              {modalTexts.button}
          </button>
          <p className={styles.notice}>{modalTexts.legal}</p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
