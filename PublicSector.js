import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import publicImage from './BVimages/public.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const PublicSector = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={publicImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Public Sector</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>
                The public sector demands specialized staffing solutions to address its unique needs and ensure effective public service delivery. Enormous Corporate Solutions offers tailored staffing services designed to meet these specific requirements. Our expertise helps government agencies and public organizations operate efficiently. Trust us to provide the skilled professionals needed to enhance public service. Partner with us for impactful solutions that drive success.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Public Sector Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Specialized Expertise:</strong>We provide staff for administrative, project management, policy analysis, and other roles essential to public service.</li>
                        <li className='ullikk_el7'><strong>Operational Efficiency:</strong>Our candidates contribute to effective public service delivery and improved operational efficiency.</li>
                        <li className='ullikk_el7'><strong>Regulatory Compliance: </strong>We ensure all placements comply with public sector regulations and standards, supporting transparency and accountability.</li>
                        <li className='ullikk_el7'><strong>Dedicated Support:</strong>We offer ongoing support to ensure that candidates are well-integrated and contribute to public sector goals.</li>                        
                    </ul>
                </div>
                <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>
                
We are dedicated to providing staffing solutions that elevate public sector operations and ensure effective service delivery. Our specialized services help government agencies and public organizations run smoothly. Trust Enormous Corporate Solutions to supply the skilled professionals needed to achieve your goals. Partner with us to enhance public service and operational efficiency.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Looking for public sector staffing solutions?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
                today to discuss how we can support your organization with the right tale</p>
            </div>
            <Footer />
        </div>
    );
}

export default PublicSector;
