import React from 'react';
import styled from 'styled-components';
import dining from '../../assets/images/dining-room-cropped.png';

const StyledCathay = styled.section`
  height: 527px;
  background-color: #a32e02;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const DiningImg = styled.img`
  width: 506 px;
  height: 432px;
  border-radius: 15px;
`;

const ContainerText = styled.div`
  width: 545px;
  height: 300px;
`;

const Label = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #ffffff;
  padding: 0 0 50px 0;
`;

const Text = styled.p`
  max-width: 545px;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  padding-bottom: 20px;
`;

export default function Cathay() {
  return (
    <StyledCathay>
      <DiningImg src={dining} />

      <ContainerText>
        <Label>AT CATHAY 22</Label>
        <Text>
          Let Cathay 22 be your place for any festive occasion or party.
        </Text>
        <Text>
          Whether it's the Chinese New Year or other special events, Cathay 22
          offers special seasonal dishes and lots of friendly staff to serve
          you.
        </Text>
        <Text>
          Whether you're planning a party for 20 or any intimate gathering for
          two, Cathay 22 is your choice for savory Sichuan cuisine in a fun and
          festive atmosphere year round.
        </Text>
      </ContainerText>
    </StyledCathay>
  );
}
