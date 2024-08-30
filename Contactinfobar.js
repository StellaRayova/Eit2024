import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactinfobar.css';

const Contactinfobar = () => {
  return (
    <div className='contactinfobar contactinfobar-fixed'>
      <Container>
        <Row className="py-2 d-flex align-items-center">
          <Col xs={12} md={4} className="text-center text-md-left  mb-md-0">
            <FaEnvelope className="mr-2 infel2" />
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHwfPjVDxpslGRGvpxXHdhKkNWNsQQtxXMWJmtlzfrrPDGcwQVMdvhLJBvwMHqCCscWPwZB" className='bldel2'>info@enormousit.com</a>
          </Col>
          <Col xs={12} md={4} className="text-center  mb-md-0">
            <FaPhoneAlt className="infel2" />
            <a href="tel:+914048553545" className='bldel2'>+91-40-4855 3545</a>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right">

            {/* <a href="https://www.linkedin.com/company/login" className="bld1el2 infel2 gapel2"><FaLinkedin /></a> */}
            <a href="https://www.instagram.com/accounts/login/?hl=en" className='bld1el2 infel2 gapel2'><FaInstagram /></a>

            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A19257494&keywords=enormous%20it&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c0c367e9-0307-4dce-8e43-313ea84b8295&sid=NvT&spellCorrectionEnabled=false'" className="bld1el2 infel2 gapel2"><FaLinkedin /></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contactinfobar;