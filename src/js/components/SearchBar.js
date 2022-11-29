import Form from "react-bootstrap/Form";

export function SearchBar(props) {
  // When user selects a new city from the search bar, update state inside the FilterableCustomerTable component
  function handleCityChange(e) {
    props.onCityChange(e.target.value);
  }

  // When user selects a new name from the search bar, update state inside the FilterableCustomerTable component
  function handleNameChange(e) {
    props.onNameChange(e.target.value);
  }

  // List of names and cities after removing duplicates
  const uniqueCities = [];
  const uniqueNames = [];

  // All cities and names
  const cities = [];
  const names = [];

  // Check if names or cities, don't repeat themselves, if not, add them to arrays
  props.customersList.forEach((customer) => {
    if (!cities.includes(customer.city)) {
      uniqueCities.push(customer.city);
    }

    if (!names.includes(customer.name)) {
      uniqueNames.push(customer.name);
    }
  });

  // Create list element of cities
  uniqueCities.forEach((city, index) => {
    cities.push(<option key={index}>{city}</option>);
  });
  //  Create list element of names
  uniqueNames.forEach((name, index) => {
    names.push(<option key={index}>{name}</option>);
  });

  return (
    <Form className="d-flex flex-row">
      <Form.Group className="mb-3 w-50" controlId="name">
        <Form.Label>Select Name</Form.Label>
        <Form.Select
          aria-label="Search by name"
          id="name"
          name="name"
          value={props.name}
          onChange={handleNameChange}
        >
          <option>All</option>
          {names}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="name">
        <Form.Label>Select City</Form.Label>
        <Form.Select
          aria-label="Search by city"
          id="city"
          name="city"
          value={props.city}
          onChange={handleCityChange}
        >
          <option>All</option>
          {cities}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
