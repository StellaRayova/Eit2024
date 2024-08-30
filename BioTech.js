import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
import techImage from './BVimages/bio-technology.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const BioTechnology = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={techImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Bio Technology</h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link>
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>
                The biotechnology sector relies on highly specialized staffing to drive research, development, and innovation. Enormous Corporate Solutions offers tailored staffing solutions to support biotech companies in achieving their goals.</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Bio Tech Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Research and Development:</strong>We provide skilled professionals for roles in research, development, and quality assurance, crucial to biotech advancements.</li>
                        <li className='ullikk_el7'><strong>Innovation Support::</strong>Our staffing solutions support groundbreaking research and technological innovations in biotechnology.</li>
                        <li className='ullikk_el7'><strong>Compliance and Safety:</strong>We ensure that all placements adhere to industry regulations and safety standards, maintaining research integrity.</li>
                        <li className='ullikk_el7'><strong>Specialized Talent:</strong>Our candidates bring expertise in biotechnology processes, enhancing research capabilities and project success.</li>                        
                        <li className='ullikk_el7'><strong>Custom Solutions:</strong>Tailored staffing solutions to meet the specific needs of your biotech projects, whether temporary or permanent.</li> 
                    </ul>
                </div>
                <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>
                We are dedicated to supporting the biotechnology sector with talent that fuels innovation and ensures strict adherence to industry standards. Our specialized staffing solutions provide the skilled professionals needed to advance research and development. Trust Enormous Corporate Solutions to help your biotech operations thrive. Partner with us to drive progress and maintain excellence in the industry.</p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Need biotech staffing solutions?
                 {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
                today to find the right professionals to support your research and development efforts.</p>
            </div>
            <Footer />
        </div>
    );
}

export default BioTechnology;
