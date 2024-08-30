import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BussV.css';
// import HealthcareImage from './BVimages/Healthcare.jpeg';
import FoodPack from './BVimages/foodpackf.jpeg';
import Footer from "../FooterF";
import { Link } from "react-router-dom";

const FoodPackaging = () => {
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={FoodPack} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el7'>Food and Packaging </h1>
                        {/* <p className='text-left text_slogan_el7'>Pioneering Tomorrow's Solutions Today</p> */}
                        <Link to='/contactus' style={{textDecoration:'none'}}><div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el7">Get in touch</button>
                        </div></Link> 
                    </div>
                </div>
            </div>
            <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>
                
In the food and packaging industry, upholding exceptional standards of quality, hygiene, and safety is essential. Enormous Corporate Solutions provides specialized staffing solutions to support food service operations and packaging processes. Our expertise ensures compliance and efficiency at every stage. Trust us to deliver the skilled professionals you need to maintain excellence. Partner with us for seamless operations and industry-leading results.
</p>
            </div>
            <div className="why-choose_el7 ymlr-el7">
                <h2 className='h2b_el7 hbt_el7'>Why Choose Us for Food and Packaging Staffing?</h2>
                <div>
                    <ul>
                        <li className='ullikk_el7'><strong>Industry Compliance:</strong> Our staff is trained in best practices for both food handling and packaging, ensuring strict adherence to food safety and quality regulations.</li>
                        <li className='ullikk_el7'><strong>Quality Assurance:</strong>We provide staffing solutions that enhance quality control in food services and packaging, guaranteeing that products meet top industry standards.</li>
                        <li className='ullikk_el7'><strong>Operational Efficiency:</strong>Our candidates help streamline food production, packaging operations, and distribution processes, improving overall efficiency.</li>
                        <li className='ullikk_el7'><strong>Skilled Professionals: </strong>We supply dedicated professionals who excel in managing food service operations and handling packaging equipment with precision.</li>                        
                        <li className='ullikk_el7'><strong>Custom Staffing Solutions:</strong>Whether you need staff for temporary projects or long-term positions, we offer tailored solutions to meet your specific requirements in food services and packaging.</li> 
                    </ul>
                </div>
                <h2 className='h2b_el7 hbt_el7'>Commitment</h2>
                <p className='intro_el7'>
                We are committed to upholding the highest industry standards in food services and packaging. Our goal is to ensure that your operations are both hygienic and efficient, providing top-quality services and products to your clients.
                </p>
                <h2 className='h2b_el7 hbt_el7'>Contact Us Now!</h2>
                <p className='intro_el7'>Looking for expert staffing solutions in food services and packaging?
                 {" "}<Link to='/contactus' className="txdec_el7">Contact us</Link> {" "}
                 today to discuss your needs and discover how we can provide the right talent for your operations.</p>
            </div>
            <Footer />
        </div>
    );
}

export default FoodPackaging;
