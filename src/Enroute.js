import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from './Modal/Modal';

const Enroute = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const onClose = () => {
    setShow(false);
    navigate('/');
  };

  const esc = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.body.addEventListener('keydown', esc);
    }

    return () => {
      document.body.removeEventListener('keydown', esc);
    };
  });

  return (
    <>
      <Modal
        onClose={onClose}
        show={show}
      />
    </>
  );
};

export default Enroute;
