import React from 'react';
import './Footerf.css';
import './images/FooterImage.jpeg';
import { Link } from 'react-router-dom';
import Linkedin from './images/linkedin.png'
import Instagram from './images/instagram.png';
import logo from './images/LOGO3.png';


const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div >
      <div>
      <Link to="/"> <img src={logo} className="logo" alt="Logo"/></Link></div>
        <div className="f2">
          <div className="f">
            <p className="p_el9 w-auto">For quick enquiry,</p>
            {/* <p className="p">Call us on 0404855345</p> */}
            {/* <p className="h6 p" style={{ marginLeft: "60px" }}>(or)</p> */}
            <p className="p_el9 w-auto">Write to us on</p>
            {/* <p className="p">info@enormousit.com</p> */}
            <a className='p_el9 w-auto' target='blank' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqtQNJmpfVtlGmSmwdZwzBhFvMGFXjDdfHDRKQbdgLsmhKMdVBZlxttrbQpSBPCmDrSRL' style={{textDecoration:'none' , color:'white'}}>
            info@enormousit.com</a>
          </div>
         

          <div className="f">
            <p className="h5 ">Site Map</p>
            <Link to="/" className='Linkd'><p className="p">Home</p></Link>
            <Link to="/aboutus" className='Linkd'><p className="p">About us</p></Link>
            <Link to="/general-staffing" className='Linkd'><p className="p">Services</p></Link>
            <Link to="/healthcare" className='Linkd'> <p className='p'>Business Verticals</p> </Link>
            <Link to="/career" className='Linkd'> <p className='p'>Careers</p> </Link>
            <Link to="/contactus" className='Linkd'> <p className="p">Contact Us</p></Link>
          </div>

          <div className="f">
            <p className="h5 " >Let's Connect!</p>
            <p className="p_el9">
            <a target='blank' href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A19257494&keywords=enormous%20it&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c0c367e9-0307-4dce-8e43-313ea84b8295&sid=NvT&spellCorrectionEnabled=false'>
              <img src={Linkedin} alt='Loading' width={'30px'} style={{marginRight:'20px',marginLeft:'25px'}} />
            </a>
            <a target='blank' href='https://www.instagram.com/enormous_it_services/'>
            <img src={Instagram} alt='Loading' width={'30px'} />
            </a>
              {/* <a href="/Terms & Conditions.pdf" target="_blank" rel="noopener noreferrer" className='Linkd'>
                Terms & Conditions
              </a> */}           
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div className="endf_el9">
        <span>
          &copy; {new Date().getFullYear()} Enormous IT Corporate Solutions. All
          Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;