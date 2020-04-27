import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/images/hero.png';

const StyledHero = styled.section`
background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${hero});
  height: 771px;
  background-size: cover;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
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
`;

export default function Hero() {
  return <StyledHero>
    <Label>TRADITION, PASSION AND INNOVATION</Label>
    <a href="#about">
    <Button>LEARN MORE</Button>
    </a> 
  </StyledHero>
}