import React from "react";
import "./HomePage.css";
// import img1 from "./img1.jpg";
import Hmepg from "./images/Hmepg.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import healthcare from "../src/images/healthcare.png";
import medicine from "../src/images/medicine.png";
import Finance from "../src/images/Finance.png";
import Manufacturing from "../src/images/Manufacturing.png";
import bankaccount from "../src/images/bankaccount.png";
import lifeinsurance from "../src/images/lifeinsurance.png";
import truck from "../src/images/truck.png";
import shoppingcart from "../src/images/shoppingcart.png";
import agreement from "../src/images/agreement.png";
import fooddelivery from "../src/images/fooddelivery.png";
import telecommunication from "../src/images/telecommunication.png";
import television from "../src/images/television.png";
import biotech from "../src/images/biotech.png";
import enterprise from "../src/images/enterprise.png";
import img2 from "../src/images/img2.png"
import Footer from "./FooterF";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
      <header className="bg">
        <div className="body">
          <div className="image-container">
            <img src={Hmepg} className="img-fluid" alt="Technology" />
            <div className="overlay"></div>
            <div className="txt-el3" style={{ textAlign: "left" }}>
              <p className="text-xl text-xl-left text-left heading_el3">
              Expanding Expertise:
              </p>
              <p className="text-xl text-xl-left text-left heading_el3">
              Now in Non-IT Staffing!
              </p>
              {/* <p className="Hp text-xl-left text-left slogan_el3">
              </p> */}
              
              <Link to='/contactus'><button className="btn btn-outline-light btn1-el3 btn2">Get In Touch</button> </Link>
              
            </div>
          </div>
        </div>
     

        {/* <div className="div1card_el3">
                <div className="image-container img_el3">
                    <img src={Hmepg} className="img-fluid" alt="Technology" />
                    <div className="overlay_el3"></div>
                    <div className="txt_el3" style={{ textAlign: 'left' }}>
                        <h1 className='text-left txt_head_el3'>Real Estate</h1>
                        <p className='text-left text_slogan_el3'>Pioneering Tomorrow's Solutions Today</p>
                        <div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light btn_el3">Get in touch</button>
                        </div>
                    </div>
                </div>
            </div> */}



      <main className="container text-center mt-5">
        <p className="head-el3">Welcome to Enormous Corporate Solutions!</p>
        <p className="font-el3">
          We are your trusted partner in delivering innovative staffing and payroll services across diverse industries.
          With a dedicated focus on expanding into non-IT bulk staffing, we aim to meet your business needs with precision and professionalism.
          Explore our website to learn more about how we can support your growth.
        </p>
        <p className="mt-4 head-el3">Our Services</p>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="service-card border rounded p-4 shadow-sm">
              <p className="service-title font-weight-bold font2-el3"><strong>General Staffing</strong></p>
              <p className="font-el3">
                Providing end-to-end staffing solutions for temporary, permanent, and contract-to-hire positions across various industries.
                Ensuring a seamless hiring process and reliable workforce, we specialize in both blue and grey-collar jobs.
                Our rigorous screening process guarantees that only the most qualified candidates are matched with your organization's needs.
              </p>
              <Link to='/general-staffing'><button className="cdbtn-el3 cdbtn-el3:hover mt-3">Read More</button></Link>
             
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card border rounded2 p-4 shadow-sm">
              <p className="service-title font-weight-bold font2-el3 "><strong>Payroll Services</strong></p>
              <p className="font-el3">
                Offering comprehensive payroll management, including payroll processing, tax compliance, and employee benefits administration.
                Ensuring accuracy, efficiency, and compliance, our services also include detailed reporting and analytics to help you make informed decisions.
                We handle the complexities of payroll so you can focus on growing your business.
              </p>
              <Link className="textdeck_ell3" to='/payroll-services'><button className="cdbtn-el3 cdbtn-el3:hover mt-3">Read More</button></Link> 
              
            </div>
          </div>
        </div>

        <section className="mt-4">
          <p className="head-el3">Our Business Verticals</p>
          <div className="row mt-4">
            {[
              { src: healthcare, alt: "Health Care", name: "Health Care", link: '/healthcare'},
              { src: medicine, alt: "Pharmaceutical Industry", name: "Pharma", link:'/pharmaceutical' },
              { src: Finance, alt: "Finance", name: "Finance",  link: '/finance' },
              { src: Manufacturing, alt: "Manufacturing", name: "Manufacturing" ,  link: '/manufacturing'}
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
              <Link to={item.link} className="textdeck_ell3">
                <div className="card-el3">
                  <div className="card-content-el3">
                    <img src={item.src} alt={item.alt} className="card-image-el3" />
                    <p className="card-name-el3">{item.name}</p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            {[
              { src: bankaccount, alt: "NBFC", name: "NBFC" , link: '/nbfc' },
              { src: lifeinsurance, alt: "lifeinsurance", name: "Insurance" , link: '/insurance'},
              { src: shoppingcart, alt: "Retail", name: "Retail" , link: '/retail'},
              { src: truck, alt: "Logistics", name: "Logistics", link: '/logistics' }
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
              <Link to={item.link} className="textdeck_ell3">
                <div className="card-el3">
                  <div className="card-content-el3">
                    <img src={item.src} alt={item.alt} className="card-image-el3" />
                    <p className="card-name-el3">{item.name}</p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            {[
              { src: fooddelivery, alt: "Food & Packaging", name: "Food & Packaging" , link: '/food-and-packaging'},
              { src: telecommunication, alt: "Telecommunication", name: "Telecommunication", link: '/telecommunication' },
              { src: agreement, alt: "Real Estate", name: "Real Estate" , link: '/real-estate'},
              { src: television, alt: "Media & Entertainment", name: "Media & Entertainment" , link: '/media'}
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
              <Link to={item.link} className="textdeck_ell3">
                <div className="card-el3">
                  <div className="card-content-el3">
                    <img src={item.src} alt={item.alt} className="card-image-el3" />
                    <p className="card-name-el3">{item.name}</p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row mt-4" style={{display:"flex" , justifyContent:"center"}}>
            {[
              { src: biotech, alt: "Biotech", name: "Biotech", link: '/bio-technology'},
              { src: enterprise, alt: "Public Sector", name: "Public Sector", link:'/public-sector' },
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
              <Link to={item.link} className="textdeck_ell3">
                <div className="card-el3">
                  <div className="card-content-el3">
                    <img src={item.src} alt={item.alt} className="card-image-el3" />
                    <p className="card-name-el3">{item.name}</p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>

        </section>

        <p className="text-center mt-4 head-el3">Why Enormous?</p>
        <div className="r-el3">
          {[
            { title: <strong>Reliable Workforce Solutions</strong>, description: "Rigorous candidate screening for blue and grey-collar jobs." },
            { title: <strong>Personalized Approach</strong>, description: "Customized staffing and payroll strategies for your business." },
          ].map((item, index) => (
            <div className="card1-el3" key={index}>
              <div className="card1-content-el3">{item.title}</div>
              <p className="font-el3">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="r-el3">
          {[
            { title:<strong> Focus on Compliance </strong>, description: "Adhering to the highest regulatory standards." },
            { title: <strong>Commitment to Excellence</strong>, description: "Top-notch service and innovative solutions guaranteed." },
          ].map((item, index) => (
            <div className="card1-el3" key={index}>
              <div className="card1-content-el3">{item.title}</div>
              <p className="font-el3">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="r-el3">
          {[
            { title: <strong>Building Long-Term Partnerships</strong>, description: "Developing trust and delivering consistent value." },
            { title: <strong>Dedicated Support</strong>, description: "Experienced professionals available to assist you." },
          ].map((item, index) => (
            <div className="card1-el3" key={index}>
              <div className="card1-content-el3">{item.title}</div>
              <p className="font-el3">{item.description}</p>
            </div>
          ))}
        </div>

{/* <div className="cd1-el3">
    <p>Get in touch with us today to discuss your staffing and payroll needs. Our team of experts is here to provide you with personalized solutions and support.</p>
</div> */}

    <div className="overlap-card-container">
  <img src={img2} alt="Overlapping" className="overlap-image" />
  <div className="overlap-card">
    <p>
      Get in touch with us today to discuss your staffing and payroll needs. Our team of experts is here to provide you with personalized solutions and support.
    </p>
    <div >
    <Link to='/contactus'> <button className="btn_el3">Contact Us Now!</button></Link>
       
    </div>
  </div>
</div>





      </main>
      </header>
      <Footer />
        </div>
  );
}

export default HomePage;
