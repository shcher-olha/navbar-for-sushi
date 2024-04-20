import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";

import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar
            className="fixed-top"
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
          >
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />{" "}
                React site
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/">
                    {" "}
                    Home{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/menu">
                    {" "}
                    Menu{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    {" "}
                    About{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacts">
                    {" "}
                    Contacts{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    {" "}
                    Blog{" "}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/blog" element={<Blog />} />
            </Route>
          </Routes>
        </>
      </Router>
    );
  }
}
