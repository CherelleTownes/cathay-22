import React, { useState } from 'react';
import styled from 'styled-components';
import about from '../../assets/images/about-us-background.jpg';
import open_arrow from '../../assets/images/arrows/about-arrow-down.png';
import close_arrow from '../../assets/images/arrows/about-arrow-up.png';

const StyledAbout = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${about});

  height: 710px;
  background-size: cover;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 205px 1023px 212px;
  grid-template-rows: 133px 25px 311px auto;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
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

const ContainerLink = styled.div`
  width: 1023px;
  height: 40px;
  grid-column: 2;
  grid-row: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.h2`
  width: ${(props) => props.width};
  /* width: 220px; */
  height: 35px;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 3.88px;
  color: #ffffff;
  text-align: center;
`;

const LinkImg = styled.img`
  width: 43px;
  height: 35px;
  border-radius: 5px;
`;

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAbout id="about">
      <Layout>
        <Label>ABOUT US</Label>
        <ContainerText>
          <Text>
            Artistry and skillful ingenuity have enabled the Wang family to
            bring to fruition its dream of creating authentic, savory Sichuan
            cuisine for discerning diners near and far.
          </Text>
          <Text>
            Results don't lie, Cathay 22, which jumped onto the scene in 1985,
            boasts award-winning chefs from Sichuan and other regions in China
            who work magic with spices and ingredients imported directly from
            China, such as star anise Ba-jhiao and prickly seeds Hua-Jhiao.
          </Text>
          {isOpen && (
            <>
              <Text>
                One-of-a-kind dishes marry true traditions with a supervising
                kick, as evidenced in Cathay 22's "crazy beef" (beef tenderloin
                in an unforgettable spicy oil) and "Golden Coins" (golden fried
                puffs filled with meat and eggplant).
              </Text>
              <Text>
                At Cathay 22, a family meal, a romantic dinner, or a business
                luncheon will always be enjoyable.
              </Text>
              <ContainerLink>
                <Link width="130px">CLOSED</Link>)
                <LinkImg src={close_arrow} onClick={(e) => handleOpen(e)} />
              </ContainerLink>
            </>
          )}
        </ContainerText>
        {!isOpen && (
          <ContainerLink>
            <Link width="210px">FULL STORY</Link>
            <LinkImg src={open_arrow} onClick={(e) => handleOpen(e)} />
          </ContainerLink>
        )}
      </Layout>
    </StyledAbout>
  );
}
