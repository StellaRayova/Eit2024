import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Generalstaffing.css";
import GS from "./Gsimages/gsmainpicf.jpg";

import gs1 from './Gsimages/1.png';
import gs2 from './Gsimages/2.png';
import gs3 from './Gsimages/3.png';
import sec1 from './Gsimages/4.png';
import sec2 from './Gsimages/5.png';
import sec3 from './Gsimages/6.png';
import sec4 from './Gsimages/7.png';
import sec5 from './Gsimages/8.png';
import sec6 from './Gsimages/9.png';
import Footer from "./FooterF";

const Generalstaffingf = () => {
  return (
    <div>
    <div className="image-container">
    <div className="position-relative">
    <img src={GS} className="img-fluid imgprel5" alt="General-staffing" />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start p-3 text-light ">
        </div>
        <span className="headimg-el5">General Staffing</span>
    </div>
    <Link to='/contactus'>
    <div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btnpr-el5">Get in touch</button>
                        </div>
    </Link>

                        
</div>

<div className="col-12 mb-3 d-flex">
            <div className=" p-3 flex-fill">
              <div className="card-body text-center">
                <p className="card-text txt-el5">
                At Enormous Corporate Solutions, our general staffing services are designed to provide businesses with the talent they need to thrive. 
                We offer comprehensive and customized staffing solutions to meet the diverse needs of our clients. 
                Whether you require temporary, permanent, or contract-to-hire positions, 
                our team is dedicated to delivering exceptional talent that drives your business success. 
                Our streamlined processes ensure a seamless experience from sourcing to onboarding, and throughout the entire employee lifecycle.
                </p>
              </div>
            </div>
          </div>
          <div>
          <div>
          <h3 className="card-title mb-4 head-el5" style={{color:'black'}}>Our Staffing Solutions Offerings Include</h3>
          <div className=" dispel5">
          <img src={sec1} className="img-fluid imgel5 mb-5 shadow-lg " alt="General-staffing" />
          <img src={sec2} className="img-fluid imgel5 mb-5 shadow-lg" alt="General-staffing" />
          <img src={sec3} className="img-fluid imgel5 mb-5 shadow-lg" alt="General-staffing" />
          <img src={sec4} className="img-fluid imgel5 mb-5 shadow-lg" alt="General-staffing" />
          <img src={sec5} className="img-fluid imgel5 mb-5 shadow-lg" alt="General-staffing" />
          <img src={sec6} className="img-fluid imgel5 mb-5 shadow-lg" alt="General-staffing" />
          </div>
          </div>

           <div >
           <h3 className="card-title mb-4 head-el5" style={{color:'black'}}>Our Technology Edge</h3>
           <div className="disp1el5">
          <img src={gs1} className="img-fluid  mb-3 img1el5 shadow-lg" alt="General-staffing" />
          <img src={gs2} className="img-fluid  mb-3 img1el5  shadow-lg" alt="General-staffing" />
    
          <img src={gs3} className="img-fluid  mb-3  img1el5  shadow-lg" alt="General-staffing" />
 
          </div>
          </div>
          </div>

         

         
         
          

      <div className="container mt-4">
        <div className="row g-4">

        <div className="col-12 col-md-6 col-lg-6 d-flex ">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill bc-el5">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 head-el5">Sourcing & Recruitment</h3>
                <p className="card-text tel5">
                Our team connects clients with top-tier talent through a streamlined and efficient process.
                 We provide customized placement solutions tailored to meet the unique needs of each client. 
                 With a focus on your success, we utilize our extensive network and cutting-edge sourcing techniques 
                 to identify the perfect candidates for your organization.
                </p>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-6 col-lg-6 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill bc-el5">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 head-el5">Rebadging</h3>
                <p className="card-text tel5">
                We offer rebadging services that facilitate a smooth transition for employees,
                 ensuring continuity and stability within your workforce. 
                 By effectively integrating existing employees into new roles or organizational structures, 
                 we help maintain valuable institutional knowledge and promote a cohesive and productive work environment.

                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill bc-el5">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 head-el5">Onboarding</h3>
                <p className="card-text tel5">
                Our onboarding process is designed to create a seamless experience for new hires, clients, 
                and front-line managers. We prioritize swift documentation, prompt offer issuance, 
                and thorough onboarding to ensure that new employees are well-prepared and motivated from their first day, 
                boosting their engagement and productivity.

                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill bc-el5">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 head-el5">Employee Life-Cycle Management</h3>
                <p className="card-text tel5">
                Enormous Corporate Solutions is dedicated to delivering a comprehensive experience for associates, clients, 
                and front-line managers throughout the entire employee lifecycle. From performance management to career development, 
                we foster a culture of care, value, and inclusivity, supporting the growth and success of your workforce at every stage.
                </p>
              </div>
            </div>
          </div>


          

          

         

         

         
        </div>
      </div>
      <div className="col-12 mb-3 d-flex">
            <div className=" p-3 flex-fill">
              <div className="card-body text-center">

                <p className="card-text txt-el5">
                At Enormous Corporate Solutions, we are more than just a staffing provider; 
                we are your strategic partner in building a robust and capable workforce. 
                Our comprehensive staffing services are designed to meet your unique needs, 
                ensuring you have the right people in place to drive your business forward.

                </p>
              </div>
            </div>
          </div>

          <div className="col-12 mb-3 d-flex">
            <div className=" p-3 flex-fill">
              <div className="card-body text-center">
                <h4 className="card-title mb-4 head-el5" style={{color:'black'}}>Contact Us Now!</h4>
                <p className="card-text txt-el5">
                Ready to enhance your workforce with our general staffing solutions? 
                <Link to='/contactus' className="decel5"> Contact us</Link> today to discuss how Enormous Corporate Solutions 
                can support your business goals and enhance your operational efficiency. 
                Let's build a stronger future together.
                </p>
              </div>
            </div>
          </div>
          <Footer />
    </div>
  );
};

export default Generalstaffingf;