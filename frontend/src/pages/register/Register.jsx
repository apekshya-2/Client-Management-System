import axios from "axios";
import "./register.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



const SignUp = () => {
  const [formValues, setFormValues] = useState({
    username: "",
  email: "",
  mobile: "",
  password: "",
  userType: "user",
  secretkey:""
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Username is required";
  } else if (!/^[A-Za-z0-9_]{3,15}$/.test(formValues.username)) {
    errors.username =
      "Username should be 3-15 characters long and can only contain letters, numbers, and underscores.";
  }

  if (!formValues.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formValues.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^\d{10}$/.test(formValues.mobile)) {
    errors.mobile = "Mobile number should be 10 digits";
  }

  if (!formValues.password) {
    errors.password = "Password is required";
  }

  if (formValues.userType === "admin") {
    if (!formValues.secretkey) {
      errors.secretkey = "Secret key is required for admin";
    } else if (formValues.secretkey !== "apeksha") {
      errors.secretkey = "Invalid admin secret key";
    }
  }

  return errors;
};



  const handleSubmit = async (e) => {
  e.preventDefault();

  const errors = validateForm();
  setFormErrors(errors);

  if (Object.keys(errors).length !== 0) return;

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register-user",
      formValues
    );

    if (response.data.success) {
      toast.success(response.data.message || "Registration successful!");
      setFormValues({
        username: "",
        email: "",
        mobile: "",
        password: "",
        userType: "user",
        secretkey: "",
      });
    } else {
      toast.error(response.data.message || "Registration failed!");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };
  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Type</label>
          <div className="radio-div">
            <label className="radio-label">
              <input type="radio" name="userType" value="user"
              checked={formValues.userType === 'user'}
              onChange={handleInputChange}
              /> Client
            </label>
            <label className="radio-label">
              <input type="radio" name="userType" value="admin"
               checked={formValues.userType === 'admin'}
              onChange={handleInputChange}
              /> Admin
            </label>
          </div>
        </div>

        {formValues.userType === "admin" && (
  <div className="form-group">
    <label>Secret Key (Admin Only)</label>
    <input
      type="text"
      name="secretkey"
      placeholder="Enter Admin Secret Key"
      value={formValues.secretkey}
      onChange={handleInputChange}
    />
    {formErrors.secretkey && (
      <span className="error-message">{formErrors.secretkey}</span>
    )}
  </div>
)}

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
           
          />
         {formErrors.username?<span className="error-message">{formErrors.username}</span>:''} 
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          {formErrors.email?<span className="error-message">{formErrors.email}</span>:''} 
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formValues.mobile}
            onChange={handleInputChange}
          />
          {formErrors.mobile?<span className="error-message">{formErrors.mobile}</span>:''} 
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          {formErrors.password?<span className="error-message">{formErrors.password}</span>:''} 
        </div>
        <button type="submit" className="login-btn">
          Sign Up
        </button>
      </form>
      <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          className="toggle-link"
          style={{ color: "#007BFF", textDecoration: "underline" }}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
