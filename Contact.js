


import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Contact.css";
import locationimg from "./Locationimgcontact.png";
import Contact from './images/contactus.jpeg'
import "bootstrap/dist/css/bootstrap.min.css";
// import ScrollTracker from "../Scrolltracker";
import filter from 'bad-words';
import Footer from "./FooterF";
import Whatsappbutton from "./WhatsappButton.png"


// Define lists of disallowed names
const disallowedWords = [
  // Fruits
  'apple', 'banana', 'orange', 'strawberry', 'grape', 'pineapple', 'mango', 'blueberry', 'raspberry', 'blackberry',
  'pear', 'peach', 'plum', 'kiwi', 'papaya', 'watermelon', 'melon', 'cantaloupe', 'nectarine', 'apricot', 'cherry',
  'grapefruit', 'lime', 'lemon', 'pomegranate', 'coconut', 'fig', 'date', 'tangerine', 'mandarin', 'jackfruit',

  // Vegetables
  'carrot', 'potato', 'onion', 'garlic', 'spinach', 'broccoli', 'cauliflower', 'pepper', 'cucumber', 'tomato', 'lettuce',
  'zucchini', 'eggplant', 'corn', 'peas', 'green bean', 'radish', 'celery', 'beet', 'turnip', 'asparagus', 'pumpkin',
  'sweet potato', 'squash', 'kale', 'brussels sprout', 'artichoke', 'chard', 'parsnip', 'leek', 'okra', 'rutabaga',

  // Animals
  'dog', 'cat', 'mouse', 'rat', 'rabbit', 'hamster', 'guinea pig', 'ferret', 'squirrel', 'horse', 'cow', 'sheep',
  'goat', 'pig', 'chicken', 'duck', 'turkey', 'goose', 'camel', 'lion', 'tiger', 'bear', 'elephant', 'giraffe',
  'zebra', 'hippopotamus', 'rhinoceros', 'panda', 'koala', 'kangaroo', 'monkey', 'gorilla', 'chimpanzee', 'sloth',
  'penguin', 'seal', 'otter', 'whale', 'dolphin', 'shark', 'octopus', 'jellyfish', 'crab', 'lobster', 'shrimp', 'hibye', 'bad', 'waste', 'stupid', 'dirty', 'dirt', 'rascal', 'idiot' ,

  //Numbers
  0,1,2,3,4,5,6,7,8,9
];

