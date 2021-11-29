// import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navigation">
      <Container>
        Filmoteka
        <Navbar.Brand className="navigation__logo">Filmoteka</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__active-link"
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__active-link"
          >
            Movies
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
