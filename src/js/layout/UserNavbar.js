// React
import { Link } from "react-router-dom";
// Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// Components
import { CustomerModal } from "../components/CustomerModal";

import "./userNavbar.scss";

export const UserNavbar = (props) => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top">
        <Container className="d-flex flex-row">
          <Navbar.Brand href="/" className="brand me-auto">
            SaS Development
          </Navbar.Brand>
          <CustomerModal
            className=""
            onAddCustomer={props.onAddCustomer}
            addCustomer={true}
          />
          <Link
            as="button"
            to="/dashboard"
            variant="primary"
            className="btn btn-primary"
          >
            Account
          </Link>
        </Container>
      </Navbar>
    </>
  );
};
