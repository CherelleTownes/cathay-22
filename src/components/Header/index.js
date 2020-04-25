import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  background-color: #a32e02;
  height: 169px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 3.92px;
  color: #ffffff;
  text-decoration: none;
`;

const Contact = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.44px;
  color: #ffffff;
`;

export default function Header() {
  return <StyledHeader>
    <Contact>
      TEL: 973-467-8688 • 124 Rt. 22 West Springfield, NJ 07081
    </Contact>
    <Nav>
      <Link href="#about">About</Link>
      <Link href="#menu">Menu</Link>
      <Link href="#special-events">Special Events</Link>
      <Link href="#directions">Directions</Link>
    </Nav>
    </StyledHeader>
}
