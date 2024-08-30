
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; 


import healthcare from'./healrhcare.png';
import finance from './finance.png';
import foodandpackaging from './foodandpackaging.png';
import manufacturing from './manufacturing.png';
import media from './media.png';
import retail from './retail.png';
import pharma from './pharma.png';
import nbfc from './nbfc.png';
import insurance from './insurance.png';
import logistics from './logistics.png';
import telecom from './telecom.png';
import realestate from './realestate.png';
import bio from './bio.png';
import sector from './sector.png'
import logo from './images/LOGO1.jpeg'

const Navbar1 = () => {
  const handleSelect = () => {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggle && navbarCollapse.classList.contains('show')) {
      navbarToggle.click();
    }
  };

  return (

      <header>
        <Navbar id="navbar" expand="lg">
        <Container className='con'>

          {/* <Navbar.Brand className="text-dark" as={Link} to="/"><b>ENORMOUS</b></Navbar.Brand> */}

          <Navbar.Brand className="logo_el1" as={Link} to="/">
            <img src={logo} alt="Logo" width={'110px'}/>
          </Navbar.Brand>
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" onClick={handleSelect}>Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutus" onClick={handleSelect}>About Us</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/general-staffing" onClick={handleSelect}>General Staffing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/payroll-services" onClick={handleSelect}>Payroll</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Business Verticals" id="mega-menu">
                <Container >
                  <Col className='d-flex_el1'>
                    <Row>
                      <NavDropdown.Item as={Link} to="/healthcare" onClick={handleSelect}>
                      <img src={healthcare} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Health care</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/finance" onClick={handleSelect}>
                      <img src={finance} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Finance</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/manufacturing" onClick={handleSelect}>
                      <img src={manufacturing} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Manufacturing</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/pharmaceutical" onClick={handleSelect}>
                      <img src={pharma} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Pharmaceutical</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/food-and-packaging" onClick={handleSelect}>
                      <img src={foodandpackaging} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Food & Packaging</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/retail" onClick={handleSelect}>
                      <img src={retail} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Retail</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/nbfc" onClick={handleSelect}>
                      <img src={nbfc} alt="icon" style={{ width: '16px', marginRight: '8px' }} />NBFC</NavDropdown.Item>
                    </Row>

                    <Col className='row'>
                      <NavDropdown.Item as={Link} to="/insurance" onClick={handleSelect}>
                      <img src={insurance} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Insurance</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/logistics" onClick={handleSelect}>
                      <img src={logistics} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Logistics</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/telecommunication" onClick={handleSelect}>
                      <img src={telecom} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Telecom</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/media" onClick={handleSelect}>
                      <img src={media} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Media</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/real-estate" onClick={handleSelect}>
                      <img src={realestate} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Real Estate</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/bio-technology" onClick={handleSelect}>
                      <img src={bio} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Bio Technology</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/public-sector" onClick={handleSelect}>
                      <img src={sector} alt="icon" style={{ width: '16px', marginRight: '8px' }} />Public Sector</NavDropdown.Item>
                    </Col>
                  </Col>
                </Container>
              </NavDropdown>
              <Nav.Link as={Link} to="/career" onClick={handleSelect}>Careers</Nav.Link>
              <Nav.Link as={Link} to="/contactus" onClick={handleSelect}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>

  );
};

export default Navbar1;

