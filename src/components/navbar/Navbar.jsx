import React, { useState } from 'react';
import './navbar.css';
import logo1 from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.png';
import AddScorePopup from '../addpopup/AddScorePopup';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const handleButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <img src={logo2} alt="Logo 2" />
        <div className='nav-btn'>
          <button onClick={handleButtonClick}>Add User</button>
          <img src={logo1} alt="Logo 1" />
        </div>
      </nav>

      <div className="nav-header">
        <div className="line-group">
          <span className="line1"></span>
          <span className="line1"></span>
          <span className="line1"></span>
        </div>
        <h1 className="title">FASTEST OF TODAY</h1>
        <div className="line-group">
          <span className="line2"></span>
          <span className="line2"></span>
          <span className="line2"></span>
        </div>
      </div>

      {isPopupOpen && <AddScorePopup closePopup={closePopup} />}
    </div>
  );
};

export default Navbar;
