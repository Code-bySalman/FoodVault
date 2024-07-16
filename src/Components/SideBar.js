import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = ({ links, close }) => {
  return (
    <div className="side-bar">
      {links.map(link => (
        <Link 
          className="sidebar-link" 
          to={link.path} 
          key={link.name} 
          onClick={close} // Close sidebar on link click
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
