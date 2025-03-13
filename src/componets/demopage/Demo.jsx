import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../demopage/Demo.css';
import Ent from '../../assets/Entreprenuer.png';


const Demo = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    companyRole: '',
    employeeHeadcount: '',
    contactPreference: '', // 'phone' or 'email'
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle radio button change
  const handleRadioChange = (e) => {
    setFormData({ ...formData, contactPreference: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.workEmail ||
      !formData.phoneNumber ||
      !formData.companyName ||
      !formData.companyRole ||
      !formData.employeeHeadcount ||
      !formData.contactPreference
    ) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      // Make API request
      const response = await axios.post(
        'https://payrum-1.onrender.com/api/auth/signup',
        formData
      );

      // Handle success
      if (response.status === 200 || response.status === 201) {
        toast.success('Form submitted successfully!');
        setTimeout(() => {
          navigate('/thanks'); // Redirect to success page
        }, 2000); // Wait 2 seconds before redirecting
      }
    } catch (error) {
      // Handle error
      toast.error('An error occurred. Please try again.');
      console.error('API Error:', error);
    }
  };

  return (
    <div className="demo_container">
      <ToastContainer /> {/* For displaying toasts */}
      <h1 className="demo_intro">Choose the convenience of automation</h1>
      <p className="demo_intro2">
        See why SMEs rely and trust us to handle their payroll calculation, employee management,
        <br />
        and payslip generation. Switch to an automated and convenient lane.
      </p>

      <div className="demo_cont">
        <div className="pic_cont">
          <img src={Ent} alt="Entrepreneur" className="entre" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form_cont">
            <div className="form1">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />

              <label>Work Email</label>
              <input
                type="email"
                name="workEmail"
                placeholder="Enter email address"
                value={formData.workEmail}
                onChange={handleInputChange}
              />

              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={handleInputChange}
              />

              <label>Employee Headcount</label>
              <input
                type="number"
                name="employeeHeadcount"
                placeholder="Employee Size"
                value={formData.employeeHeadcount}
                onChange={handleInputChange}
              />
            </div>

            <div className="form2">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />

              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />

              <label>Company Role</label>
              <input
                type="text"
                name="companyRole"
                placeholder="Enter role in company"
                value={formData.companyRole}
                onChange={handleInputChange}
              />

              <div className="radio-group">
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="phone"
                    checked={formData.contactPreference === 'phone'}
                    onChange={handleRadioChange}
                  />
                  <span></span> Phone number
                </label>
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="email"
                    checked={formData.contactPreference === 'email'}
                    onChange={handleRadioChange}
                  />
                  <span></span> Email
                </label>
              </div>
            </div>
          </div>

          <p className="terms">
            By submitting this form, you consent to the terms and conditions <br />
            stated with our privacy policy.
          </p>

          <button type="submit" className="demo_btn2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Demo;