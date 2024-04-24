import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <button onClick={handleShow} type="submit" className="btn custom-btn-style">Send</button>

      <Modal
        show={show}  // Prop to control the visibility of the modal
        onHide={handleClose}  // Function to handle modal close event
        backdrop="static"  // Prop to control the behavior of the modal backdrop
        keyboard={false} // Prop to disable closing the modal by pressing the escape key
      >
        <Modal.Header closeButton className="text-center border-0">
          <Modal.Title className="w-100 font-weight-bold" >Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center border-0">
         Your message was successfully sent to Doneil
        </Modal.Body>
        <Modal.Footer  className="justify-content-center border-0">
        <button onClick={handleClose} type="submit" className="btn custom-btn-style">Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;