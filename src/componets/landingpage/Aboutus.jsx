import React from "react";
import dashboard from '../../assets/Group1.png'
import vector from '../../assets/Vector1.png'
import '../landingpage/Aboutus.css'
function AboutUs(){

    return(
        <div className="about-us-container">
            <div className="about-us-dashboards">
                <img src={dashboard} alt="" className="dashboard-images" />
                <img src={vector} alt="" className="vector-lines"/>
            </div>

            <div className="about-us-text">
                <p className="about-us-p">About us</p>

                <h2>WHO WE ARE</h2>

                <p className="who-we-are-p">We make payroll management convenient. Our platform automates <br /> salary payment calculations, tax filings, and compliance—so you can <br /> focus on building, not bureaucracy.</p>

                <p className="who-we-are-p">
                We also keep record of employee details, payroll history and <br /> Whether you're paying employees, contractors, or a hybrid team, we  <br />ensure the payroll fits seamlessly into your business workflow.</p>
            </div>
           
        </div>


    )
}

export default AboutUs