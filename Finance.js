import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import FinanceImage from './BVimages/Financef.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const Finance = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={FinanceImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Finance</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>The finance sector requires professionals who can navigate complex financial operations and regulatory landscapes with precision. Enormous Corporate Solutions provides tailored staffing solutions to meet the dynamic needs of the finance industry, ensuring you have the expertise required to manage financial risks and enhance operational efficiency.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Finance Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Qualified Experts:</strong>We provide staffing solutions for roles in accounting, financial analysis, investment management, and more.</li>
                        <li className='ullikk_el7'><strong>Risk Management:</strong>Our candidates are adept at managing financial risks and ensuring compliance with regulatory requirements.</li>
                        <li className='ullikk_el7'><strong>Operational Efficiency:</strong>We ensure that your financial operations run smoothly with skilled professionals who enhance efficiency and accuracy.</li>
                        <li className='ullikk_el7'><strong>Tailored Solutions:</strong> Custom staffing solutions to meet the specific needs of your financial operations, whether for temporary projects or permanent roles.</li>
                        
                        <li className='ullikk_el7'><strong>Strategic Placement:</strong>We place candidates who align with your organizational goals and contribute to strategic financial planning.</li> 
                    </ul>
                </div>
                              <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>We are dedicated to providing healthcare facilities with highly qualified professionals who enhance patient care and uphold the highest standards of medical practice. Our focus is on delivering staffing solutions that support the ongoing success and excellence of your healthcare services.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Looking for expert finance staffing solutions?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
                today to find the perfect candidates for your financial needs.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Finance ;
