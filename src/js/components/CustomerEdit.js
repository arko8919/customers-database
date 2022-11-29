import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { CustomerFormModal } from "./CustomerFormModal";

export function CustomerEdit(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  // We set state to use old customer data as inital state
  const [customerDetails, setCustomerDetails] = useState(props.customer);

  // Edit customer data
  const handleDataChange = (e) => {
    setCustomerDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit this form when we press "Edit" button inside our modal
  const handleCustomerDetailsChange = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      customerDetails.id = props.customer.id; // Assign the same ID
      props.onEditCustomer(customerDetails);
    }

    setValidated(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Data</Modal.Title>
        </Modal.Header>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleCustomerDetailsChange}
        >
          <Modal.Body>
            <CustomerFormModal
              onDataChange={handleDataChange}
              customerDetails={customerDetails}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
