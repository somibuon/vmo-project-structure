import React, { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import classes from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose(): void;
  renderCloseButton?(props: { close(): void }): ReactElement;
}

const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  renderCloseButton,
}) => {
  return isOpen
    ? createPortal(
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            {renderCloseButton ? (
              renderCloseButton({ close: onClose })
            ) : (
              <button
                type={'button'}
                className={classes.closeButton}
                onClick={onClose}
              >
                X
              </button>
            )}
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
