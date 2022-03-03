import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



export const Modal = () => {

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
          <button>X</button>

      </Modal>
    </div>
  );
}