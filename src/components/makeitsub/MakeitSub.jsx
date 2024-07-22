import React,{ useRef, useref } from 'react'
import './makeitsub.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import pageimg from '../../assets/theme-ui-2.webp'
import paint from '../../assets/paint.png'
import puzzle from '../../assets/puzzle.png'
import person from '../../assets/person.png'
import extension from '../../assets/extensions.png'
import video from '../../assets/video.png'

const MakeitSub = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset: ["start center", "center end"],
    });
    const x1 = useTransform(scrollYProgress, [0, 1], [100,0]);
    const y1 =  useTransform(scrollYProgress, [0, 1], [-100,0]);
    const x2 =  useTransform(scrollYProgress, [0, 1], [-100,0]);
    const y2 =  useTransform(scrollYProgress, [0, 1], [-200,0]);
    const x3 =  useTransform(scrollYProgress, [0, 1], [200,0]);
    const y3 =  useTransform(scrollYProgress, [0, 1], [-50,0]);
    const x4 =  useTransform(scrollYProgress, [0, 1], [-100,0]);
    const y4 =  useTransform(scrollYProgress, [0, 1], [100,0]);
    const x5 =  useTransform(scrollYProgress, [0, 1], [200,0]);
    const y5 =  useTransform(scrollYProgress, [0, 1], [150,0]);

    

  return (
    <div className='makeit-sub-wrapper'>
        <div className='makeit-sub-left'>
            <h2>Extend your</h2>
            <h2>experience</h2>
            <p>From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store.</p>
            <div className='makeit-sub-left-anchor'>
            <a>Explore extensions</a>
            </div>   
        </div>
        <div className='makeit-sub-right'>
            <motion.div 
            className='makeit-img-wrapper'
            ref={ref}
            >
                <img src={pageimg} alt='themeUI image' />
                <motion.div className='image-wrapper1'
                style={{
                 x:x1,
                 y:y1,
                 opacity:scrollYProgress
                }}
                transition={{
                    ease:'easeInOut',
                    duration:2
                }}
                >
                    <motion.img src={puzzle} alt="puzzle" />
                </motion.div>
                <motion.div className='image-wrapper2'
                style={{
                    x:x2,
                    y:y2,
                    opacity:scrollYProgress
                }}
                transition={{
                    ease:'easeInOut',
                    duration:2
                }}
                >
                    <motion.img src={extension} alt="extension" />
                </motion.div>
                <motion.div className='image-wrapper3'
                style={{
                    x:x3,
                    y:y3,
                    opacity:scrollYProgress
                }}
                transition={{
                    ease:'easeInOut',
                    duration:2
                }}
                >
                    <motion.img src={video} alt="video" />
                </motion.div>
                <motion.div className='image-wrapper4'
                style={{
                    x:x4,
                    y:y4,
                    opacity:scrollYProgress
                }}
                transition={{
                    ease:'easeInOut',
                    duration:2
                }}
                >
                    <motion.img src={person} alt="person" />
                </motion.div>
                <motion.div className='image-wrapper5'
                style={{
                    x:x5,
                    y:y5,
                    opacity:scrollYProgress
                }}
                transition={{
                    ease:'easeInOut',
                    duration:2
                }}
                >
                    <motion.img src={paint} alt="paint" />
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default MakeitSub