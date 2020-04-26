import React from 'react';
import styled from 'styled-components';

const StyledPopular = styled.section`
  height: 602px;
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


export default function Popular() {
  return <StyledPopular>
    <Label> SPECIALS AND POPULAR ITEMS</Label>
  </StyledPopular>
}