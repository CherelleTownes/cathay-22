import React from 'react';
import styled from 'styled-components';

import leftArrow from '../../assets/images/arrows/carousel-arrow-left.png';
import rightArrow from '../../assets/images/arrows/carousel-arrow-right.png';

const Arrow = styled.img`
  position: absolute;
  outline: none;
  transition: all 0.5s;
  z-index: 999;
  border: none;
  width: 90px;
  height: 90px;
  cursor: pointer;

  @media (max-width: 414px) {
    width: 23.2px;
    height: 23.2px;
  }
`;

const LeftArrow = styled(Arrow)`
  left: calc(4% + 1px);
`;

const RightArrow = styled(Arrow)`
  right: calc(4% + 1px);
`;

const CustomLeftArrow = ({ onClick }) => {
  return <LeftArrow src={leftArrow} onClick={() => onClick()} />;
};

const CustomRightArrow = ({ onClick }) => {
  return <RightArrow src={rightArrow} onClick={() => onClick()} />;
};

export { CustomLeftArrow, CustomRightArrow };
