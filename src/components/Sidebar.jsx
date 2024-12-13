import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/image/logo.png";

const Sidebar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="left"
      className="flex-column full-height-sidebar"
      style={{
        height: "100vh",
        margin: 0,
        padding: 0,
        width: "100%"
      }}
    >
      <Container className="d-flex flex-column h-100 py-3">
        <Navbar.Brand href="#" className="mb-4 d-flex justify-content-center">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex flex-column align-items-start flex-grow-1 mb-3"
        >
          <Nav className="w-100">
            <Nav.Link href="#" className="d-flex align-items-center mb-3">
              <i className="bi bi-house-door-fill me-2"></i> Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center mb-3">
              <i className="bi bi-book-fill me-2"></i> Your Library
            </Nav.Link>
          </Nav>

          <Form className="d-flex flex-column align-items-center w-100 mt-3 mb-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 mb-3 w-100 d-flex"
              aria-label="Search"
            />
            <Button variant="outline-success" className="d-flex">
              Go
            </Button>
          </Form>
        </Navbar.Collapse>

        <div className="d-flex flex-column align-items-center mt-auto">
          <Button variant="outline-light" className="mb-3 w-100">
            Sign Up
          </Button>
          <Button variant="outline-light" className="mb-3 w-100">
            Login
          </Button>

          <div className="d-flex text-center">
            <a href="#" className="d-block mb-1 me-2">
              Cookie Policy
            </a>
            <a href="#" className="d-block">
              Privacy
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
