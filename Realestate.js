import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import HealthcareImage from './BVimages/Realestate.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Realestate = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={HealthcareImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Real Estate</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>The real estate sector thrives on having a capable team to drive property sales and management. Enormous Corporate Solutions offers staffing solutions designed to support various functions within the real estate industry, ensuring operational excellence and market success.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Real Estate Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Expert Talent:</strong> We provide staffing for roles in property management, sales, leasing, and more.</li>
                        <li className='ullikk_el7'><strong>Market Insight:</strong>Our candidates bring valuable insights into real estate market trends and customer preferences.</li>
                        <li className='ullikk_el7'><strong>Operational Excellence:</strong>Our staffing solutions enhance operational efficiency and customer service in real estate.</li>
                        <li className='ullikk_el7'><strong>Tailored Solutions:</strong>Custom staffing solutions to meet your specific needs, whether for temporary projects or long-term positions.</li>
                        
                        <li className='ullikk_el7'><strong>Support and Integration: </strong> e ensure that new hires fit seamlessly into your team and contribute effectively to your success.</li> 
                    </ul>
                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are committed to helping real estate companies build a skilled team that enhances property management and drives sales. Our staffing solutions are aimed at improving your operational efficiency and market performance.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Need staffing solutions for real estate?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}today to discuss how we can support your organization with the right talent.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Realestate;
