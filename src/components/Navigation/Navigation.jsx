// import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    // <nav className="navigation">
    <Navbar bg="dark" variant="dark" className="navigation">
      <Container>
        <NavLink to="/" className="navigation__link">
          <Navbar.Brand>Filmoteka</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              exact
              to="/"
              className="navigation__link"
              activeClassName="navigation__active-link"
            >
              Home
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink
              to="/movies"
              className="navigation__link"
              activeClassName="navigation__active-link"
            >
              Movies
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // </nav>
  );
};
