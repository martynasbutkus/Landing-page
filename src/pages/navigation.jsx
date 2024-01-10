import React from 'react';
import styled, { keyframes } from 'styled-components';

const Navigation = () => {
  const slideInAnimation = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
  `;
  
  const NavBar = styled.nav`
    display: flex;
    background: white;
    height: 40px;
    width: 100%;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    animation: ${slideInAnimation} 2s ease-in-out;
    overflow: hidden; 
    position: fixed; 
    z-index: 1000;
    @media (max-width: 390px) {
      font-size: 15px;
      height: 80px;
      flex-wrap: wrap;
  }
  `;

  const NavLanding = styled.h1`
    color: #2388CE;
    font-weight: 200;
    font-size: 1em;
  `;

  const UlLi = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
  `;

  const Button = styled.button`
    background: #2388CE;
    color: white;
    border: none;
    height: 30px;
    padding: 0px 10px;
    border-radius: 5px;
  `;

  return (
    <NavBar>
      <NavLanding>LandingPage</NavLanding>
      <UlLi>
        <li style={{ color: "#2388CE" }}>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <li>Faq</li>
      </UlLi>
      <Button>Get Started</Button>
    </NavBar>
  );
};

export default Navigation;
