import Form from "react-bootstrap/Form";

export function CustomerFormModal(props) {
  // Update "customerDetails" state inside CustomerEdit component
  // Update on any input change
  function handleDataChange(e) {
    props.onDataChange(e);
  }

  return (
    <>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          autoFocus
          name="name"
          onChange={handleDataChange}
          value={props.customerDetails.name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="surname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          required
          type="text"
          name="surname"
          onChange={handleDataChange}
          value={props.customerDetails.surname}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          onChange={handleDataChange}
          value={props.customerDetails.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          required
          type="tel"
          name="phoneNumber"
          onChange={handleDataChange}
          value={props.customerDetails.phoneNumber}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          required
          type="number"
          name="age"
          onChange={handleDataChange}
          value={props.customerDetails.age}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          required
          type="text"
          name="city"
          onChange={handleDataChange}
          value={props.customerDetails.city}
        />
      </Form.Group>
    </>
  );
}
