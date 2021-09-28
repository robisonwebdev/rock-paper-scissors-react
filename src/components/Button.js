import React from 'react';
import '../styles/Button.css';

const Button = ({ text, type }) => {
  return (
    <button type={type}>{text}</button>
  );
}

export default Button;