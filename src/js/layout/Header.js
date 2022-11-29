import React from "react";
import { Card } from "react-bootstrap";

import "./header.scss";

export const Header = () => {
  return (
    <Card as="header" className="header border-0">
      <Card.Header as="h1" className="text-center mt-0 border-0">
        User Database
      </Card.Header>
      <Card.Body as="section" className="text-center mt-0">
        <Card.Title as="h2">React & Firebase</Card.Title>
        <Card.Text>
          Simple application which functionality is built around React and
          Firebase with addition of Bootstrap styling. Sign Up and Login In to
          use the customer database.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
