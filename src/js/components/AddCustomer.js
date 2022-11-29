import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { CustomerFormModal } from "./CustomerFormModal";

import "./addCustomer.scss";

// The initial state for customerDetails state
const initState = {
  name: "",
  surname: "",
  email: "",
  phoneNumber: "",
  age: "",
  city: "",
  id: 0,
};

export const AddCustomer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  // New customer data
  const [customerDetails, setCustomerDetails] = useState(initState);

  // On any form input changes, update state of "customerDetails" with new data
  const handleDataChange = (e) => {
    setCustomerDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit this form when we press "Add" button inside our modal
  function handleAddCustomer(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      customerDetails.id = uuidv4(); // Generate ID
      props.onAddCustomer(customerDetails);
      setCustomerDetails(initState); // Clear input data after submitting
    }
    setValidated(true);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Customer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New customer</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleAddCustomer}>
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
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
