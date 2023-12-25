import React, { useEffect } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import './Feature.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Feature = () => {
  useEffect(()=>{
    gsap.to('.feature-heading-1,.feature-heading-2,.feature-heading-3,.feature-box',{
      y:'0%',
      opacity:1,
      duration:0.5,
      stagger:0.1,
      scrollTrigger:{
        start:'top 90%',
        trigger:'.feature-heading-1',
        scroller:'body'
      }


    })
    gsap.to('.feature-bg',{
      filter:'blur(0px)',
      scrollTrigger:{
        scroller:'body',
        trigger:'.feature-bg',
        start:'bottom 90%',
        scrub:2
      }
    })

  },[])
  return (
    <div  id='feature' >
    <h5 className="feature-heading-1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsum!</h5>
    <h1 className='feature-heading-2'>Rexo’s <span style={{color:'#07aaa5'}}>Awesome</span> Features</h1>
    <h5 className='feature-heading-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi enim,
     vulputate at justo tristique, tempor sagittis dolor. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus.</h5>
    <div className='container'>
    <div className='row  row-cols-1 row-cols-md-3 mt-5'>
        <div className='d-flex flex-column gap-2 my-2 feature-box ' style={{opacity:'0'}}>
              <div className="feature-box-img d-flex justify-content-center align-items-center m-auto bg-info text-light " style={{width:'100px',height:'100px' ,borderRadius:'50%' }}>
                  <IoDocumentTextOutline style={{margin:'auto',display:'block',fontSize:'50px'}}/>
              </div>
              <h6 style={{fontSize:'12px',color:'#07aaa5',textAlign:'center'}}>Financial Advise</h6>
              <h4 style={{fontSize:'16px',textAlign:'center'}}>Market Statics Growth <br/> & Advance Analysis</h4>
        </div>
        <div className='d-flex flex-column gap-2 my-2 feature-box' style={{opacity:'0'}}>
              <div className="feature-box-img d-flex justify-content-center align-items-center m-auto bg-danger text-light  " style={{width:'100px',height:'100px' ,borderRadius:'50%' }}>
                  <BsGraphUpArrow style={{margin:'auto',display:'block',fontSize:'50px'}}/>
              </div>
              <h6 style={{fontSize:'12px',color:'#07aaa5',textAlign:'center'}}>Market Analysis</h6>
              <h4 style={{fontSize:'16px',textAlign:'center'}}>Market Statics Growth <br/> & Advance Analysis</h4>
        </div>
        <div className='d-flex flex-column gap-2 my-2 feature-box' style={{opacity:'0'}}>
              <div className="feature-box-img d-flex justify-content-center align-items-center m-auto bg-info text-light " style={{width:'100px',height:'100px' ,borderRadius:'50%' }}>
                  <IoDiamondOutline style={{margin:'auto',display:'block',fontSize:'50px'}}/>
              </div>
              <h6 style={{fontSize:'12px',color:'#07aaa5',textAlign:'center'}}>Web Solution</h6>
              <h4 style={{fontSize:'16px',textAlign:'center'}}>Market Statics Growth <br/> & Advance Analysis</h4>
        </div>
    </div>
    </div>
    <div className="feature-hero d-flex justify-content-center align-items-center flex-column my-3" >
    <h1 style={{fontSize:'30px',fontWeight:'300',color:'white',textAlign:'center'}}>Looking for Exclusive Digital Services?</h1>
    <button className='btn btn-light rounded rounded-pill px-4 d-block'>Let's Talk</button>
    <div className="feature-bg"></div>
    </div>
    </div>
  )
}

export default Feature