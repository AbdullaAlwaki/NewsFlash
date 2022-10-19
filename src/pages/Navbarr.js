import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Entertainment from "./Entertainment";
import Sport from "./Sport";
import Science from "./Science";
import Tech from "./Tech";
import Health from "./Health";
import Business from "./Business";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarr() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">News Flash</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Entertainment">Entertainment</Nav.Link>
              <Nav.Link href="/Sport">Sport</Nav.Link>
              <Nav.Link href="/Science">Science</Nav.Link>
              <Nav.Link href="/Tech">Tech</Nav.Link>
              <Nav.Link href="/Health">Health</Nav.Link>
              <Nav.Link href="/Business">Business</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Sport" element={<Sport />} />
          <Route path="/Science" element={<Science />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Business" element={<Business />} />
        </Routes>
      
    </>
  );
}

export default Navbarr;
