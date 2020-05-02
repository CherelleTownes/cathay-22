import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

import takeOutImg from '../../assets/images/trip-advisor-review-1.png';
import lunchImg from '../../assets/images/menuDish/lunch-cropped.jpeg';
import dineInImg from '../../assets/images/menuDish/dinner.jpg';
import wineListImg from '../../assets/images/menuDish/winelist-cropped.jpg';

import takeOutMenu from '../../assets/menus/takeout-menu2.png';
import lunchMenu from '../../assets/menus/lunch-menu2.png';
import dineInMenu from '../../assets/menus/dine-in-menu2.png';
import wineListMenu from '../../assets/menus/winelist2.png';

const StyledSection = styled.section`
  height: 570px;
  background-color: #f4eaea;

  @media (max-width: 414px) {
    height: 179px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 41px 341px;
  grid-row-gap: 32px;
  padding: 70px 61px 104px 62px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 414px) {
    grid-template-rows: 18px 93px;
    grid-row-gap: 17px;
    padding: 15px 9px 36px 8px;
  }
`;

const MenusBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h2`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 1.75px;
  color: #000000;
  justify-self: center;

  @media (max-width: 414px) {
    font-size: 15px;
    letter-spacing: 0.75px;
    align-self: center;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290.1px;
  height: 341.4px;
  border-radius: 45px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 414px) {
    width: 78.7px;
    height: 92.6px;
    border-radius: 15px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.image});
  background-size: cover;
  border-radius: 45px;

  @media (max-width: 414px) {
    border-radius: 15px;
  }
`;

const Title = styled.p`
  position: absolute;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1.25px;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 414px) {
    font-size: 8px;
    letter-spacing: 0.4px;
  }
`;

export default function Menus() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState('');

  const menus = {
    takeOut: takeOutMenu,
    dineIn: dineInMenu,
    wineList: wineListMenu,
    lunch: lunchMenu,
  };

  const menuSize = {
    height: '95%',
    width: '60%',
  };

  const handleOpen = (menu) => {
    setMenu(menus[menu]);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledSection id="menu" name="menu">
      <Grid>
        <Heading>MENUS</Heading>
        <MenusBox>
          <Container onClick={() => handleOpen('takeOut')}>
            <Image image={takeOutImg} />
            <Title>TAKEOUT</Title>
          </Container>
          <Container onClick={() => handleOpen('lunch')}>
            <Image image={lunchImg} />
            <Title>LUNCH</Title>
          </Container>
          <Container onClick={() => handleOpen('dineIn')}>
            <Image image={dineInImg} />
            <Title>DINNER</Title>
          </Container>
          <Container onClick={() => handleOpen('wineList')}>
            <Image image={wineListImg} />
            <Title>WINE LIST</Title>
          </Container>
        </MenusBox>
      </Grid>
      {isOpen && <Modal image={menu} close={handleClose} size={menuSize} />}
    </StyledSection>
  );
}
