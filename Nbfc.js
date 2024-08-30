import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import NBFCImage from './BVimages/nbfcf.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const NBFC = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={NBFCImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'> Non-Banking Financial Company - NBFC</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>Non-Banking Financial Companies (NBFCs) face unique challenges that require specialized staffing solutions. Enormous Corporate Solutions provides expert staffing tailored to address the specific needs of NBFCs, supporting their growth and navigating regulatory complexities with ease.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for NBFC Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Specialized Talent:</strong>We offer staffing solutions for roles in risk management, compliance, financial operations, and more specific to NBFCs.</li>
                        <li className='ullikk_el7'><strong>Regulatory Expertise:  </strong>Our candidates are knowledgeable about the regulatory frameworks and operational challenges unique to NBFCs.</li>
                        <li className='ullikk_el7'><strong>Efficiency and Accuracy:</strong>We ensure that our staffing solutions enhance operational efficiency and accuracy in financial transactions.</li>
                        <li className='ullikk_el7'><strong>Custom Solutions: </strong>Tailored staffing solutions to meet the specific needs of your NBFC, whether for project-based roles or long-term positions.</li>
                        
                        <li className='ullikk_el7'><strong>Continuous Support: </strong>Ongoing support to ensure that placements integrate well with your organizational culture and operational needs.</li> 
                    </ul>
                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are committed to providing NBFCs with specialized professionals who can handle regulatory challenges and optimize financial operations. Our staffing solutions are designed to enhance efficiency and support the effective management of your organization.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Looking for staffing solutions tailored for NBFCs?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "} today to find the right professionals for your organization.</p>
            </div>
            <Footer />
        </div>
    );
}

export default NBFC;
