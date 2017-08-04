import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () =>
  <div className="sidenav">
    <ul>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/video">video</Link>
      <Link to="/package">package</Link>
      <Link to="/groups">groups</Link>
      <Link to="/report">report</Link>
      <Link to="/setting">setting</Link>
    </ul>
  </div>;

export default SideBar;
