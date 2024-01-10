import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { BsStack } from 'react-icons/bs';

const slideInAnimationLeft = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInAnimationRight = keyframes`
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  color: #05355C;
  margin: 0 auto;
  animation: ${slideInAnimationLeft} 2s ease-in-out;
  
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Container2 = styled.div`
  display: flex;
  color: #05355C;
  margin: 0 auto;
  animation: ${slideInAnimationRight} 2s ease-in-out;

  @media (max-width: 1260px) {
    flex-direction: column; 
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  min-width: 200px;
  background: white;
  padding: 20px;
  margin: 20px;
`;

const Merge = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  
  @media (max-width: 1260px) {
    flex-direction: column;
  }
`;

const Options = () => {
  const infoData = [
    {
      logo: "BsStack",
      option: "Option 1",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius soluta incidunt ipsam provident earum maiores doloremque."
    },
    {
      logo: "FaPalette",
      option: "Option 2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius soluta incidunt ipsam provident earum maiores doloremque."
    },
    {
      logo: "FaInfinity",
      option: "Option 3",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius soluta incidunt ipsam provident earum maiores doloremque."
    },
    {
      logo: "FaFingerprint",
      option: "Option 4",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius soluta incidunt ipsam provident earum maiores doloremque."
    }
  ];

  const midpoint = Math.ceil(infoData.length / 2);
  const firstHalf = infoData.slice(0, midpoint);
  const secondHalf = infoData.slice(midpoint);

  return (
    <>
      <Merge>
        <Container>
          {firstHalf.map((info, index) => {
            const IconComponent = info.logo === 'BsStack' ? BsStack : FaIcons[info.logo];
            return (
              <Div className='container' key={index}>
                <IconComponent />
                <h3 style={{ padding: "10px 0 0 0" }}>{info.option}</h3>
                <p style={{ padding: "10px 0 0 0" }}>{info.text}</p>
              </Div>
            );
          })}
        </Container>
        <Container2>
          {secondHalf.map((info, index) => {
            const IconComponent = info.logo === 'BsStack' ? BsStack : FaIcons[info.logo];
            return (
              <Div className='container' key={index}>
                <IconComponent />
                <h3 style={{ padding: "10px 0 0 0" }}>{info.option}</h3>
                <p style={{ padding: "10px 0 0 0" }}>{info.text}</p>
              </Div>
            );
          })}
        </Container2>
      </Merge>
    </>
  );
};

export default Options;
