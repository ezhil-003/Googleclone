import React from 'react'
import './update.css'
import Update from '../../assets/update.svg'
import updatetab from '../../assets/updates-2x.png'
import chromelogo from '../../assets/chromelogo.svg'

const Updates = () => {
  return (
    <section className='update-wrapper' >
      <div className='update-heading' >
        <h1 >Discover the latest</h1>
        <div className='secondcomp'>
          <span className='upadatehighlight'>
            <img src={Update} alt='updatelogo' />
            <h2>updates</h2>
          </span>
          <h1>from Chrome</h1>
        </div>
      </div>
      <div className='update-content' >
        <div className='update-content-left' >
          <div className='update-content-left-top' >
            <h5>UPDATE</h5>
            <h1>Automatic updates</h1>
            <p>
              There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.
            </p>
            <a>Learn about automatic updates</a>
          </div>
          <img src={updatetab} />
        </div>
        <div className='update-content-right' >
          <div className='update-content-right-top'>
            <h5>LATEST</h5>
            <h1>New from Chrome</h1>
            <p>
              Chrome regularly updates with tools and features that make it faster and easier to use.
            </p>
            <a>
              Learn what’s new on Chrome
            </a>
          </div>
          <div className='update-content-right-bottom'>
            <img src={chromelogo} />
          </div>   
        </div>
      </div>
    </section>
  )
}

export default Updates