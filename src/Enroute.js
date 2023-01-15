import { useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from './Modal/Modal';

const Enroute = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Modal onClose={() => setShow(false)} show={show} />
      {navigate('/')}
    </>
  );
};

export default Enroute;
