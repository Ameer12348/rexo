import React, { useEffect } from "react";
import "./About.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useEffect(() => {
    gsap.to('.about-bg',{
      filter:'blur(5px)',
      scrollTrigger:{
        trigger:'.about-bg',
        scroller:'body',
        scrub:2,
        start:'bottom 90%'

      }
    })
  });
  return (
    <div id="about" className="my-5 ">
      <h1 className="about-heading-1">Who We Are?</h1>
      <p className="about-para">
        Passionate about Perfection Keep away from people who try Make your
        teams more productive to belittle your ambitions.
      </p>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 mt-5 about-boxes mb-5">
        <div className="col about-box gap-1 d-flex flex-column justify-content-center align-items-center">
          <div
            className="img-box m-auto bg-info"
            style={{ outline: "2px solid #0dcaf0" }}
          >
            <img
              src="https://www.themesindustry.com/html/rexo/images/team-1.png"
              alt=""
            />
          </div>
          <h5 style={{ textAlign: "center" }}>Alex Stevens</h5>
          <h6 className="text-center fs-7 fw-light">Director</h6>
          <p style={{ fontSize: "14px" }} className="text-center">
            Keep away from people who try to belittle your ambitions, small
            people always do.
          </p>
        </div>
        <div className="col about-box gap-1 d-flex flex-column justify-content-center align-items-center">
          <div
            className="img-box m-auto bg-danger"
            style={{ outline: "2px solid #dc3545" }}
          >
            <img
              src="https://www.themesindustry.com/html/rexo/images/team-2.png"
              alt=""
            />
          </div>
          <h5 style={{ textAlign: "center" }}>Jena Rose</h5>
          <h6 className="text-center fs-7 fw-light">Web Designer</h6>
          <p style={{ fontSize: "14px" }} className="text-center">
            Keep away from people who try to belittle your ambitions, small
            people always do.{" "}
          </p>
        </div>
        <div className="col about-box gap-1 d-flex flex-column justify-content-center align-items-center">
          <div
            className="img-box m-auto bg-warning"
            style={{ outline: "2px solid #ffc107" }}
          >
            <img
              src="https://www.themesindustry.com/html/rexo/images/team-3.png"
              alt=""
            />
          </div>
          <h5 style={{ textAlign: "center" }}>Mark Wood</h5>
          <h6 className="text-center fs-7 fw-light">Developer</h6>
          <p style={{ fontSize: "14px" }} className="text-center">
            Keep away from people who try to belittle your ambitions, small
            people always do.
          </p>
        </div>
      </div>
      <div className="row range-boxes mb-5 row-cols-1 row-cols-lg-2 gy-5">
        <div className="ranges col">
        <div className="d-flex justify-content-between ">
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>Strategy</h4>
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>96%</h4>
        </div>
          <div
            className="range-meter-div p-0 ">
            <div
              className="meter"
              style={{ width: "96%", height: "8px", margin: "0px",background:"gray" }}
            ></div>
          </div>
        </div>
        <div className="ranges col">
        <div className="d-flex justify-content-between ">
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>Development</h4>
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>70%</h4>
        </div>
          <div
            className="range-meter-div p-0 ">
            <div
              className="meter"
              style={{ width: "70%", height: "8px", margin: "0px",background:'orange' }}
            ></div>
          </div>
        </div>
        <div className="ranges col">
        <div className="d-flex justify-content-between ">
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>Design</h4>
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>78%</h4>
        </div>
          <div
            className="range-meter-div p-0 ">
            <div
              className="meter"
              style={{ width: "78%", height: "8px", margin: "0px",background:"orange" }}
            ></div>
          </div>
        </div>
        <div className="ranges col">
        <div className="d-flex justify-content-between ">
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>Marketing</h4>
        <h4 style={{fontSize:'18px',color:'gray',fontWeight:'400'}}>85%</h4>
        </div>
          <div
            className="range-meter-div p-0 ">
            <div
              className="meter"
              style={{ width: "85%", height: "8px", margin: "0px",background:'gray' }}
            ></div>
          </div>
        </div>
      </div>
      </div>
      <div className="about-hero position-relative overflow-hidden" >
      <div className="row row-cols-lg-4 row-cols-1 w-100 h-100 align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
          <h4 style={{fontSize:'50px' ,textAlign:"center"}} className="text-light">2730+</h4>
          <p style={{fontSize:'20px',textAlign:'center'}} className="text-light">Completed Projects</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
          <h4 style={{fontSize:'50px' ,textAlign:"center"}} className="text-light">39</h4>
          <p style={{fontSize:'20px',textAlign:'center'}} className="text-light">Available Country</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
          <h4 style={{fontSize:'50px' ,textAlign:"center"}} className="text-light">125M</h4>
          <p style={{fontSize:'20px',textAlign:'center'}} className="text-light">User Worldwide</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
          <h4 style={{fontSize:'50px' ,textAlign:"center"}} className="text-light">09</h4>
          <p style={{fontSize:'20px',textAlign:'center'}} className="text-light">Award Winner</p>
      </div>
      </div>
      <div className="about-bg w-100 h-100 position-absolute top-0 left-0"  ></div>
      </div>
    </div>
  );
};

export default About;
