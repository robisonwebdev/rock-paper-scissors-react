import React from 'react';
import '../styles/Button.css';

const Button = ({ className, onClick, text, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>{text}</button>
  );
}

export default Button;