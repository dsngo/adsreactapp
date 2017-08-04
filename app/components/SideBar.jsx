import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  a {
    display: flex;
  }
  a:hover {
    margin-left: 10px;
  }
`;
const SideBar = () =>
  <Wrapper>
    <Link to="/dashboard">dashboard</Link>
    <Link to="/video">video</Link>
    <Link to="/package">package</Link>
    <Link to="/groups">groups</Link>
    <Link to="/report">report</Link>
    <Link to="/setting">setting</Link>
  </Wrapper>;

export default SideBar;
