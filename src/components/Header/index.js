import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
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
  grid-template-columns: 252px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 56px;
  height: 100%;
  max-width: 1440px;
  padding: 0 126px 0 122px;
  margin: 0 auto;
`;

const Logo = styled.img`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 240px;
  height: 140px;
  align-self: center;
  cursor: pointer;
`;

const Nav = styled.nav`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled(Scroll.Link)`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 3.92px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
`;

const Contact = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: end;
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.44px;
  color: #ffffff;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Layout>
        <Logo src={logo} onClick={Scroll.animateScroll.scrollToTop} />
        <Contact>
          TEL: 973-467-8688 • 124 Rt. 22 West Springfield, NJ 07081
        </Contact>
        <Nav>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-165}
            duration={700}
          >
            ABOUT
          </Link>
          <Link to="menu" spy={true} smooth={true} offset={-160} duration={500}>
            MENU
          </Link>
          <Link
            to="special-events"
            spy={true}
            smooth={true}
            offset={-165}
            duration={500}
          >
            SPECIAL EVENTS
          </Link>
          <Link
            to="directions"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
          >
            DIRECTIONS
          </Link>
        </Nav>
      </Layout>
    </StyledHeader>
  );
}
