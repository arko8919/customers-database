import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button, Modal, Form } from "react-bootstrap";
import { CustomerFormModal } from "./CustomerFormModal";

// The initial state
const initState = {
  name: "",
  surname: "",
  email: "",
  phoneNumber: "",
  age: "",
  city: "",
  id: 0,
};

export const CustomerModal = (props) => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Set the initial state.
  let state = {};
  if (props.addCustomer) {
    // If modal is called from Navbar component use "initState" object [ Adding new customer ]
    state = initState;
  } else {
    // If modal is called from CustomerRow component use "customer" object [ Edit existing customer]
    state = props.customer;
  }

  // Customer data
  const [customerDetails, setCustomerDetails] = useState(state);

  // On any form input changes, update state of "customerDetails" with new data
  const handleDataChange = (e) => {
    setCustomerDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit this form when we press "Add" button inside our modal
  function handleNewData(event) {
    event.preventDefault();

    // Stop submission if fields are invalid
    if (event.currentTarget.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Adding new customer
      if (props.addCustomer) {
        customerDetails.id = uuidv4(); // Generate ID
        props.onAddCustomer(customerDetails);
        setCustomerDetails(initState); // Clear input data after submitting
      } else {
        // Editing existing customer
        customerDetails.id = props.customer.id; // Assign the same ID
        props.onEditCustomer(customerDetails);
      }
    }

    setValidated(true);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {props.addCustomer ? "Add Customer" : "Edit"}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.addCustomer ? "New Customer" : "Edit Existing Customer"}
          </Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleNewData}>
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
              {props.addCustomer ? "Add" : "Edit"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
