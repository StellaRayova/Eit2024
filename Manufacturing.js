import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import manImage from './BVimages/Manfac.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Manufacturing = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={manImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'center' }}>
                        <h1 className='text-left txt_head_el7'>Manufacturing</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-center' style={{ textAlign: 'center' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>In the manufacturing sector, a skilled workforce is essential for driving productivity and maintaining operational efficiency. At Enormous Corporate Solutions, we offer staffing solutions that support various manufacturing processes, from production to quality control, ensuring that your operations run smoothly and effectively.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Manufacturing Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Skilled Workforce:</strong> We provide staffing for a range of manufacturing roles including production, quality control, and maintenance.</li>
                        <li className='ullikk_el7'><strong>Productivity Enhancement: </strong>Our candidates are trained to improve efficiency and productivity on the shop floor.</li>
                        <li className='ullikk_el7'><strong>Safety and Compliance:</strong>We prioritize safety and compliance with industry regulations, ensuring a secure work environment.</li>
                        <li className='ullikk_el7'><strong>Flexible Staffing Solutions: </strong>Whether you need temporary staff for peak periods or permanent hires, we tailor our solutions to fit your needs.</li>
                        
                        <li className='ullikk_el7'><strong>Quality Assurance:</strong>We ensure that all placements contribute to maintaining high standards of product quality.</li> 
                    </ul>
                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are committed to enhancing the manufacturing sector with skilled professionals who drive productivity and ensure high standards of operational excellence. Our staffing solutions are aimed at improving efficiency and supporting industry growth.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Need reliable manufacturing staffing solutions?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
                today to discuss how we can help you find the right talent for your operations.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Manufacturing;
