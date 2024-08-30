import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import HealthcareImage from './BVimages/Retail.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Retail = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={HealthcareImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Retail</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>In the competitive retail sector, a dynamic and skilled team is crucial for success. Enormous Corporate Solutions provides staffing solutions designed to enhance retail operations, improve customer experiences, and drive sales growth.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Retail Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Talented Individuals:</strong> We connect retailers with professionals skilled in sales, customer service, store management, and more.</li>
                        <li className='ullikk_el7'><strong>Customer Experience Enhancement:</strong> Our candidates are trained to improve customer interactions and drive sales growth.</li>
                        <li className='ullikk_el7'><strong>Operational Efficiency:</strong>We provide staffing solutions that support smooth store operations and effective inventory management.</li>
                        <li className='ullikk_el7'><strong>Flexible Solutions:</strong>Expert Talent Acquisition: hether you need staff for seasonal peaks or long-term roles, our solutions are designed to fit your requirements.</li>
                        
                        <li className='ullikk_el7'><strong>Market Insight: </strong> Our candidates bring valuable insights into market trends and customer preferences.</li> 
                    </ul>
                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are committed to helping retailers build a talented team that enhances customer satisfaction and drives sales. Our staffing solutions are focused on supporting your retail operations and achieving business success.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Looking for staffing solutions in retail?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
                today to discuss how we can support your store with the right talent.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Retail;
