import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import PropTypes from "prop-types";

import "../CSS/Header.css";

import { LinkContainer } from "react-router-bootstrap";
// import NavDropdown from "react-bootstrap/";

export default function Header(props) {
  return (
    <Navbar className="nav-style" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="nav-heading">{props.title}</Navbar.Brand>
        </LinkContainer>
        <Nav className="nav-text me-auto">
          <LinkContainer to="/explore">
            <Nav.Link to="/explore">Explore</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav className="nav-text d-flex">
            <LinkContainer to = "/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to = "/signup">
                <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

Header.prototype = {
  title: PropTypes.string,
};
