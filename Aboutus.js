import "./Aboutus.css";
import About from "./images/Aboutus.jpg";
import midimg from "./images/middleimageabt.jpeg";
import lastimg from "./images/lastimgabt.jpeg";
import Footer from "./FooterF";

const Aboutus = () => {
  return (
    <div>
      <div className="image-container">
        <img className="img_el4" src={About} alt="Loading" />
        <div className="overlay"></div>
        <div className="dflex_el4">
          <p className="txsz_el4">About Us</p>
        </div>
      </div>
      <div>
        <p className="sz_el4 dflex_el4">Our Journey</p>
      </div>
      <div>
        <p className="dflex_el4 psz_el4">
          It all started with Enormous IT Services Pvt. Ltd. Over a decade ago,
          we began our mission to provide top-tier IT solutions to businesses
          worldwide. Our expertise and dedication allowed us to work with
          multinational companies, catering to their diverse IT needs. From IT
          managed services to IT-enabled services, we delivered excellence in
          every project we undertook. It all started with Enormous IT Services
          Pvt. Ltd. Over a decade ago, we began our mission to provide top-tier
          IT solutions to businesses worldwide. Our expertise and dedication
          allowed us to work with multinational companies, catering to their
          diverse IT needs. From IT managed services to IT-enabled services, we
          delivered excellence in every project we undertook.
        </p>
      </div>
      <div>
        <p className="sz_el4 dflex_el4">Our Expansion</p>
      </div>
      <div>
        <p className="dflex_el4 psz_el4">
          As we navigated the evolving business landscape, we identified
          significant growth potential in the blue and grey-collar industries.
          Recognizing the demand for reliable staffing solutions, we diversified
          our services and ventured into non-IT and bulk staffing. This
          strategic move enables us to provide comprehensive staffing solutions
          across various industries, ensuring that businesses have access to the
          skilled workforce they need.
        </p>
      </div>
      <div className="dflex_el4">
        <img className="midimg_el4 " src={midimg} alt="Loading" />
      </div>
      <div>
        <p className="sz_el4 dflex_el4">Our Commitment</p>
      </div>
      <div>
        <p className="dflex_el4 psz_el4">
          At Enormous Corporate Solutions, we are committed to maintaining the
          same level of excellence and dedication that defined our success in
          the IT sector. Our goal is to deliver innovative and effective
          staffing solutions that drive business success and growth.
        </p>
      </div>
      <div>
        <p className="sz_el4 dflex_el4"> Our Expertise</p>
      </div>
      <div>
        <p className="dflex_el4 psz_el4">
          With our extensive experience in IT services, we bring proven
          methodologies and best practices to our staffing solutions. Our team
          is equipped with the knowledge and skills to meet the unique needs of
          each client, ensuring that we provide the highest quality service.
        </p>
      </div>
      <div>
        <p className="sz_el4 dflex_el4">Our Vision for the Future</p>
      </div>
      <div>
        <p className="dflex_el4 psz_el4">
          We foresee substantial growth in the blue and grey-collar industries
          and are dedicated to being at the forefront of this expansion. By
          continuously adapting and innovating, we aim to provide the best
          staffing solutions and contribute to the success of businesses across
          various sectors.
        </p>
      </div>
      <div className="overlap-card-container">
  <img src={lastimg} alt="Overlapping" className="image_el4 " />
  <div className="cardimgtext_el4">
    <p className="cardimgtext1_el4">
    Ready to explore our staffing solutions? Contact us today to learn
            how Enormous Corporate Solutions can support your business with
            reliable and effective staffing services.
    </p>
    <div >
        <button className="button_el4">Contact Us Now!</button>
    </div>
  </div>

      {/* <div>
        {" "}
        <div className="dflex_el4">
          <img
            className="lastimg_el4 overlappig_el4"
            src={lastimg}
            alt="Loading"
          />
          <p className="card_el4 textpsz_el4">
            Ready to explore our staffing solutions? Contact us today to learn
            how Enormous Corporate Solutions can support your business with
            reliable and effective staffing services.
          </p>
          <button className="button_el4"> Contact Us Now</button>
          <div>
           
          </div>
        </div> */}
        {/* <div className="overlap-card-container">
  <img src={lastimg} alt="Overlapping" className="overlap-image" />
  <div className="overlap-card">
    <p className=" txtlt_el4">
    Ready to explore our staffing solutions? Contact us today to learn how Enormous Corporate Solutions can support your business
     with reliable and effective staffing services.
    </p>
    <div >
        <button className="button_el4">Contact Us Now!</button>
    </div>
  </div>
  </div> */}
      </div>
      {/* <button className="button_el4"> Contact Us Now</button> */}
      <Footer />
    </div>
  );
};
export default Aboutus;