import React from 'react'
import "./contact.css"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/insta.svg"
import facebook from "../../assets/facebook.svg"
const Contact = () => {
  return (
    <>
      <div className='contactWrapper'>
      <div className='contactContainer'>
        <h2 className='title'>REACH US AT</h2>

          <div className='supportContent'>

        <div>
          <p className='supportEmail'>support@kicksup.com</p>
          <span className='supportPara'>for any technical support</span>
        </div>
        <div>
          <p className='supportEmail'>info@kicksup.com</p>
          <span className='supportPara'>to more information</span>
        </div>
        <div>
          <p className='supportEmail'>feedback@kicksup.com</p>
          <span className='supportPara'>to send your feedback</span>
        </div>
        <div>
          <p className='supportEmail'>job@kicksup.com</p>
          <span className='supportPara'>to work with us</span>
          </div>
          </div>
          
        </div> 
        
        <div className='socialContainer'>
          <span className='stayinTouch'>stay in touch</span>
          <div className='socialIconsWrapper'>
            <img src={twitter} alt="" className='socialImg'/>
            <img src={instagram} alt="" className='socialImg'/>
            <img src={facebook} alt="" className='socialImg'/>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Contact
