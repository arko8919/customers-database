import React from "react";
import Table from "react-bootstrap/Table";

import "./customerTable.scss";

import { CustomerRow } from "./CustomerRow";

export const CustomerTable = (props) => {
  // Table row elements, which will be added to a customer table
  const rows = [];

  props.customersList.forEach((customer) => {
    // Condition when name is not selected
    if (
      props.city !== customer.city &&
      props.name === "All" &&
      props.city !== "All"
    ) {
      return;
    }
    // Condition when city is not selected
    if (
      props.name !== customer.name &&
      props.city === "All" &&
      props.name !== "All"
    ) {
      return;
    }
    // Condition if both city and name are selected
    if (
      (props.city !== customer.city || props.name !== customer.name) &&
      props.name !== "All" &&
      props.city !== "All"
    ) {
      return;
    }

    // Row with customer data
    rows.push(
      <CustomerRow
        key={customer.id}
        customer={customer}
        onDeleteCustomer={props.onDeleteCustomer}
        onEditCustomer={props.onEditCustomer}
      />
    );
  });

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
