import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Button,
  Form,
} from "react-bootstrap";
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
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/"> Home </Nav.Link>
                  <Nav.Link as={Link} to="/about"> About us </Nav.Link>
                  <Nav.Link as={Link} to="/contacts"> Contacts </Nav.Link>
                  <Nav.Link as={Link} to="/blog"> Blog </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-sm-2"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          
        </>
      </Router>
    );
  }
}
