import './logo.css';
import React from 'react';

function Logo() {
  return (
    <div className="Logo">
      <div className='box_logo'>
        <img className='login_logo' src={require('../../icons/logo-white.png')} alt="Logo"></img>
      </div>
    </div>
  );
}

export default Logo;
