import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import { useMediaQuery } from 'react-responsive';
import special from '../../assets/images/special-events.png';
import specialMenu from '../../assets/menus/new-year-menu.png';

const StyledSpecial = styled.section`
  height: 627px;
  background-color: #a32e02;
  @media (max-width: 375px) {
    height: 207px;
  }
`;

const Layout = styled.div`
  display: grid;
  /* grid-template-columns: 156px 606px 84px 377px 217px;
  grid-template-rows: 136px 25px 230px 152px 83px; */
  grid-template-columns: 11% 42% 6% 26% 15%;
  grid-template-rows: 21% 5% 37% 24% 13%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 375px) {
    max-width: 375px;
    grid-template-columns: 8% 54% 4% 28% 6%;
    grid-template-rows: 21% 6% 26% 20% 27%;
  }
`;

const SpecialImg = styled.img`
  width: 377px;
  height: 492px;
  border-radius: 15px;
  grid-area: 1 / col4-start / last-line / 4;
  align-self: center;
  @media (max-width: 375px) {
    width: 107px;
    height: 156px;
    border-radius: 15px;
  }
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
  @media (max-width: 375px) {
    font-size: 13px;
    letter-spacing: 0.65px;
  }
`;

const ContainerText = styled.div`
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
  @media (max-width: 375px) {
    font-size: 8px;
    line-height: 1;
    letter-spacing: 0.24px;
    padding-bottom: 8px;
  }
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
  @media (max-width: 375px) {
    width: 195px;
    height: 30px;
    grid-row: 5;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  width: ${(props) => props.width}px;
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
  @media (max-width: 375px) {
    height: 21px;
    font-size: 8px;
    line-height: normal;
    letter-spacing: 0.4px;
  }
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
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const buttonWidthCall = isMobile ? 64 : 175;
  const buttonWidthMenu = isMobile ? 111 : 204;

  return (
    <StyledSpecial id="special-events" name="special-events">
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
            <Button width={buttonWidthCall}>CALL US</Button>
          </a>
          <Button
            width={buttonWidthMenu}
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
