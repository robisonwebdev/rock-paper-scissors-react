import React from 'react';

const Footer = ({ address, name, text}) => {
  return (
    <footer>
      <small>{text}<a href={address} rel='noreferrer' target='_blank'>{name}</a></small>
    </footer>
  );
}

export default Footer;