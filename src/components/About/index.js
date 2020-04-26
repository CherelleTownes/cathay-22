import React from 'react';
import styled from 'styled-components';
import about from '../../assets/images/about-us-background.jpg';

const StyledAbout = styled.section`
  background: url(${about});
  height: 710px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Label = styled.h1`
  width: 200px;
  height: 41px;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #ffffff;
  padding-bottom: 100px;
`;

const Text = styled.p`
  width: 1020px;
  /* height: 243px; */
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #ffffff;
  padding-bottom: 40px;
  text-align: center;
`;
const Link = styled.div`
  width: 200px;
  height: 33px;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 3.88px;
  color: #ffffff;
  padding-top: 50px;
`;

export default function About() {
  return (
    <StyledAbout id="about">
      <Label>ABOUT US</Label>
      <Text>
        Artistry and skillful ingenuity have enabled the Wang family to bring to
        fruition its dream of creating authentic, savory Sichuan cuisine for
        discerning diners near and far.
      </Text>
      <Text>
        Results don't lie, Cathay 22, which jumped onto the scene in 1985,
        boasts award-winning chefs from Sichuan and other regions in China who
        work magic with spices and ingredients imported directly from China,
        such as star anise Ba-jhiao and prickly seeds Hua-Jhiao.
      </Text>
      <Link>FULL STORY</Link>
    </StyledAbout>
  );
}
