import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

import takeOutImg from '../../assets/images/trip-advisor-review-1.png';
import lunchImg from '../../assets/images/yelp-review.png';
import dineInImg from '../../assets/images/trip-advisor-review-2.png';
import wineListImg from '../../assets/images/trip-advisor-review-2.png';

import takeOutMenu from '../../assets/menus/takeout-menu2.png';
import lunchMenu from '../../assets/menus/lunch-menu2.png';
import dineInMenu from '../../assets/menus/dine-in-menu2.png';
import wineListMenu from '../../assets/menus/winelist2.png';

const StyledSection = styled.section`
  height: 570px;
  background-color: #f4eaea;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 41px 341px;
  grid-row-gap: 32px;
  padding: 70px 61px 104px 62px;
  max-width: 1440px;
  margin: 0 auto;
`;

const MenusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #000000;
  justify-self: center;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.25px;
  color: #ffffff;
`;

const MenuImgContainer = styled.div`
  position: relative;
  width: 290.1px;
  height: 341.4px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* filter: brightness(50%); */
  /* background: rgba(0, 0, 0, 0.6); */
  z-index: 50;
`;

const MenuImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
  filter: brightness(45%);
  /* opacity: 0.8;
  background-color: #000000; */
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
    <StyledSection>
      <Grid>
        <Label>Menus</Label>
        <MenusContainer>
          <MenuImgContainer onClick={() => handleOpen("takeOut")}>
            <MenuImg
              src={takeOutImg}
            />
            <Title>TAKEOUT</Title>
          </MenuImgContainer>
          <MenuImgContainer onClick={() => handleOpen("lunch")}>
            <MenuImg
              src={lunchImg}
            />
            <Title>LUNCH</Title>
          </MenuImgContainer>
          <MenuImgContainer onClick={() => handleOpen("dineIn")}>
            <MenuImg
              src={dineInImg}
            />
            <Title>DINNER</Title>
          </MenuImgContainer>
          <MenuImgContainer onClick={() => handleOpen("wineList")}>
            <MenuImg
              src={wineListImg}
            />
            <Title>WINE LIST</Title>
          </MenuImgContainer>
        </MenusContainer>
      </Grid>
      {isOpen && <Modal image={menu} close={handleClose} size={menuSize} />}
    </StyledSection>
  );
}
