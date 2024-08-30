import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PayrollServices.css";
// import payrolls from "./payrolls2.jpg";
import payrolls from './images/payrolls2.jpg';
import { Link } from "react-router-dom";
import Footer from "./FooterF";

const PayrollServices = () => {
  return (
    <div>
      <div className="image-container">
        <div className="position-relative">
          <img src={payrolls} className="img-fluid" alt="Payroll Services" />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start p-3 text-light "></div>
          <span className="el6-hdimg">Payroll Services</span>
        </div>
        <Link to='/contactus'>
        <div className='d-flex justify-content-left' style={{ textAlign: 'left' }}>
                            <button className="btn btn-outline-light el6-btnpr">Get in touch</button>
                        </div></Link>
      </div>

      <div className="container mt-4">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill el6-bc">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 el6-head">Payroll Services</h3>
                <p className="card-text el6-txt">
                  Managing payroll can be a complex and time-consuming task for
                  any business. At Enormous Corporate Solutions, we offer
                  comprehensive payroll services designed to simplify your
                  payroll processes and ensure accuracy, efficiency, and
                  compliance. Our team of experts is dedicated to handling all
                  aspects of payroll management so you can focus on growing your
                  business.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill el6-bc">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 el6-head">Payroll Processing</h3>
                <p className="card-text el6-txt">
                  We provide seamless payroll processing services, ensuring
                  timely and accurate salary disbursements. Our advanced systems
                  handle calculations, deductions, and direct deposits
                  efficiently, reducing errors and ensuring your employees are
                  paid on time, every time.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill el6-bc">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 el6-head">Tax Compliance</h3>
                <p className="card-text el6-txt">
                  Staying compliant with tax regulations is crucial for any
                  business. We manage all aspects of payroll tax compliance,
                  including tax calculations, filings, and payments. Our
                  expertise ensures that your business adheres to the latest tax
                  laws, avoiding costly penalties and fines.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill el6-bc">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 el6-head">
                  Employee Benefits Administration
                </h3>
                <p className="card-text el6-txt">
                  Managing employee benefits can be challenging. We offer
                  comprehensive benefits administration services, handling
                  everything from health insurance and retirement plans to leave
                  management and other perks. Our team ensures that your
                  employees receive their benefits accurately and on time.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill el6-bc">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 el6-head">
                  Compliance and Regulations
                </h3>
                <p className="card-text el6-txt">
                  Navigating the complexities of labor laws and regulations can
                  be daunting. Our payroll services ensure full compliance with
                  local, state, and federal regulations, giving you peace of
                  mind and allowing you to focus on your core business
                  activities.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card shadow-lg border-light rounded-3 p-3 flex-fill el6-bc">
              <div className="card-body text-center">
                <h3 className="card-title mb-4 el6-head">Dedicated Support</h3>
                <p className="card-text el6-txt">
                  Our dedicated support team is always available to assist you
                  with any payroll-related queries or issues. At Enormous
                  Corporate Solutions, we understand the importance of efficient
                  payroll management in maintaining employee satisfaction and
                  operational efficiency. Our comprehensive payroll services are
                  designed to meet the unique needs of your business, ensuring
                  accuracy, compliance, and ease of use.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 mb-3 d-flex">
            <div className=" p-3 flex-fill">
              <div className="card-body text-center">
                <h4 className="card-title mb-4 el6-head2">Contact Us Now!</h4>
                <p className="card-text el6-txt2">
                  Ready to streamline your payroll processes?
                  <Link to="/contactus" className="el6-dectx"> Contact us </Link>
                   today to learn how Enormous Corporate Solutions can provide
                  you with reliable and efficient payroll management services.
                  Let us handle your payroll, so you can focus on growing your
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PayrollServices;