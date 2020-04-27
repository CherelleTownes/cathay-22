import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/cathay22_logo.png';

const StyledHeader = styled.header`
  background-color: #a32e02;
  height: 169px;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 252px 1117px;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 51px;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
`;

const Logo = styled.img`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 240px;
  height: 140px;
  align-self: center;
`;

const Nav = styled.nav`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  justify-content: space-between;
  align-items:center;

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
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: end;
  align-self:center;
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
    <Layout>
      <Logo src={logo} />
    <Contact>
      TEL: 973-467-8688 • 124 Rt. 22 West Springfield, NJ 07081
    </Contact>
    <Nav>
      <Link href="#about">About</Link>
      <Link href="#menu">Menu</Link>
      <Link href="#special-events">Special Events</Link>
      <Link href="#directions">Directions</Link>
    </Nav>
    </Layout>
    </StyledHeader>
}
