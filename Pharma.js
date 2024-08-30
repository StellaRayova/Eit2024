import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import pharmaImage from './BVimages/Pharma.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Pharma = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={pharmaImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Pharmaceuticals</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>The pharmaceutical industry demands precision, expertise, and a deep understanding of complex regulatory environments. At Enormous Corporate Solutions, we offer specialized staffing solutions to address the unique needs of pharmaceutical companies, from research and development through to market launch. Our expertise ensures that you have the right talent to drive innovation and maintain compliance with industry regulations.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Pharma Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Specialized Talent: </strong>We connect pharmaceutical companies with professionals skilled in research and development, clinical trials, quality assurance, and regulatory compliance.</li>
                        <li className='ullikk_el7'><strong>Industry Knowledge:</strong>Our team understands the complexities of the pharma sector, ensuring that candidates are well-prepared to tackle industry-specific challenges.</li>
                        <li className='ullikk_el7'><strong>Regulatory Compliance:</strong>We ensure that all candidates are compliant with industry regulations, maintaining the integrity of pharmaceutical operations.</li>
                        <li className='ullikk_el7'><strong>Rapid Deployment:</strong>Quick turnaround times for staffing needs to support ongoing projects and operational demands.</li>
                        <li className='ullikk_el7'><strong>Dedicated Support: </strong> Ongoing support to ensure that candidates fit seamlessly into your organizational culture and project requirements.</li> 
                    </ul>
                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are committed to supporting pharmaceutical companies with expert talent that fosters innovation and adheres to strict regulatory standards. Our staffing solutions are designed to drive success and ensure your operations are aligned with industry best practices.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Need specialized staffing for the pharmaceutical industry? {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "} today to discuss your requirements and find the right experts for your needs.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Pharma;
