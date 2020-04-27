import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import special from '../../assets/images/special-events.png';
import specialMenu from '../../assets/menus/new-year-menu.png';

const StyledSpecial = styled.section`
  height: 627px;
  background-color: #a32e02;
  /* display: grid;
  grid-template-columns: 156px 606px 83px 377px 217px;
  grid-template-rows: 136px 25px 230px 152px 83px; */
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 156px 606px 84px 377px 217px;
  grid-template-rows: 136px 25px 230px 152px 83px;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const SpecialImg = styled.img`
  width: 377px;
  height: 492px;
  border-radius: 15px;
  grid-area: 1 / col4-start / last-line / 4;
  align-self: center;
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
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
  align-self: end;
`;

const ContainerText = styled.div`
  width: 650px;
  height: 156px;
  grid-column: 2;
  grid-row: 3;
`;

const Text = styled.p`
  max-width: 606px;
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
  width: 580px;
  height: 152px;
  grid-column: 2;
  grid-row: 4;
  justify-self: end;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

const Button = styled.button`
  width: ${(props) => props.width};
  height: 60px;
  border-radius: 44px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
  background-color: #f4eaea;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.9px;
  color: #000000;
`;

export default function Special() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState('');

  const handleOpen = (e) => {
    setMenu(e.target.name);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const menuSize = {
    height: '95%',
    width: '60%',
  };

  return (
    <StyledSpecial id="special">
      <Layout>
        <Label>SPECIAL EVENTS</Label>
        <ContainerText>
          <Text>
            At Cathay 22, a celebration is always memorable. Custom banquet
            menus, party room, and catering services are available.
          </Text>
          <Text>
            While dining at Cathay 22, select from our full wine list or enjoy
            champagne, beer or cocktails from our fully stocked bar.
          </Text>
          <Text>
            Call us to request our Special Events menu. And be sure to check
            back here for the Special Events that we have throughout the year.
          </Text>
        </ContainerText>
        <ContainerButton>
          <a href="tel:+1-973-467-8688">
            <Button width="175px">CALL US</Button>
          </a>
          <Button
            width="204px"
            onClick={(e) => handleOpen(e)}
            name={specialMenu}
          >
            CHINESE NEW YEAR MENU '20
          </Button>
          {isOpen && <Modal image={menu} close={handleClose} size={menuSize} />}
        </ContainerButton>
        <SpecialImg src={special} />
      </Layout>
    </StyledSpecial>
  );
}
