import React, { useRef, useEffect, useState } from 'react'
import MakeitSub from '../makeitsub/MakeitSub'
import './makeit.css'
import Roller from '../../assets/roller.svg'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import pageimg from '../../assets/arches.webp'
import pageimg2 from '../../assets/theme-ui.webp'
import pageimg3 from '../../assets/theme-ui-2.webp'
import video1 from '../../assets/themes.webm'
import image1 from '../../assets/autofill-2x.webp'
import image2 from '../../assets/tab-sync-2x.webp'

const Makeit = () => {

  const ref = useRef(null);
  const sectiodiv = useRef()

  const { scrollYProgress } = useScroll()

  const yImage = useTransform(scrollYProgress, [0.5, 1], [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const yNextDiv = useTransform(scrollYProgress, [0.5, 1], [200, 0]);
  const clipPath = useTransform(scrollYProgress, [0.5, 1], ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]);
  const ydiv = useTransform(scrollYProgress, [0.5, 1], ["inset(0% 0% 100% 0%)", "inset(0% 0% 100% 0%)"])

  const content = [
    { type: 'video', src: video1 },
    { type: 'image', src: image2 },
    { type: 'image', src: image1 },
    
  ];

  const headlines = [
    { title: 'Customize your chrome', content: 'Personalise your web browser with themes, dark mode and other options built just for you.' },
    { title: 'Browse across devices', content: 'Sign in to Chrome on any device to access your bookmarks, saved passwords and more.' },
    { title: 'Save time with autofill', content: 'Use Chrome to save addresses, passwords and more to quickly autofill your details.' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      setExpandedIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);



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
            width: 900,
            height: 700,
          }}
        >
          <motion.img src={pageimg}
            alt='pageimg'

            className='content-image'
            style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
              scale: scale
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
              objectFit: 'cover'
            }}
          />
        </motion.div>
      </motion.div>
      <div className='random-div' >
        <div className='video-content'>
          <AnimatePresence mode='wait'>
            {content.map((item, index) => (
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="media-content"
                >
                  {item.type === 'image' && <img src={item.src} alt={`content-${index}`} style={{ width: '600px', height: '600px' }} />}
                  {item.type === 'video' && <video src={item.src} autoPlay loop style={{ width: '600px', height: '600px' }} />}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        <div className='text-content-wrapper' >
          {headlines.map((headline, index) => (
            <motion.div
              key={index}
              className="headline"
              initial={false}
              animate={{ height: expandedIndex === index ? 'auto' : 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2>{headline.title}</h2>
              {expandedIndex === index && (
                <motion.div className="headline-content"
                transition={{
                  ease:'easeOut',
                  duration:1
                }}>
                  <p>{headline.content}</p>
                </motion.div>
              )}

            </motion.div>
          ))}
          <div className='makeit-button'>
            <span>
              <a>Sign in to get started</a>
            </span>
          </div>
        </div>
      </div>
      <MakeitSub />
    </section>
  )
}

export default Makeit