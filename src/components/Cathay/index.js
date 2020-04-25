import React from 'react';
import styled from 'styled-components';
import dining from '../../assets/images/dining-room.jpg';

const StyledCathay = styled.section`
  height: 527px;
  background-color: #a32e02;
`;

const DiningImg = styled.div`
  width: 506 px;
  height: 432px;
  border-radius: 15px;
  background: url(${dining});
  background-repeat: no-repeat;
`;

const Label = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #ffffff;
`;

const Text = styled.p`
  width: 545px;
  height: 180px;
  font-family: Roboto;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;


export default function Cathay() {
  return <StyledCathay>
    <DiningImg></DiningImg>
    <Label>AT CATHAY 22</Label>
    <Text>Let Cathay 22 be your place for any festive occasion or party</Text>
    <Text>Whether it's the Chinese New Year or other special events, Cathay 22 offers special seasonal dishes and lots of friendly staff to serve you.</Text>
    <Text>Whether you're planning a party for 20 or any intimate gathering for two, Cathay 22 is your choice for savory Sichuan cuisine in a fun and festive atmosphere year round.</Text>
  </StyledCathay>
}