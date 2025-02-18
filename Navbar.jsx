import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const Menubar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand className='text-warning fs-3' href="/Home">
                            <img
                              alt=""
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3Gb1e_CM4ITxDthvY4uUm6oMnpnZ-rAThSXNa803biJ13gjj34cDgpQinQ3jfaNWSzw&usqp=CAU"
                              width="50"
                              height="50"
                              className="d-inline-block"
                              
                            />
                            STAR EVENT MANAGEMENT
                          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto fs-5 ">
          <Nav.Link className='text-lg nav-link' href="/">Home</Nav.Link>
//             <Nav.Link className='text-lg nav-link' href="/about.jsx">About Us</Nav.Link>
//             <Nav.Link className='text-lg nav-link' href="/services.jsx">Services</Nav.Link>
//             <Nav.Link className='text-lg nav-link' href="/gallery.jsx">Gallery</Nav.Link>
//             <Nav.Link className='text-lg nav-link' href="/venues.jsx">Venues</Nav.Link>
//             <Nav.Link className='text-lg nav-link' href="/contact.jsx">Contact</Nav.Link>
           
          </Nav>
          <Navbar.Brand className='text-lg'href="/Login">
            <Button variant='danger'>Booking</Button>

          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;