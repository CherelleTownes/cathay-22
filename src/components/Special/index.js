import React from 'react';
import styled from 'styled-components';
import special from '../../assets/images/special-events.png';

const StyledSpecial = styled.section`
  height: 627px;
  background-color: #a32e02;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const SpecialImg = styled.img`
  width: 377px;
  height: 492px;
  border-radius: 15px;
`;

const ContainerText = styled.div`
  width: 650px;
  height: 450px;
`;

const Label = styled.h1`
  width: 588px;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.75px;
  color: #ffffff;
  text-align: right;
  padding-bottom: 30px;
`;

const Text = styled.p`
  max-width: 588px;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.34px;
  color: #ffffff;
  padding-bottom: 20px;
  text-align: right;
`;
const ContainerButton = styled.div`
  width: 650px;
  height: 170px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;
const Button = styled.button`
  width: 175px;
  height: 60px;
  border-radius: 44px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
  background-color: #f4eaea;
`;

export default function Special() {
  return (
    <StyledSpecial id="special">
      <ContainerText>
        <Label>SPECIAL EVENTS</Label>
        <Text>
          At Cathay 22, a celebration is always memorable. Custom banquet menus,
          party room, and catering services are available.
        </Text>
        <Text>
          While dining at Cathay 22, select from our full wine list or enjoy
          champagne, beer or cocktails from our fully stocked bar.
        </Text>
        <Text>
          Call us to request our Special Events menu. And be sure to check back
          here for the Special Events that we have throughout the year.
        </Text>
        <ContainerButton>
          <a href="tel:+1-973-467-8688">
            <Button>CALL US</Button>
          </a>
          <Button>CHINESE NEW YEAR MENU '20</Button>
        </ContainerButton>
      </ContainerText>
      <SpecialImg src={special} />
    </StyledSpecial>
  );
}
