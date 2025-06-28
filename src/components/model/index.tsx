import React from 'react';
import styles from './index.module.scss';

const ConfirmModal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={onCancel}></div>
      <div className={`${styles.modal} ${isOpen ? styles.active : ''}`}>
        <h4>{title}</h4>
        <p>{message}</p>
        <div className={styles.actions}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Ok</button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
