import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import hero_desktop from '../../assets/images/hero.png';
import hero_small from '../../assets/images/hero-small.png';

const StyledHero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(${(props) => props.hero});
  height: 771px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 375px) {
    height: 248px; 
    margin-top: 105px;
  
  }
`;

const Label = styled.h1`
  font-size: 55px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 6.88px;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 55px;
  padding-top: 169px;
  @media (max-width: 375px) {
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
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 2.79px;
  color: #000000;
  @media (max-width: 375px) {
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
      <a href="#about">
        <Button>LEARN MORE</Button>
      </a>
    </StyledHero>
  );
}
