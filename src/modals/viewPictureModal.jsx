import react, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";

function ViewPictureModal(props) {
  const [imgId, setImgId] = useState();



  return (
    <Modal
      onEnter={() => setImgId(props.imagesrc)} // Set this string to clicked target
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Header</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          style={{ width: "100%" }}
          src={`https://drive.google.com/uc?export=view&id=${imgId}`}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewPictureModal;
