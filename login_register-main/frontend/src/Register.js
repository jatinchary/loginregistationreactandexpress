// Register.js

import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
  const [organizationType, setOrganizationType] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [panCard, setPanCard] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        Select_your_organization_type: organizationType,
        Name_of_your_organization: organizationName,
        PAN_Card: panCard,
        Email_ID: email,
        Phone_number: phone,
        Password: password,
        Confirm_Password: confirmPassword,
      });

      console.log(response); // Handle the response accordingly, e.g., display a success message, redirect, etc.
    } catch (error) {
      console.error('Error during registration:', error.response.data);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className='colour'>
      <div className="Tab">
        <h2>Register</h2>
        <div className="input-container">
          <label className="input-label">
            Select your organization type:
            <select
              className="input-field"
              value={organizationType}
              onChange={(e) => setOrganizationType(e.target.value)}
            >
              <option value="">------------------Select---------------------</option>
              <option value="corporate">Corporate</option>
              <option value="non-profit">Non-Profit</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label className="input-label">
            Name of your organization:
            <input
              className="input-field"
              type="text"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
            />
          </label>
          <label className="input-label">
            PAN Card:
            <input
              className="input-field"
              type="text"
              value={panCard}
              onChange={(e) => setPanCard(e.target.value)}
            />
          </label>
          <label className="input-label">
            Email ID:
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="input-label">
            Phone number:
            <input
              className="input-field"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="input-label">
            Password:
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="input-label">
            Confirm Password:
            <input
              className="input-field"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button className="input-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};


export default Register;
