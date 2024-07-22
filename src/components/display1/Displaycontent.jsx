import React,{ useRef, useEffect, useState } from 'react'
import './display1.css'
import {  motion, useScroll, useTransform } from 'framer-motion'
import picture1 from '../../assets/chrome-gallery-1-2x.webp'
import picture2 from '../../assets/chrome-gallery-2-2x.webp'
import picture3 from '../../assets/chrome-gallery-3-2x.webp'
import picture4 from '../../assets/chrome-gallery-4-2x.webp'
import picture5 from '../../assets/chrome-gallery-5-2x.webp'
import chromelogo from '../../assets/chrome-logo.svg'

const Displaycontent = () => {
  
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center center"],
  });

  

  const rightX = useTransform(scrollYProgress,[0,1],[0,-100]);

  const scaleX = useTransform(scrollYProgress,[0,1],[1,0.7]);
  const scaleY = useTransform(scrollYProgress,[0,1],[1,0.7]);


  const x1 = useTransform(scrollYProgress, [0, 1], [-550, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [700,0]);
  const x3 = useTransform(scrollYProgress,[0,1],[-750,-800]);
  const y3 = useTransform(scrollYProgress,[0,1],[100,0]);
  const y4 = useTransform(scrollYProgress,[0,1],[-100,0]);
  const x4 = useTransform(scrollYProgress,[0,1],[-700,-950]);
  const x5 = useTransform(scrollYProgress,[0,1],[0,-1100]);
  
  return (
    <section className='display-wrapper'  >
      <div className='display-content'>
        <div className='all-wrapper' >
          <img src={chromelogo} />
        </div>
        <h6>
          The browser
        </h6>
        <h6>built to be yours</h6>
        <div className='bar-wrapper'>
          <div className='list-bar' >
            <ul className='listwrapper'>
              <li><p className='listanchor'>Updates</p></li>
              <li><p className='listanchor'>Yours</p></li>
              <li><p className='listanchor'>Safe</p></li>
              <li><p className='listanchor'>Fast</p></li>
              <li><p className='listanchor'>By Google</p></li>
            </ul>
          </div>
        </div>
      </div>
      
      <motion.div 
        className='animae-content' 
        ref={ref}
        style={{
          x:rightX
        }}
      >
      
      <motion.div
      className="animated-section"
      ref={ref}
      
    >
      <motion.img
        src={picture1}
        alt="Initial"
        className="initial-image"  
        style={{
          x: x1,
          y: 0,
          width:900,
          height: 500,
          opacity:1,
          scaleX:scaleX,
          scaleY:scaleY,
        }}
        transition={{
          ease:'easeInOut',
          delay:1.5
        }}         
      />
      <motion.img
        src={picture2}
        alt="Animated"
        className="animated-image"
        style={{
          width:300,
          height: 500,
          x: -650,
          y:y2,   
          opacity:scrollYProgress,
          scaleX:scaleX,
          scaleY:scaleY,
        }}
        transition={{
          ease:'easeInOut',
          delay:1.5
        }}  
            
      />
      <motion.img
        src={picture3}
        alt="Animated"
        className="initial-image" 
        style={{
          x: x3,
          y: y3,
          width:900,
          height: 500,
          scaleX:scaleX,
          scaleY:scaleY,
        }}
        transition={{
          ease:'easeInOut',
          delay:1.5
        }}  
      />
      <motion.img
        src={picture4}
        alt="Animated"
        className="initial-image"
        style={{
          x: x4,
          y: y4,
          width:350,
          borderWidth:1,
          borderColor:'black',
          height:500,
          scaleX:scaleX,
          scaleY:scaleY,
        }}
        transition={{
          ease:'easeInOut',
          delay:1.5
        }}  
      />
      <motion.img
        src={picture5}
        alt="Animated"
        className="animated-image"
        style={{
          x:x5,
          y:0,
          width:900,
          height:500,
          opacity:scrollYProgress,
          scaleX:scaleX,
          scaleY:scaleY,      
        }}
        transition={{
          ease:'easeInOut',
          delay:1.5
        }}  
      />
    </motion.div>
      </motion.div>
    </section>
  )
}

export default Displaycontent