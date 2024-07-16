// Components/CustomImage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const CustomImage = ({ Imgsrc, pt, delay }) => {
  return (
    <ImgContainer className="custom-image" style={{ paddingTop: pt, animationDelay: delay }}>
      <img src={Imgsrc} alt="Custom-Image" />
    </ImgContainer>
  );
};

const pop = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const ImgContainer = styled.div`
  height: 0;
  width: 80%;
   margin: 4px
  position: relative;
  overflow: hidden;
  animation: ${pop} 1.2s ease-out forwards;
`;

export default CustomImage;

