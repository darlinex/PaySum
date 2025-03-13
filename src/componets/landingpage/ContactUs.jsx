import React from 'react'
import '../landingpage/Contact.css'

// import Frame11 from '../../assets/Frame 1171275590.png'
import Phone from '../../assets/Frame-phone.png'
import Mail from '../../assets/Frame-mail.png'
import Contact_img from "../../assets/Contact_img.png"

const ContactUs = () => {
  return (
    <div> 

      <div className='contact_contain'>
            
            <div className='contact_text'>
          
          <h3>WANT TO KNOW MORE?</h3>

          <h2>Contact Us</h2>

          <p>Do you have any questions or in need of assistance? Reach out to our <br />
              committed support team. We value your feedback and inquiry. We are just <br />
               an email or call away, let's hear from you.</p>
 
       <span className='contact_1'>
        <img src={Phone} alt="" className='phone_img' />
        <h4>Phone</h4>
        <p className='con'>+234 808 516 7132</p>
       
       </span> 

       
       <span className='contact_2'>
        <img src={Mail} alt="" className='phone_img' />
        <h4>Mail</h4>
        <p className='con1'>info@paysum.com</p>
       
       </span> 
            </div>



            <div className='contact_pic'>
              <img src={Contact_img} alt=""  className='cont_pic'/>
            </div>





      </div>


    </div>
  )
}

export default ContactUs