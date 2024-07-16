import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const SignUpModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    mobileNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Sign Up"
    >
      <Form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Create Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn">Sign Up</button>
      </Form>
    </Modal>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
    padding: '10px', 
    borderRadius: '10px', 
  },
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    margin-bottom: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  input {
    padding: 0.7rem;
    margin-top: 0.5rem;
  }
  button {
    padding: 0.75rem;
    background-color: #ff7f11;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem; // Add some space above the button
    width: 100%; // Make the button wide
    &:hover {
      background-color: #beb7a4;
    }
  }
`;

export default SignUpModal;

