import React from "react";
import Card from "react-bootstrap/Card";

import "./footer.scss";

export const Footer = () => {
  return (
    <>
      <Card as="footer" className="footer">
        <Card.Body as="ul" className="d-flex justify-content-center">
          <Card.Link
            href="https://www.linkedin.com/in/artur-sas-dunajewski/"
            title="Connect with me on Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </Card.Link>
          <Card.Link
            href="https://github.com/arko8919"
            title="Connect with me on Github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Card.Link>
          <Card.Link
            href="https://www.facebook.com/artur.sasdunajewski"
            title="Connect with me on Facebook"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </Card.Link>
          <Card.Link
            href="https://www.instagram.com/arko8919/"
            title="Connect with me on Instagram"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </Card.Link>
        </Card.Body>
        <p className="text-center">@2022 Artur Sas Dunajewski</p>
      </Card>
    </>
  );
};
