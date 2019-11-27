import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaRegCalendarPlus, FaTable, FaUsers } from 'react-icons/fa';


export const Menu = () => (
  <nav className="menu">
    
    <Link to="/" activeclassname="selected">
      <FaHome />
    </Link>
    <Link to="/add-day" activeclassname="selected">
      <FaRegCalendarPlus />
    </Link>
    <Link to="/list-days" activeclassname="selected">
      <FaTable />
    </Link>
    <Link to="/members" activeclassname="selected">
      <FaUsers />
    </Link>

  </nav>
)