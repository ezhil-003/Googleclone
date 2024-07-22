import React,{ useRef } from 'react'
import './makeit.css'
import Roller from '../../assets/roller.svg'
import { motion, useScroll, useTransform } from 'framer-motion'
import pageimg from '../../assets/arches.webp'
import pageimg2 from '../../assets/theme-ui.webp'
import pageimg3 from '../../assets/theme-ui-2.webp'

const Makeit = () => {
  const ref = useRef(null);
  const sectiodiv = useRef()
  
  const { scrollYProgress } = useScroll({ target: ref })

  const yImage = useTransform(scrollYProgress, [0.5, 1], [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const yNextDiv = useTransform(scrollYProgress, [0.5, 1], [200, 0]);
  const clipPath = useTransform(scrollYProgress, [0.5, 1], ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]);
  const ydiv = useTransform(scrollYProgress,[0.5,1],["inset(0% 0% 100% 0%)", "inset(0% 0% 100% 0%)"])
  const textscale = useTransform(scrollYProgress,[1,0],[-0.1,1]);
  const opacity = useTransform(scrollYProgress,[0,1],[1,0]);
  const texty = useTransform(scrollYProgress,[0,1],[100,100]);

  const opacity2 = useTransform(scrollYProgress,[0,1],[0,1])
  

  return (
    <section className='makeit-section'  >
        <motion.div className='makeit-title'
         style={{
          
         }}
         >
          <div className='makeit-line1'>
            <h1>Make it</h1>
              <span className='makeithighlight'>
                <img src={Roller} alt='makeitlogo' />
                <h2>yours</h2>
              </span>
            <h1>and take </h1>
          </div>         
          <div className='makeit-line2'> 
            <h1>it with you</h1>
          </div>
        </motion.div>
        <motion.div className='content-viewer'>
          <motion.div className='content-viewer-text1'
          style={{
            scale,
            clipPath,
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            y: yImage,
            width:900,
            height:700,
          }}
          >
            <motion.img src={pageimg}
              alt='pageimg'
              
              className='content-image'
                style={{
                  width: '100%',
                  height: '100vh',
                  objectFit: 'cover',
                  scale:scale
                }}   
             />
          </motion.div>
          <motion.div className='content-viewer-text2' 
          style={{
            y: yNextDiv,
            position: 'relative',            
          }}>
            <motion.img 
            src={pageimg2}
            style={{
              width: '100%',
              height: 'auto'
            }}
            />
          </motion.div>
          <motion.div className='content-viewer-text3'
            style={{
              ydiv,
              position: 'relative',
            }}
           >
            <motion.img
            src={pageimg3}
            style={{
              width: '100%',
              height: 'auto',
              objectFit:'cover'
            }}
             />
          </motion.div>
        </motion.div>
        <div className='random-div' >
            
        </div>
    </section>
  )
}

export default Makeit