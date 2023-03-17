import React from "react";
import { Modal, Button } from "react-bootstrap";

type ConfirmationModalProps = {
  show: boolean;
  title: string;
  body: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal : React.FC<ConfirmationModalProps> = ({
  show,
  title,
  body,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
           Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
           Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
