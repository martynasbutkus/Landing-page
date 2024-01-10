import React from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  const slideAnimation = keyframes`
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  `;
  
  const StyledHeader = styled.header`
    display: flex;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #05355C;
    animation: ${slideAnimation} 2s ease-in-out;
    overflow: hidden; 
    z-index: 1000;
  `;

  const Button = styled.button`
    background: #2388CE;
    color: white;
    border: none;
    height: 30px;
    padding: 0px 10px;
    border-radius: 5px;
    margin-top: 15px;
    width: 100px;
  `;

  return (
    <StyledHeader>
      <h1 style={{ fontSize: "40px" }}>React Landing Page</h1>
      <h1 style={{ padding: "0px 0px 15px", fontSize: "40px" }}>Website Template</h1>
      <h2 style={{ fontSize: "15px" }}>Made with React and Styled Components</h2>
      <Button>Get Started</Button>
    </StyledHeader>
  );
};

export default Header;
