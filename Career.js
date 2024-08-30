import React, { useState } from "react";
import './Career.css';
import './BussVerticals/BussV.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import manImage from './images/career.jpeg';
import Footer from "./FooterF";
import naukriLogo from './images/naukri.png';
import linkedinLogo from './images/link.png';
import founditLogo from './images/foundit.png';


const Career = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleExploreClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };
    return (
        <div>
            <div className="div1card_el7">
                <div className="image-container img_el7">
                    <img src={manImage} className="img-fluid" alt="Technology" />
                    <div className="overlay_el7"></div>
                    <div className="txt_el7" style={{ textAlign: 'center' }}>
                        <h1 className='text-left txt_head_el7'>Careers</h1>
                    </div>
                </div>
            </div>
            {/* <div className="mlr_el7 d-flex justify-content-center text-center">
                <p className="intro_el7" style={{marginBottom:'0px'}}>Choosing to work at Enormous IT Pvt. Ltd. is a decision that promises an enriching and dynamic career. Renowned for its innovative solutions and cutting-edge technology, the company offers employees an environment that fosters growth and creativity. At Enormous IT, you'll be part of a team that values collaboration, diversity, and continuous learning, ensuring that you stay ahead in the rapidly evolving tech landscape. With competitive compensation, comprehensive benefits, and a commitment to work-life balance, the company ensures that your personal and professional needs are met. Joining Enormous IT Pvt. Ltd. means being part of a forward-thinking company that invests in its people, values their contributions, and empowers them to reach their full potential.</p>
            </div> */}

            <div className="careers-container_el8">
          <section className="section_el8 ">
            {/* <p className="parsgh-heading" style={{fontWeight:"bold"}}>WHY ENORMOUS?</p> */}
            <p className="parsgh_el8 parsghclr_el8">
            At Enormous Corporate Solutions, we're excited to expand into the blue and gray collar industries, bringing fresh opportunities for individuals looking to advance their careers. As we step into this space, we are focused on creating roles that not only provide stability but also encourage personal and professional growth. Our approach emphasizes skill development, fostering a work environment where every employee feels valued and supported. By joining us, you'll be part of a team that's dedicated to helping you achieve your career goals and thrive in a role that truly makes a difference.
            </p>
          </section>

          <section className="section_el8 ">
            <p className="parsgh-heading_el8" style={{fontWeight:"bold"}}>Our Employee Benefits</p>
            <div className="benefits-cards">
              <div className="careers-card">
                <p className="parsgh-subheading_el8">
                  <strong>Health and Wellness</strong>
                </p>
                <p className="parsgh_el8">
                Comprehensive health insurance plans covering medical care for employees.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading_el8">
                  <strong>Paid Time Off</strong>
                </p>
                <p className="parsgh_el8">
                Generous leave policy that ensures you have ample time to recharge and attend to personal matters.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading_el8">
                  <strong>Professional Development</strong>
                </p>
                <p className="parsgh_el8">
                Opportunities for continuous learning and career growth, including training programs, workshops, and upskilling initiatives.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading_el8">
                  <strong>Retirement Plans</strong>
                </p>
                <p className="parsgh_el8">
                Secure your future with our retirement benefits, including provident fund contributions and pension schemes.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading_el8">
                  <strong>Work-Life Balance</strong>
                </p>
                <p className="parsgh_el8">
                Flexible work arrangements and a balanced five-day workweek, promoting a healthy work-life balance.                
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading_el8">
                  <strong>Performance Bonuses</strong>
                </p>
                <p className="parsgh_el8">
                Competitive salary packages with regular performance-based bonuses and incentives, recognizing and rewarding your hard work and dedication.                
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading_el8">
                  <strong>Inclusive Work Environment</strong>
                </p>
                <p className="parsgh_el8">
                A diverse and inclusive workplace where everyone is valued and respected, fostering a collaborative and innovative culture.               
                </p>
              </div>
            </div>
          </section>
          <div className="d-flex justify-content-center align-item-center">
                    <button type="button" className="btn btn-primary p-3 px-5 fs-5" onClick={handleExploreClick}>Explore Job Openings</button>
                </div>
            </div>

            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-button" onClick={handleClosePopup}>X</button>
                        <div className="job-portals">
                            <div className="portal-card">
                            <a href="https://www.naukri.com/enormous-it-services-jobs-careers-1505082" target="_blank" rel="noopener noreferrer">
                                <img src={naukriLogo} alt="Naukri Logo" className="portal-logo" />
                                </a>
                               
                            </div>
                            <div className="portal-card">
                            <a href="https://www.linkedin.com/company/enormousit/jobs/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn Logo" className="portal-logo" />
                                </a>
                               
                            </div>
                            <div className="portal-card">
                            <a href="https://www.foundit.in/srp/results?query=enormous&searchId=5fcac6c3-8b8d-4af4-84ed-82374964db42" target="_blank" rel="noopener noreferrer">
                                <img src={founditLogo} alt="Foundit Logo" className="portal-logo" />
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            )}
g<Footer />
        </div>
    );
}

export default Career;
