import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav({ setCurrentPage }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Alex</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="#"
            onClick={() => {
              setCurrentPage({
                name: "about me",
              });
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => {
              setCurrentPage({
                name: "portfolio",
              });
            }}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => {
              setCurrentPage({
                name: "contact",
              });
            }}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => {
              setCurrentPage({
                name: "resume",
              });
            }}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // <nav>
    //   <button
    // onClick={() => {
    //   setCurrentPage({
    //     name: "about me",
    //   });
    // }}
    //   >
    //     About
    //   </button>

    //   <button
    //     onClick={() => {
    //       setCurrentPage({
    //         name: "portfolio",
    //       });
    //     }}
    //   >
    //     Portfolio
    //   </button>

    //   <button
    //     onClick={() => {
    //       setCurrentPage({
    //         name: "contact",
    //       });
    //     }}
    //   >
    //     Contact
    //   </button>

    //   <button
    //     onClick={() => {
    //       setCurrentPage({
    //         name: "resume",
    //       });
    //     }}
    //   >
    //     Resume
    //   </button>
    // </nav>
  );
}

export default MyNav;
