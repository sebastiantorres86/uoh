import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "./logo.png";

const Footer = () => {
  return (
    <Nav className="bg-primary footer fixed-bottom" activeKey="/home">
      <Nav.Item className="px-5">
        <Nav.Link href="/home">
          <img
            src={logo}
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="Universidad O'Higgins Logo"
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="px-5 lines">
        <p className="footer-address">&copy; Universidad de O'Higgins</p>
        <p>Av. Libertador Bernardo O'Higgins N°611</p>
        <p>Sitio web administrado por Equipo Admisión UOH</p>
      </Nav.Item>
      <Nav.Item className="px-5">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
