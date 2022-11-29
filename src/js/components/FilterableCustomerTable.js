import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { SearchBar } from "./SearchBar";
import { CustomerTable } from "./CustomerTable";

export function FiltrableCustomerTable(props) {
  const [name, setName] = useState("All");
  const [city, setCity] = useState("All");

  // Set state to a selected name from the search bar
  function handleNameChange(name) {
    setName(name);
  }
  // Set state to a selected city from the search bar
  function handleCityChange(city) {
    setCity(city);
  }

  return (
    <Container as="main" className="filtrable-customer-table">
      <Row as="section">
        <h2 className="mt-5 mb-4">Search</h2>
        <SearchBar
          city={city}
          name={name}
          customersList={props.customersList}
          onCityChange={handleCityChange}
          onNameChange={handleNameChange}
        />
      </Row>
      <Row as="section" className="mb-5 table-container">
        <CustomerTable
          customersList={props.customersList}
          onDeleteCustomer={props.onDeleteCustomer}
          onEditCustomer={props.onEditCustomer}
          city={city}
          name={name}
        />
      </Row>
    </Container>
  );
}
