import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import HealthcareImage from './BVimages/Insurance.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Insurance =() => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={HealthcareImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Insurance</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>Effective logistics and supply chain management rely on a skilled workforce. Enormous Corporate Solutions offers staffing solutions that address the diverse needs of the logistics industry, from warehousing to transportation, ensuring optimal efficiency and accuracy.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Insurance Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Experienced Professionals:</strong> We provide staffing for roles in underwriting, claims management, customer service, and more.</li>
                        <li className='ullikk_el7'><strong>Regulatory Knowledge: </strong>Our candidates are well-versed in insurance regulations and compliance requirements.</li>
                        <li className='ullikk_el7'><strong>Operational Efficiency:</strong>We ensure that staffing solutions enhance the efficiency of insurance operations and improve service delivery.</li>
                        <li className='ullikk_el7'><strong>Custom Fit:</strong>Tailored solutions to meet your specific staffing needs, whether for temporary coverage or permanent roles.</li>
                        
                        <li className='ullikk_el7'><strong>Support and Integration: </strong>We offer continuous support to ensure that new hires fit seamlessly into your organization and contribute effectively.</li> 
                    </ul>        
            </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are dedicated to supporting logistics companies with professionals who enhance operational efficiency and supply chain management. Our staffing solutions are designed to meet your specific logistical needs and drive performance improvements.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Need staffing solutions for the insurance industry? {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "} today to find the right experts for your needs.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Insurance;
