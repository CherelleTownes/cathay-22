import React from 'react';
import styled from 'styled-components';
import dining from '../../assets/images/dining-room-cropped.png';

const size = {
  mobile: '414px'
}

const StyledCathay = styled.section`
  height: 527px;
  background-color: #a32e02;
  @media (max-width: ${size.mobile}) {
    height: 171px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 47% 5% 48%;
  grid-template-rows: 18% 20% 34% 28%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${size.mobile}) {
    grid-template-columns: 44% 2.5% 53.5%;
    grid-template-rows: 11% 17% 57% 15%;
    max-width: 375px;
  }
`;

const DiningImg = styled.img`
  width: 506 px;
  height: 432px;
  border-radius: 15px;
  grid-column: 1 / span 1;
  grid-row: 1 / 5;
  justify-self: end;
  align-self: center;
  @media (max-width: ${size.mobile}) {
    width: 155px;
    height: 138px;
    border-radius: 15px;
  }
`;

const Label = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #ffffff;
  padding-bottom: 50px;
  grid-column: 3;
  grid-row: 2;
  align-self: flex-end;
  @media (max-width: ${size.mobile}) {
    font-size: 13px;
    letter-spacing: 0.65px;
    padding-bottom: 13px;
  }
`;

const ContainerText = styled.div`
  grid-column: 3;
  grid-row: 3;
  @media (max-width: ${size.mobile}) {
    width: 190px;
    height: 110px;
  }
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
  @media (max-width: ${size.mobile}) {
    font-size: 8px;
    line-height: 1;
    letter-spacing: 0.24px;
    padding-bottom: 8px;
  }
`;

export default function Cathay() {
  return (
    <StyledCathay>
      <Layout>
        <DiningImg src={dining} />

        <Label>AT CATHAY 22</Label>
        <ContainerText>
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
            two, Cathay 22 is your choice for savory Sichuan cuisine in a fun
            and festive atmosphere year round.
          </Text>
        </ContainerText>
      </Layout>
    </StyledCathay>
  );
}
