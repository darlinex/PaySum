// work here 
import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import '../Layout/Footer.css'


// import '../../Componets/Footer.css'
import { BsTelephone } from "react-icons/bs";
import Logos from '../../assets/Footer_logo.png'
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">

            {/* Footer Section */}
            <div className="footer-div">
                    <div className="address">
                    <img src={Logos} alt="" className="foot-logo" />

                    <div className="footer-address">
                        <p > Kilometer 12, Success City, Off <br />Consistency Avenue, Enugu, Enugu <br />State, Nigeria.</p>
                        
                       <div className="call">
                       <BsTelephone className="phone"/>
                       <p>+234 808 516 7132</p>
                       </div>
                       <div className="email">
                       <MdOutlineMailOutline  className="email"/>
                       <p>info@paysum.com</p>
                       </div>
                      </div>
                    
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <p>Quick Links</p>
                        <ol className="ol-links-footer">
                            <li>Home</li>
                            <li>Pathways</li>
                            <li>Testimonies</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ol>
                    </div>

                    <div className="legal-notice">
                        <p className="p-legal-notice">Legal Notices </p>
                        <p className="legal-notice-p">Terms of service</p>
                        <p className="legal-notice-p">privacy policy</p>
                    </div>

                    {/* Social Media */}
                    <div className="footer-social">
                        <p>Follow Us</p>
                        <div className="social-icons">
                            < FiFacebook className="icon"/>
                            <CiInstagram className="icon"/>
                            <BsTwitterX  className="icon"/>
                            <FaLinkedin className="icon"/>
                        </div>
                    </div>
                

            </div>
             <div className="bellow-footer">

                <p className="footer-copy">© 2025 Paysum. All Rights Reserved.</p>
             </div>
    </footer>
  )
}

export default Footer