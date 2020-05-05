import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import about from '../../assets/images/about-us-background.jpg';
import open_arrow from '../../assets/images/arrows/about-arrow-down.png';
import close_arrow from '../../assets/images/arrows/about-arrow-up.png';

const size = {
  mobile: '414px',
  tablet: '768px',
  tablet_max: '1024px',
  max_mid: '1110px',
  max_large: '1280px',
};

const StyledAbout = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${about});

  height: 710px;
  width: 100%;
  background-size: cover;
  @media (max-width: ${size.mobile}) {
    height: 230px;
  }
`;

const Layout = styled.div`
  display: grid;
  /* grid-template-columns: 205px 1023px 212px; */
  /* grid-template-rows: 133px 25px 311px 241px; */
  grid-template-columns: 13% 74% 13%;
  grid-template-rows: 18% 4% 44% 34%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${size.max_large}) {
    grid-template-columns: 12% 76% 12%;
  }
  @media (max-width: ${size.max_mid}) {
    grid-template-columns: 11% 78% 11%;
  }
  @media (max-width: ${size.tablet_max}) {
    grid-template-columns: 10% 80% 10%;
  }
  @media (max-width: ${size.mobile}) {
    grid-template-columns: 4% 92% 4%;
  }
`;

const Label = styled.h1`
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
  @media (max-width: ${size.tablet_max}) {
    font-size: 32px;
  }
  @media (max-width: ${size.mobile}) {
    height: 18px;
    font-size: 15px;
    letter-spacing: 1.75px;
  }
`;

const ContainerText = styled.div`
  height: 228px;
  grid-column: 2;
  grid-row: 3;
  @media (max-width: ${size.mobile}) {
    height: 131px;
  }
`;

const Text = styled.p`
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #ffffff;
  padding-bottom: 30px;
  text-align: center;
  @media (max-width: ${size.max_large}) {
    font-size: 23px;
    padding-bottom: 29px;
  }
  @media (max-width: ${size.max_mid}) {
    font-size: 22px;
    padding-bottom: 28px;
  }
  @media (max-width: ${size.tablet_max}) {
    font-size: 21px;
    padding-bottom: 27px;
  }
  @media (max-width: ${size.mobile}) {
    font-size: 8px;
    letter-spacing: 0.16px;
    padding-bottom: 10px;
  }
`;

const ContainerLink = styled.div`
  height: 40px;
  grid-column: 2;
  grid-row: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${size.mobile}) {
    height: 12px;
  }
`;

const Link = styled.h2`
  height: 35px;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 3.88px;
  color: #ffffff;
  padding-right: 12px;
  padding-bottom: 41px;
 
  @media (max-width: ${size.tablet_max}) {
    font-size: 22px;
  }
  @media (max-width: ${size.mobile}) {
    height: 13px;
    font-size: 12px;
    letter-spacing: 1.86px;
  }
`;

const LinkImg = styled.img`
  width: 43px;
  height: 35px;
  border-radius: 5px;
  
  @media (max-width: ${size.max_mid}) {
    width: 40px;
    height: 32px;
    border-radius: 1px;
  }
  @media (max-width: ${size.tablet_max}) {
    width: 35px;
    height: 28px;
    border-radius: 1px;
  }
  @media (max-width: ${size.mobile}) {
    width: 12px;
    height: 10px;
    border-radius: 1px;
  }
`;

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAbout id="about" name="about">
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
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
              >
                <Text>
                  One-of-a-kind dishes marry true traditions with a supervising
                  kick, as evidenced in Cathay 22's "crazy beef" (beef
                  tenderloin in an unforgettable spicy oil) and "Golden Coins"
                  (golden fried puffs filled with meat and eggplant).
                </Text>
                <Text>
                  At Cathay 22, a family meal, a romantic dinner, or a business
                  luncheon will always be enjoyable.
                </Text>
                <ContainerLink>
                  <Link>CLOSED</Link>
                  <LinkImg src={close_arrow} onClick={(e) => handleOpen(e)} />
                </ContainerLink>
              </motion.div>
            )}
          </AnimatePresence>
        </ContainerText>
        {!isOpen && (
          <ContainerLink onClick={(e) => handleOpen(e)}>
            <Link>FULL STORY</Link>
            <LinkImg src={open_arrow}/>
          </ContainerLink>
        )}
      </Layout>
    </StyledAbout>
  );
}
