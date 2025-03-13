import React, { useState } from "react";
import "../authentication/Login.css";
import { LiaEyeSlash, LiaEye } from "react-icons/lia";
import instance from "../axios/axiosinstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Password Validation Function
  const isPasswordValid = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;
    return regex.test(password);
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password strength
    if (!isPasswordValid(formData.password)) {
      toast.error("Password must be 8-15 characters and include a number & special character.");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await instance.post("/auth/signup", {
        email: formData.email,
        password: formData.password,
      });

      toast.success("Signup successful! Please log in.");
      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed. Try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="div-login">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <div className="password-eye">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-password"
          />
          {showPassword ? (
            <LiaEye className="see-password" onClick={() => setShowPassword(false)} />
          ) : (
            <LiaEyeSlash className="see-password" onClick={() => setShowPassword(true)} />
          )}
        </div>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-eye">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="input-password"
          />
          {showConfirmPassword ? (
            <LiaEye className="see-password" onClick={() => setShowConfirmPassword(false)} />
          ) : (
            <LiaEyeSlash className="see-password" onClick={() => setShowConfirmPassword(true)} />
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
