import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import HealthcareImage from './BVimages/Telecom.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Telecom= () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={HealthcareImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Telecommunications</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                       <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>The telecommunication industry demands skilled professionals to manage technical and operational functions efficiently. Enormous Corporate Solutions offers specialized staffing solutions to support various aspects of the telecommunication sector, ensuring technical excellence and operational efficiency.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Telecommunication Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Technical Expertise:</strong> We connect you with qualified professionals for roles in network management, technical support, and project management.</li>
                        <li className='ullikk_el7'><strong>Operational Efficiency:</strong> Our staffing solutions support the smooth functioning of telecommunication operations.</li>
                        <li className='ullikk_el7'><strong>Industry Knowledge:</strong>Industry Knowledge: Our candidates understand the complexities of the telecommunication sector and contribute to effective operations.</li>
                        <li className='ullikk_el7'><strong>Custom Fit:</strong>Expert Talent Acquisition: Tailored staffing solutions to meet your specific technical and operational needs.</li>
                        
                        <li className='ullikk_el7'><strong>Ongoing Support:</strong> We provide support to ensure that new hires integrate well into your team and contribute effectively.</li> 
                    </ul>
                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are committed to providing telecommunication companies with top-tier talent who support both technical and operational excellence. Our staffing solutions are tailored to meet your specific needs and contribute to your industry success.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Looking for telecommunication staffing solutions? {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "} today to find the right experts for your needs.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Telecom;
