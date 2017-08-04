import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';

const Wrapper = styled.div`margin-left: 250px;`;
const Landing = () =>
  <div>
    <SideBar />
    <Wrapper>
      <h1>Landing</h1>
      <input type="text" placeholder="search" />
    </Wrapper>
  </div>;

export default Landing;
