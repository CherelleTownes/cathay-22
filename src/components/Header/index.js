import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import logo from '../../assets/images/cathay22_logo.png';

const size = {
  mobile: '414px',
  tablet: '768px',
  tablet_max: '1024px',
  max_mid: '1120px',
  max_large: '1280px',
};

const StyledHeader = styled.header`
  background-color: #a32e02;
  height: 169px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  @media (max-width: ${size.mobile}) {
    max-width: ${size.mobile};
    height: 141px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 27% 3% 1fr 8%;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: ${size.max_large}) {
    grid-template-columns: 27% 2% 1fr 6%;
  }
  @media (max-width: ${size.max_mid}) {
    grid-template-columns: 26% 2% 1fr 4%;
  }
  @media (max-width: ${size.tablet_max}) {
    grid-template-columns: 25% 1% 1fr 3%;
  }
  @media (max-width: ${size.mobile}) {
    grid-template-columns: ${size.mobile};
    grid-template-rows: 25px 1fr 38px;
    grid-column-gap: 0px;
    padding: 0;
  }
`;

const Logo = styled.img`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 260px;
  height: 140px;
  align-self: center;
  cursor: pointer;
  justify-self: end;
  @media (max-width: ${size.max_large}) {
    width: 249x;
    height: 138px;
  }
  @media (max-width: ${size.max_mid}) {
    width: 227px;
    height: 134px;
  }
  @media (max-width: ${size.tablet_max}) {
    width: 203px;
    height: 123px;
  }
  @media (max-width: ${size.mobile}) {
    width: 107px;
    height: 65px;
    grid-column: 1;
    grid-row: 2;
    place-self: center;
    padding-bottom: 8px 0 10px 0;
  }
`;

const Nav = styled.nav`
  grid-column: 3/4;
  grid-row: 2/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${size.mobile}) {
    width: 100%;
    justify-content: space-around;
    grid-column: 1;
    grid-row: 3;
    place-self: center;
    padding: 0 22px;
  }
`;

const Link = styled(Scroll.Link)`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 3.92px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: ${size.max_large}) {
    font-size: 24px;
  }
  @media (max-width: ${size.max_mid}) {
    font-size: 21px;
  }
  @media (max-width: ${size.tablet_max}) {
   font-size: 18px;
  }
  @media (max-width: ${size.mobile}) {
    font-size: 11px;
  }
`;

const Contact = styled.p`
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: end;
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.44px;
  color: #ffffff;
  @media (max-width: ${size.max_large}) {
    font-size: 16px;
  }
  @media (max-width: ${size.max_mid}) {
    font-size: 14px;
  }
  @media (max-width: ${size.tablet_max}) {
    font-size: 12px;
  }
  @media (max-width: ${size.mobile}) {
    height: 9px;
    font-size: 8px;
    letter-spacing: 0.64px;
    grid-column: 1;
    grid-row: 1;
    place-self: center;
  }
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
            // offset={-165}
            offset={-171}
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
