import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import media from './BVimages/Media.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const MediaEntertainment = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={media} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Media & Entertainment </h1>
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>
                The media and entertainment industry thrives on both creative and technical talent to bring projects to life. Enormous Corporate Solutions provides specialized staffing solutions, supporting diverse roles within this vibrant sector. Our expertise ensures the right talent for every project, driving innovation and success. Partner with us to meet your staffing needs and fuel your industry's growth.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Media & Entertainment Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Creative and Technical Expertise:</strong>We connect you with professionals skilled in production, content creation, marketing, and more.</li>
                        <li className='ullikk_el7'><strong>Project Support:</strong>Our staffing solutions support various stages of media and entertainment projects, from development to execution.</li>
                        <li className='ullikk_el7'><strong>Industry Knowledge:</strong>Our candidates have a deep understanding of media trends and entertainment industry dynamics.</li>
                        <li className='ullikk_el7'><strong>Custom Solutions:</strong>Tailored staffing solutions to fit the specific needs of your projects, whether short-term or long-term.</li>                        
                        <li className='ullikk_el7'><strong>Ongoing Support:</strong>We provide support to ensure that new hires integrate well into your creative teams and contribute effectively.</li> 
                    </ul>
                </div>
                <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>
                We are dedicated to delivering talented professionals to media and entertainment companies, enhancing creativity and project execution. Our staffing solutions ensure the right fit for every role, driving innovation and success. Trust Enormous Corporate Solutions to elevate your projects with the expertise you need. Partner with us to bring your vision to life.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Looking for staffing solutions in media and entertainment?
                {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
                today to find the right professionals for your projects.</p>
            </div>
            <Footer />
        </div>
    );
}

export default MediaEntertainment;
