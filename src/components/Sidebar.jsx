import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/image/logo.png";

const Sidebar = () => {
  return (
    <Navbar
      bg="black"
      expand="lg"
      fixed="left"
      className="sidebar flex-column"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",

        zIndex: 1000,
        backgroundColor: "#343a40",
        padding: 0
      }}
    >
      <Container className="d-flex flex-column h-100 py-3">
        <Navbar.Brand
          href="#"
          className="mb-4 d-flex justify-content-center me-auto"
        >
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex flex-column align-items-start flex-grow-1 mb-3"
        >
          <Nav className="flex-column me-auto">
            <Nav.Link
              href="#"
              className="d-flex align-items-center mb-3 fs-4"
              style={{
                color: "#fff"
              }}
            >
              <i className="bi bi-house-door-fill me-2 "></i> Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className="d-flex align-items-center mb-3 fs-4"
              style={{
                color: "#fff"
              }}
            >
              <i className="bi bi-book-fill me-2"></i> Your Library
            </Nav.Link>
          </Nav>

          <InputGroup>
            <Form.Control type="text" placeholder="search" />
            <Button className="bg-dark text-white border-white">Go</Button>
          </InputGroup>
        </Navbar.Collapse>

        <div
          className="d-flex flex-column align-items-center mt-auto"
          style={{
            marginTop: "auto"
          }}
        >
          <Button
            variant="outline-light"
            className="mb-3 w-100 rounded-pill"
            style={{
              borderRadius: "50px",
              width: "100%"
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="outline-light"
            className="mb-3 w-100 rounded-pill"
            style={{
              borderRadius: "50px",
              width: "100%"
            }}
          >
            Login
          </Button>

          <div className="d-flex text-center text-white">
            <p href="#" className="d-block mb-1 me-2" style={{ color: "#fff" }}>
              Cookie Policy
            </p>
            <span className="mx-2">|</span>
            <p href="#" className="d-block" style={{ color: "#fff" }}>
              Privacy
            </p>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
