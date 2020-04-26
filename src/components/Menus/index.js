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

const MenuImgContainer = styled.div`
  position: relative;
  width: 290.1px;
  height: 341.4px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 50;
  /* background-color: #333333; */
`;

const MenuImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
  /* background-color: #333333; */
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

  const handleOpen = (e) => {
    setMenu(menus[e.target.name]);
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
          <MenuImgContainer>
            <MenuImg
              src={takeOutImg}
              onClick={(e) => handleOpen(e)}
              name="takeOut"
            />
          </MenuImgContainer>
          <MenuImgContainer>
            <MenuImg
              src={lunchImg}
              onClick={(e) => handleOpen(e)}
              name="lunch"
            />
          </MenuImgContainer>
          <MenuImgContainer>
            <MenuImg
              src={dineInImg}
              onClick={(e) => handleOpen(e)}
              name="dineIn"
            />
          </MenuImgContainer>
          <MenuImgContainer>
            <MenuImg
              src={wineListImg}
              onClick={(e) => handleOpen(e)}
              name="wineList"
            />
          </MenuImgContainer>
        </MenusContainer>
      </Grid>
      {isOpen && <Modal image={menu} close={handleClose} size={menuSize} />}
    </StyledSection>
  );
}