const validateMessage = (input) => {
  
  if (input.trim() === "") {
    return 'Your message cannot be empty.';
  }

  // Check if there are any spaces in the message
  // if (/\s/.test(input)) {
  //   return 'Spaces between characters are not allowed.';
  // }


  const specialCharRegex = /[^a-zA-Z0-9 ]/;

  if (specialCharRegex.test(input)) {
    return 'Special characters are not allowed.';
  }

  const badWordsFilter = new filter();
  if (badWordsFilter.isProfane(input)) {
    return 'Profane language is not allowed.';
  }

  // const lowerCaseInput = input.toLowerCase();
  // if (disallowedWords.some(word => lowerCaseInput.includes(word))) {
  //   return 'Input contains disallowed names.';
  // }

  const lowerCaseInput = input.toLowerCase();
  const compactedInput = lowerCaseInput.replace(/\s+/g, '');
  
  if (disallowedWords.some(word => compactedInput.includes(word))) {
    return 'Input contains disallowed names or words.';
  }


  return '';
};

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    mobile: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const disposableDomains = [
    "mailinator.com",
    "guerrillamail.com",
    "10minutemail.com",
  ];

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...errors };

   
    const namePattern = /^[A-Za-z\s]+$/;
  const trimmedName = formData.name.trim();
    const maxLength = 30;
    if (!namePattern.test(formData.name.trim())) {
      newErrors.name = "Name should not contain numbers or special characters.";
      valid = false;
    }else if (trimmedName.length > maxLength) {
        newErrors.name = `Name should not exceed ${maxLength} characters.`;
        valid = false;
      }
     else {
      newErrors.name = "";
    }


    // const namePattern = /^[A-Za-z\s]+$/;
    // if (!namePattern.test(formData.name.trim())) {
    //   newErrors.name = "Name should not contain numbers or special characters.";
    //   valid = false;
    // } else {
    //   newErrors.name = "";
    // }


    // Email Validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email =
        "Please enter an email address from gmail.com, outlook.com, or yahoo.com";
      valid = false;
    } else if (
      disposableDomains.some((domain) => formData.email.endsWith(domain))
    ) {
      newErrors.email = "Please provide a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Mobile Validation
    // if (!/^\d{10}$/.test(formData.mobile.trim())) {
    //   newErrors.mobile = "Mobile number must be 10 digits";
    //   valid = false;
    // } else {
    //   newErrors.mobile = "";
    // }


    const mobileNumber = formData.mobile.trim();

    // Check if the number is 12 digits long (including country code)
    // if (!/^\d{12}$/.test(mobileNumber)) {
    //   newErrors.mobile = "Mobile number must be 10 digits";
    //   valid = false;
    // // Check if the number starts with zero after the country code
    // } else 
    if (/^\+?\d{1,4}0/.test(mobileNumber)) {
      newErrors.mobile = "Mobile number should not start with zero after the country code";
      valid = false;
    } else {
      newErrors.mobile = "";
    }
    


    // message Validation
    const maxCompanyLength = 30;
    const trimmedCompany = formData.company.trim();
    const specialCharStart = /^[^A-Za-z0-9]/; // Regex to check if the string starts with a non-alphanumeric character
    
    if (trimmedCompany === "") {
      newErrors.company = "Company name is required.";
      valid = false;
    } else if (specialCharStart.test(trimmedCompany)) {
      newErrors.company = "Company name should not start with a special character.";
      valid = false;
    } else if (trimmedCompany.length > maxCompanyLength) {
      newErrors.company = `Company name should not exceed ${maxCompanyLength} characters.`;
      valid = false;
    } else {
      newErrors.company = "";
    }


    const maxMessageLength = 300; // Set your desired maximum length here
    const trimmedMessage = formData.message.trim();
    
    // Validate the message using your custom function
    const messageValidationError = validateMessage(trimmedMessage);
    
    if (trimmedMessage === "") {
      newErrors.message = "Message is required.";
      valid = false;
    } else if (/^\s+$/.test(trimmedMessage)) {
      newErrors.message = "Message should not contain only spaces.";
      valid = false;
    } else if (trimmedMessage.length > maxMessageLength) {
      newErrors.message = `Message should not exceed ${maxMessageLength} characters.`;
      valid = false;
    } else if (messageValidationError) {
      newErrors.message = messageValidationError;
      valid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);

    if (valid) {
      emailjs
        .sendForm(
        "service_55m1wfx",
          "template_jf5coys",
          form.current,
          "X8_pxsMWqHcwDojlp"
        )
        .then(
          () => {
            setSubmissionSuccess(true);
            setFormData({
              name: "",
              email: "",
              mobile: "",
              company: "",
              message: "",
            });
            emailjs.send(
             "service_e3wxd23", // Replace with your service ID
              "template_huom0p2", // Replace with your template ID
              {
                to_email: formData.email,
                message: formData.message,
                subject: "Thank You for Contacting Us"
              },
              "UcsdwIxhpf-3b6lQ5" // Replace with your user ID
            )
            .then(
              (thankYouResponse) => {
                console.log("Thank you email sent successfully!", thankYouResponse.status, thankYouResponse.text);
              },
              (thankYouError) => {
                console.error("Failed to send thank you email. Error:", thankYouError);
              }
            );
          },
          (error) => {
            console.error("Email sending failed...", error.text);
          }
        );
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      mobile: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Handling change for ${name}: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const phoneNumber = '9849291999'; 
  const message = 'Hello, I have an inquiry.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="body ">
      <div className="contact-section media1 ">
        <div className="image-container img_el10 ">
          <img src={Contact} className="img-fluid img_el10" alt="Technology" />
          <div className="overlay"></div>
          {/* <div className="txt">
            <h3 className="contactushead">Contact Us</h3>
          </div> */}
        </div>
      </div>
      <br />
      <div className="containerru mt-3">
        <div className="row cardruth fdcon">
          <div className="col-md-6">
            <div className="cardru cbru">
              <div className="card-body">
                <form ref={form} onSubmit={handleSubmit}>
                  <h2
                    className="text-center mb-4 getruth1"
                    style={{
                      fontFamily: "Franklin Gothic Medium",
                      fontSize: "40px",
                      fontWeight: "600",
                    }}
                  >
                    Get in Touch
                  </h2>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""
                        }`}
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="invalid-message text-danger fs-6 fw-bold ">{errors.name}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""
                        }`}
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="invalid-message text-danger fs-6 fw-bold ">{errors.email}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Mobile Number<span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      country={"in"}
                      value={formData.mobile}
                      onChange={handlePhoneChange} // Use the new handler here
                      inputClass={`form-control ${
                        errors.mobile ? "is-invalid" : ""
                      }`}
                      placeholder="Enter 10 digits of mobile number"
                      name="mobile"
                    />

                    <div className="invalid-message text-danger fs-6 fw-bold ">{errors.mobile}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">Company Name<span className="text-danger">*</span></label>
                    <input
                      type="text"
                      className={`form-control ${errors.company ? "is-invalid" : ""
                        }`}
                      placeholder="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <div className="invalid-message text-danger fs-6 fw-bold ">{errors.company}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Your message<span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? "is-invalid" : ""
                        }`}
                      rows="3"
                      placeholder="Please enter your message."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <div className="invalid-message text-danger fs-6 fw-bold ">{errors.message}</div>
                  </div>
                  <div className="text-center" style={{ display: "grid" }}>
                    <button
                      type="submit"
                      className="btn btn-darkuni btnruth"
                      style={{
                        background: "black",
                        color: "white",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                  {submissionSuccess && (
                    // <div className="alert alert-success  bgcl" >
                    //  <b>Submission successfull!</b> 
                    // </div>
                    <div className="alert alert-success  mt-3 alert-blue text-center">
  <b>Submission successful!</b>
</div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="wfaj">
              <div className="col-md-5">
                <a href={whatsappUrl} className="whatsapp-button wf1aj " target="_blank" rel="noopener noreferrer">
                  <img src={Whatsappbutton} alt="WhatsApp Logo" className="whatsapp-logo" />
                  <span className="whatsapp-text">Chat with Us!</span>
                </a>
              </div>
            </div>
            <div className="text-center rrr">
              <h6
                style={{
                  marginBottom: "20px",
                  marginTop: "15px",
                  fontFamily: "Franklin Gothic Medium",
                  fontSize: "26px",
                }}
              >
                Let's Talk!
              </h6>
              <h5
                style={{
                  fontFamily: "Franklin Gothic Medium",
                  marginBottom: "30px",
                }}
              >
                Reach Out to Our Team of Seasoned Experts for Tailored Guidance.
              </h5>
              <div>
                <h6
                  style={{
                    marginBottom: "-10px",
                    fontFamily: "Franklin Gothic Medium",
                    fontSize: "20px",
                    paddingBottom: "3px",
                  }}
                >
                  Email
                </h6>
                <button
                  className="m-2 btn-dark btn2ruth w-auto"
                  style={{
                    fontSize: "17.5px",
                    fontFamily: "Franklin Gothic Medium",
                    background: "black",
                    border: "none",
                    color: "white",
                  
                  }}
                >
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqLKqrckmpBpKrdsDrvFRNfGrtsnmxzhNBXPSPLFLXWmqWJFHPNJWgCsgRmSgsMVlJxq" target="blank" style={{  textDecoration:'none', color:'white'}}> info@enormousit.com</a>
                </button>
              </div>
              <div>
                <h6
                  style={{
                    marginBottom: "-12px",
                    fontFamily: "Franklin Gothic Medium",
                    fontSize: "20px",
                    paddingBottom: "3px",
                  }}
                >
                  Call Us
                </h6>
                <div className="d-flex justify-content-center">
                  <p
                    className="m-2 btn-dark w-auto btn2ruth"
                    style={{
                      fontSize: "18px",
                      background: "black",
                      border: "none",
                      color: "white",
                    }}
                  >
                    +91-40-4855 3545
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="locat mt-5"
        style={{
          paddingBottom: "15px",
          marginLeft: "25px",
          marginRight: "20px",
        }}
      >
        <div className="row d-flex justify-content-center" >
          <div className="col-md-3 text-center">
            <div>
              <img
                src={locationimg}
                alt="Loading"
                className="location-iconru"
              />
            </div>
            <h4 className="head4ruth" style={{fontSize:"28", fontWeight:"600"}}>Hyderabad</h4>
            <p className="head5ruth" style={{ fontSize: "22px" }}>
              Address: # Quadrant 2, 6th Floor, Cyber Towers, HITEC City,
              Madhapur, Hyderabad - 500081 Place: Telangana, India Ph:
              +91-40-4855 3545
            </p>
          </div>
          <div className="col-md-3 text-center">
         
            <div>
              <img
                src={locationimg}
                alt="Loading"
                className="location-iconru"
              />
            </div>
            <h4 className="head4ruth" style={{fontSize:"28", fontWeight:"600"}}>Bangalore</h4>
            <p className="head5ruth" style={{ fontSize: "22px" }}>
              Address: RMZ Infinity #3, Benningana Halli Place:
              Bengaluru-560016, Karnataka, India Ph: +91-805-028-0642
            </p>
          </div>

          {/* <div className="col-md-3 text-center">

            <div>
              <img
                src={locationimg}
                alt="Loading"
                className="location-iconru"
              />
            </div>
            <h4 className="head4ruth" style={{fontSize:"28", fontWeight:"600"}}>USA</h4>
            <p className="head5ruth" style={{ fontSize: "22px" }}>
              Address: 13800 Coppermine Rd Place: Herndon Virginia 20171
            </p>
          </div> */}
          {/* <div className="col-md-3 text-center">
        
            <div>
              <img
                src={locationimg}
                alt="Loading"
                className="location-iconru"
              />
            </div>
            <h4 className="head4ruth" style={{fontSize:"28", fontWeight:"600"}}>Singapore</h4>
            <p className="head5ruth" style={{ fontSize: "22px" }}>
              Address: 29 MAYO STREET, #03-03 Place: SINGAPORE 208315
            </p>
          </div> */}
        </div>
      </div>
      {/* <ScrollTracker /> */}
      
<Footer />


{/* background-color: #25D366 */}
    </div>

  );
};

export default Contactus;

