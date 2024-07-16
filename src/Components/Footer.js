import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href="https://www.linkedin.com/in/salman-usmani" target="_blank" rel="noopener noreferrer">
        Designed by: Salman Usmani
      </FooterLink>
      <FooterLink href="mailto:report@flavourvault.com">Report a Bug</FooterLink>
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
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
