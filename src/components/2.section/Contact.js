import React, { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
  const message = useRef()
  return (
    <div id="contact" className="container">
      <div className="row row-cols-md-1">
        <div className="col col-12 col-md-8 mb-5 mb-md-1">
          <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#07aaad" }} className="mb-5">
            Let’s <span style={{ color: "#74a534" }}>Get In Touch</span>
          </h1>
          <div className="row">
            <div className="col col-12 col-md-6 p-2 ">
              <label htmlFor="Name" className="d-block w-100">Name</label>
              <input type="text" placeholder="Name" id="Name"  className="d-block w-100 form-control border border-1 border-info my-1"/>
            </div>
            <div className="col col-12 col-md-6 p-2">
                <label htmlFor="Email" className="d-block w-100">Email</label>
                <input type="email"  id="Email" placeholder="Email" className="d-block w-100 form-control border border-1 border-info my-1" />
            </div>
          </div>
          <div>
          <label htmlFor="message" className="d-block w-100 mb-2">Message</label>
          <textarea style={{height:'150px'}}  id="message" className="form-control border-1 border border-info w-100" placeholder="Please Enter Your Message Here" ref={message}></textarea>
          </div>
          <a className="btn btn-primary rounded rounded-pill mt-3" href={`mailto:ameerarif12348@gmail.com?`}>Send Message</a>
        </div>
        <div className="col col-md-4 col-12 ">
          <h1 style={{ fontSize: "35px", fontWeight: "300", color: "#07aaad" }} className="mb-5">
            Office Location
            </h1>
            <p style={{color:'#07aaad',fontSize:'15px',fontWeight:'350'}} className="mb-5">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis accumsan.</p>
            <div className="d-flex mb-4 gap-3"><div style={{fontSize:'30px',color:'#74a534'}}><FaLocationDot/></div> <div className="flex flex-column">
            <h6 style={{fontSize:'14px'}}>Our Address</h6>
            <p style={{fontSize:'13px',margin:'0px'}}>1234 Heaven Stress. Beverly Hill </p>
            </div> </div>
            <div className="d-flex mb-4 gap-3"><div style={{fontSize:'30px',color:'#74a534'}}><FaPhoneAlt/></div> <div className="flex flex-column">
            <h6 style={{fontSize:'14px'}}>Phone Number</h6>
            <p style={{fontSize:'13px',margin:'0px'}}>Office (800) 123 456 789</p>
            </div> </div>
            <div className="d-flex mb-4 gap-3"><div style={{fontSize:'30px',color:'#74a534'}}><MdMail/></div> <div className="flex flex-column">
            <h6 style={{fontSize:'14px'}}>Email Address</h6>
            <p style={{fontSize:'13px',margin:'0px'}}>Email: email@website.com <br/>
            Support: support@website.com</p>
            </div> </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
