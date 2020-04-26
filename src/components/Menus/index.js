import React from 'react';
import styled from 'styled-components';

import menuImg1 from '../../assets/images/trip-advisor-review-1.png';
import menuImg2 from '../../assets/images/yelp-review.png';
import menuImg3 from '../../assets/images/trip-advisor-review-2.png';
import menuImg4 from '../../assets/images/trip-advisor-review-2.png';

const StyledSection = styled.section`
  height: 570px;
  background-color: #f4eaea;
`;

const Label = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #000000;
`;
const MenuImg = styled.img`
  width: 290.1px;
  height: 341.4px;
  opacity: 0.6;
  /* background-color: #333333; */
`;

export default function Menus() {
  return (
    <StyledSection>
      <Label>Menus</Label>
      <MenuImg src={menuImg1} />
      <MenuImg src={menuImg2} />
      <MenuImg src={menuImg3} />
      <MenuImg src={menuImg4} />
    </StyledSection>
  );
}
