import React, { FC, useState } from 'react';
import Modal from '../../components/modal/modal';

const OrderDetail: FC = () => {
  const [openModalExample, setOpenModalExample] = useState(false);
  return (
    <div>
      Detail screen
      <button type={'button'} onClick={() => setOpenModalExample(true)}>
        Open modal
      </button>
      <Modal
        isOpen={openModalExample}
        onClose={() => setOpenModalExample(false)}
        renderCloseButton={({ close }) => (
          <button type={'button'} onClick={close}>
            Close
          </button>
        )}
      >
        <div>HEHEHE</div>
      </Modal>
    </div>
  );
};

export default OrderDetail;
