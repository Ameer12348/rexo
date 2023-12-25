import React, { useEffect, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import Marquee from 'react-fast-marquee'
import './Header.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import glide from '@glidejs/glide'
gsap.registerPlugin(ScrollTrigger)
const Header = () => {
    //////////////// variable ////////////
    const background = useRef()
    const main_nav = useRef()
    const logo = useRef()
    const main_links = useRef()

    useEffect(()=>{
        gsap.to('.background-top-nav' ,{
            filter:'blur(5px)',
            scrollTrigger:{
                scroller:'body',
                trigger:'.background-top-nav',
                start:'bottom 90%',
                scrub:1,
            }
        })
        gsap.to('#logo ,.nav-links li',{
            y:'0%',
            opacity:1,
            duration:0.5,
            color:"white",
            stagger:0.1
        })
        window.addEventListener('scroll',()=>{
            if (window.scrollY>0) {
                main_nav.current.style = 'background:white;color:black !important'
                document.querySelectorAll('.nav-links li a ').forEach(element => {
                    element.style.color ='black'
                });
                logo.current.src = 'https://www.themesindustry.com/html/rexo/images/logo-white-green.png'
            }
            else {
                document.querySelectorAll('.nav-links li a ').forEach(element => {
                    element.style.color ='white'
                });
                logo.current.src = 'https://www.themesindustry.com/html/rexo/images/logo-green.png'
                main_nav.current.style = 'background:rgba(0, 0, 0, 0.5);color:white'
            }
        })
        new glide('.glide',{
            autoplay:5000,
            animationDuration:2000,
            type:'carousel',

        }).mount()
    }
    ,[])
  return (
    < >
    <div className='position-sticky  main-nav-sticky' style={{backgroundColor:'rgba(0,0,0,0.3)'}} ref={main_nav}>
    <nav className="container main-nav d-flex justify-content-between align-items-center py-2 px-3" style={{color:'inherit'}}>

      <div id="logo" style={{transform:'translateY(-100%)',opacity:'0'}}>
        <img  ref={logo} src="https://www.themesindustry.com/html/rexo/images/logo-green.png" style={{height:'22px',transition:'all 1s'}} alt="" />
      </div>
      <ul className='nav-links d-flex align-items-center m-0 p-0' style={{zIndex:'100'}} ref={main_links} >
      <span className='cross ' style={{cursor:'pointer'}} onClick={()=>{
        main_links.current.style = 'height:0px;overflow:hidden;'
      }}><RxCross2/></span>
      <li style={{opacity:'0',transform:'translateY(-100%)'}} className='list-unstyled list-logo'>
      <img className=' list-logo d-md-none '  src="https://www.themesindustry.com/html/rexo/images/logo-white-green.png" alt="" />
      </li>
          <li style={{opacity:'0',transform:'translateY(-100%)'}} className='list-unstyled' >
              <a className='text-decoration-none px-2' style={{fontWeight:'600',color:'inherit',fontSize:'16px'}} href="#home" onClick={()=>window.scrollTo(0,main_nav.current.offSetTop)}>Home</a>
          </li>
          <li style={{opacity:'0',transform:'translateY(-100%)'}} className='list-unstyled' >
              <a className='text-decoration-none px-2' style={{fontWeight:'600',color:'inherit',fontSize:'16px'}} href="#feature" >Feature</a>
          </li>
          <li style={{opacity:'0',transform:'translateY(-100%)'}} className='list-unstyled' >
              <a className='text-decoration-none px-2' style={{fontWeight:'600',color:'inherit',fontSize:'16px'}} href="#about">About</a>
          </li>
          <li style={{opacity:'0',transform:'translateY(-100%)'}} className='list-unstyled' >
              <a className='text-decoration-none px-2' style={{fontWeight:'600',color:'inherit',fontSize:'16px'}} href="#contact">Contact</a>
          </li>
      </ul>
      <div className='bars'><span style={{fontSize:'25px',cursor:'pointer'}} onClick={()=>{
        main_links.current.style = 'height:100vh;'
      }} ><FaBarsStaggered/></span> </div>
    </nav>
    </div>
    <div id='#home' className="hero d-flex justify-content-center align-items-center " style={{overflow:'hidden'}} >
        <div className="glide" >
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                <li className="glide__slide">
                    <h1>We Are <span style={{color:'#07aaa5'}}>Creactive</span> Startup <br/> Located In <span style={{color:'#74a534'}}>New York</span></h1>
                    <button className='btn btn-info px-5 mt-3 rounded d-block rounded-pill m-auto '>Learn More</button>
                </li>
                <li className="glide__slide">
                    <h1>We Design Websites <br/> For <span style={{color:'#74a534'}}>Our Creative Market</span> </h1>
                    <button className='btn btn-info px-5 mt-3 rounded d-block rounded-pill m-auto '>Learn More</button>
                </li>
                <li className="glide__slide">
                    <h1>We Love Our Clients <br/>  <span style={{color:'#07aaa5'}}>Let's Talk</span> </h1>
                    <button className='btn btn-info px-5 mt-3 rounded d-block rounded-pill m-auto '>Learn More</button>
                </li>
                </ul>
            </div>
        </div>
    </div>
    <div ref={background} className='background-top-nav'></div>
    <Marquee  style={{width:'100%',height:'40px',    backgroundColor: 'rgba(0,0,0,0.5)'  }}>
    <div className='marquee'>
        <p>We specialize in developing innovative software solutions.</p>
        <p>Our team is dedicated to pushing the boundaries of technology.</p>
        <p>Explore our cutting-edge projects and services.</p>
        <p>Transform your ideas into reality with our expertise.</p>
        <p>Stay ahead in the rapidly evolving tech landscape.</p>
    </div>
    </Marquee>

    </>
  )
}

export default Header