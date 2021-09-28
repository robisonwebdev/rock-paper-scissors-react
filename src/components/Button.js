import React from 'react';
import '../styles/Button.css';

const Button = ({ className, text, type }) => {
  return (
    <button className={className} type={type}>{text}</button>
  );
}

export default Button;