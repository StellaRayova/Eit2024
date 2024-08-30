import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import HealthcareImage from './BVimages/Logistics.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Logistics= () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={HealthcareImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Logistics</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>Effective logistics and supply chain management depend on a skilled workforce. Enormous Corporate Solutions offers staffing solutions to meet the diverse needs of the logistics industry.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Logistics Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Optimized Operations:</strong>We provide staff for roles in supply chain management, warehousing, transportation, and more.</li>
                        <li className='ullikk_el7'><strong>Efficiency and Accuracy:</strong> Our staffing solutions are designed to enhance operational efficiency and accuracy in logistics processes.</li>
                        <li className='ullikk_el7'><strong>Industry Expertise:</strong>Our candidates have experience in managing logistics challenges and optimizing supply chain performance.</li>
                        <li className='ullikk_el7'><strong>Custom Solutions:</strong>Tailored staffing to meet your specific logistics needs, whether for temporary projects or permanent roles.</li>
                        
                        <li className='ullikk_el7'><strong>Continuous Improvement: </strong> We support ongoing improvements in your logistics operations through skilled and effective staffing solutions.</li> 
                    </ul>

                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are dedicated to supporting logistics companies with professionals who enhance operational efficiency and supply chain management.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Need staffing solutions for logistics?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
            today to discuss how we can support your operational needs.</p>
            </div>
<Footer />
        </div>
    );
}

export default Logistics;
