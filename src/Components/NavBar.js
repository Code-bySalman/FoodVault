import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar';
import Icon1 from '../assets/side-menu.jpg';
import Icon2 from '../assets/multiply.jpg';
import { faHome, faList, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignUpModal from './SignUpModal';

export default function NavBar() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };
  
  const [currentIcon, setCurrentIcon] = useState(Icon1);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsIconVisible(false);
    setTimeout(() => {
      setCurrentIcon(prevIcon => (prevIcon === Icon1 ? Icon2 : Icon1));
      setIsIconVisible(true);
    }, 50);
  };

  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/explore",
      icon: faList
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: faPhone
    }
  ];

  function closeSideBar() {
    setIsSidebarOpen(false); 
  }

  return (
    <>
      <div className="navbar">
        <Link to="/" className="brand">Flavour<span className='sss'>Vault</span></Link>
        <div className="nav-links">
          <button className="btn" onClick={openSignUpModal}>Sign Up</button> 
          <SignUpModal isOpen={isSignUpModalOpen} onRequestClose={closeSignUpModal} />
          {links.map(link => (
            <Link to={link.path} key={link.name} className="nav-link">
              <FontAwesomeIcon icon={link.icon} style={{ marginRight: '8px' }} />
              {link.name}
            </Link>
          ))}
        </div>
        <div className="nav-item">
          <button onClick={handleClick} className="icon-button">
            {isIconVisible ? (
              <img
                src={currentIcon}
                alt="Toggle Icon"
                className="icon-image fade-in"
              />
            ) : (
              <img
                src={currentIcon}
                alt="Toggle Icon"
                className="icon-image fade-out"
              />
            )}
          </button>
        </div>
      </div>
      {isSidebarOpen && <SideBar close={closeSideBar} links={links} />} 
    </>
  );
}
