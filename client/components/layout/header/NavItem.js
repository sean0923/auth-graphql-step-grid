import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, link }) => {
  return (
    <div>
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default Button;
