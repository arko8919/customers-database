import Button from "react-bootstrap/Button";

import { CustomerModal } from "./CustomerModal";

export function CustomerRow(props) {
  // When delete button is clicked, customer data ID will be passed to handler function and then this customer will be deleted
  function handleDeleteCustomer() {
    props.onDeleteCustomer(props.customer.id);
  }

  return (
    <tr key={props.customer.id}>
      <td>{props.customer.name}</td>
      <td>{props.customer.surname}</td>
      <td>{props.customer.email}</td>
      <td>{props.customer.phoneNumber}</td>
      <td>{props.customer.age}</td>
      <td>{props.customer.city}</td>
      <td>
        <CustomerModal
          customer={props.customer}
          onEditCustomer={props.onEditCustomer}
          addCustomer={false}
        />
      </td>
      <td>
        <Button onClick={handleDeleteCustomer}>Delete</Button>
      </td>
    </tr>
  );
}
