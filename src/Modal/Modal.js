import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const obj = props;
  const { show, onClose } = obj;
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">SORRY, YOU ARE NOT AN ADMIN</h4>
          </div>
          <div className="modal-body">
            YOU MUST BE ADMIN TO ADD/DELETE CARS
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose} className="button">Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
