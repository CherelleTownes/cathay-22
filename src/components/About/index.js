import React, { useState } from 'react';
import styled from 'styled-components';
import about from '../../assets/images/about-us-background.jpg';

const StyledAbout = styled.section`
  background: url(${about});
  height: 710px;
  background-size: cover;
  display: grid;
  grid-template-columns: 209px 1023px 228px;
  grid-template-rows: 133px 25px 311px 241px;
`;

const Label = styled.h1`
  width: 1023px;
  height: 41px;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #ffffff;
  text-align: center;
  grid-column: 2;
  grid-row: 1;
  align-self: flex-end;
`;

const ContainerText = styled.div`
  width: 1023px;
  height: 228px;
  grid-column: 2;
  grid-row: 3;
`;

const Text = styled.p`
  width: 1015px;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #ffffff;
  padding-bottom: 30px;
  text-align: center;
`;

const Link = styled.div`
  width: 1023px;
  height: 33px;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 3.88px;
  color: #ffffff;
  text-align: center;
  grid-column: 2;
  grid-row: 4;
`;

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAbout id="about">
      <Label>ABOUT US</Label>
      <ContainerText>
        <Text>
          Artistry and skillful ingenuity have enabled the Wang family to bring
          to fruition its dream of creating authentic, savory Sichuan cuisine
          for discerning diners near and far.
        </Text>
        <Text>
          Results don't lie, Cathay 22, which jumped onto the scene in 1985,
          boasts award-winning chefs from Sichuan and other regions in China who
          work magic with spices and ingredients imported directly from China,
          such as star anise Ba-jhiao and prickly seeds Hua-Jhiao.
        </Text>
        {isOpen && (
          <>
            <Text>
              One-of-a-kind dishes marry true traditions with a supervising
              kick, as evidenced in Cathay 22's "crazy beef" (beef tenderloin in
              an unforgettable spicy oil) and "Golden Coins" (golden fried puffs
              filled with meat and eggplant).
            </Text>
            <Text>
              At Cathay 22, a family meal, a romantic dinner, or a business
              luncheon will always be enjoyable.
            </Text>
            <Link onClick={(e) => handleOpen(e)}>CLOSED</Link>)
          </>
        )}
      </ContainerText>
      {!isOpen && <Link onClick={(e) => handleOpen(e)}>FULL STORY</Link>}
    </StyledAbout>
  );
}
