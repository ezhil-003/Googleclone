import React,{ useRef, useEffect, useState } from 'react'
import './display1.css'
import {  motion, useScroll, useTransform } from 'framer-motion'
import picture1 from '../../assets/chrome-gallery-1-2x.webp'
import picture2 from '../../assets/chrome-gallery-2-2x.webp'
import picture3 from '../../assets/chrome-gallery-3-2x.webp'
import picture4 from '../../assets/chrome-gallery-4-2x.webp'
import picture5 from '../../assets/chrome-gallery-5-2x.webp'

const Displaycontent = () => {
  
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center center"],
  });

  

  // const rightX = useTransform(scrollYProgress,[0,1],[0,-500]);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M34,24c0,5.521-4.479,10-10,10s-10-4.479-10-10s4.479-10,10-10S34,18.479,34,24z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1"
              x1="5.789"
              x2="31.324"
              y1="34.356"
              y2="20.779"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4caf50"></stop>
              <stop offset=".489" stopColor="#4aaf50"></stop>
              <stop offset=".665" stopColor="#43ad50"></stop>
              <stop offset=".79" stopColor="#38aa50"></stop>
              <stop offset=".892" stopColor="#27a550"></stop>
              <stop offset=".978" stopColor="#11a050"></stop>
              <stop offset="1" stopColor="#0a9e50"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1)"
              d="M31.33,29.21l-8.16,14.77C12.51,43.55,4,34.76,4,24C4,12.96,12.96,4,24,4v11 c-4.97,0-9,4.03-9,9s4.03,9,9,9C27.03,33,29.7,31.51,31.33,29.21z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2"
              x1="33.58"
              x2="33.58"
              y1="6"
              y2="34.797"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffd747"></stop>
              <stop offset=".482" stopColor="#ffd645"></stop>
              <stop offset=".655" stopColor="#fed43e"></stop>
              <stop offset=".779" stopColor="#fccf33"></stop>
              <stop offset=".879" stopColor="#fac922"></stop>
              <stop offset=".964" stopColor="#f7c10c"></stop>
              <stop offset="1" stopColor="#f5bc00"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2)"
              d="M44,24c0,11.05-8.95,20-20,20h-0.84l8.17-14.79C32.38,27.74,33,25.94,33,24 c0-4.97-4.03-9-9-9V4c7.81,0,14.55,4.48,17.85,11C43.21,17.71,44,20.76,44,24z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3"
              x1="36.128"
              x2="11.574"
              y1="44.297"
              y2="28.954"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f7572f"></stop>
              <stop offset=".523" stopColor="#f7552d"></stop>
              <stop offset=".712" stopColor="#f75026"></stop>
              <stop offset=".846" stopColor="#f7461b"></stop>
              <stop offset=".954" stopColor="#f7390a"></stop>
              <stop offset="1" stopColor="#f73100"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3)"
              d="M41.84,15H24c-4.97,0-9,4.03-9,9c0,1.49,0.36,2.89,1.01,4.13H16L7.16,13.26H7.14 C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4"
              x1="19.05"
              x2="28.95"
              y1="30.95"
              y2="21.05"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2aa4f4"></stop>
              <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4)"
              d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"
            ></path>
          </svg>
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
        // style={{
        //   x:rightX
        // }}
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