import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import hero_desktop from '../../assets/images/hero.png';
import hero_small from '../../assets/images/hero-small.png';
import { Link } from 'react-scroll';

const size = {
  mobile: '414px'
}

const StyledHero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(${(props) => props.hero});
  height: 771px;
  background-size: cover;
  background-position: 25% 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${size.mobile}) {
    height: 248px; 
    margin-top: 105px;
  }
`;

const Label = styled.h2`
  font-size: 55px;
  font-weight: bold;
  letter-spacing: 6.88px;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 55px;
  padding-top: 169px;
  @media (max-width: ${size.mobile}) {
    font-size: 15px;
    letter-spacing: 2px;
    padding-top: 30px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  width: 157px;
  height: 54px;
  border-radius: 44px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
  background-color: #f4eaea;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 2.79px;
  color: #000000;
  font-family: Roboto; 
  @media (max-width: ${size.mobile}) {
    width: 104px;
    height: 26px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.96px;
  }
`;

export default function Hero() {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const hero = isMobile ? hero_small : hero_desktop;
  return (
    <StyledHero hero={hero}>
      <Label>TRADITION, PASSION AND INNOVATION</Label>
      <Link to="about" spy={true} smooth={true} offset={-165} duration={700}>
        <Button>LEARN MORE</Button>
      </Link>
    </StyledHero>
  );
}
