import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import logo from "./logo.png";

const Header = () => {
  return (
    <Navbar
      bg="primary"
      variant="light"
      className="d-flex justify-content-between navbar-custom px-5"
    >
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="Universidad O'Higgins Logo"
        />
      </Navbar.Brand>

      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2 form-control-custom pl-3" />
        <Button variant="outline-light" className="custom-button-1">
          <i class="fas fa-search"></i>
        </Button>
      </Form>
    </Navbar>
  );
};

export default Header;
