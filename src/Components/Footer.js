import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href="https://www.linkedin.com/in/salman-usmani-184185262/" target="_blank" rel="noopener noreferrer">
        Designed by: Salman Usmani
      </FooterLink>
     
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
  background-color: #333;
  color: #fff;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 600px;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
