import React from 'react';
import styled from 'styled-components';
import tripAdvisor from '../../assets/images/tripadvisor.png';
import yelp from '../../assets/images/yelp.png';

const StyledFooter = styled.footer`
  height: 183px;
  background-color: #a32e02;

  @media (max-width: 414px) {
    height: 126px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 304px 1fr 1fr;
  max-width: 1440px;
  height: 100%;
  padding: 26px 181px 40px 126px;
  margin: 0 auto;

  @media (max-width: 414px) {
    max-width: 375px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 67px 30px;
    grid-row-gap: 7px;
    padding: 11px 37px 12px 26px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2.38px;
  color: #ffffff;
  padding-bottom: 13px;

  @media (max-width: 414px) {
    font-size: 10px;
    letter-spacing: 0.75px;
    padding-bottom: 5px;
  }
`;

const Text = styled.p`
  font-size: 17px;
  letter-spacing: 1.62px;
  color: #ffffff;
  line-height: 1.25;
  padding: 7px 0;

  @media (max-width: 414px) {
    font-size: 8px;
    letter-spacing: 0.76px;
    padding: 4px 0;
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 414px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 88px;
  width: 88px;
  margin-left: 32px;
  border-radius: 18px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  @media (max-width: 414px) {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    border-radius: 6px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Grid>
        <TextBox>
          <Heading>ADDRESS</Heading>
          <Text>
            124 RT. 22 WEST
            <br />
            SPRINGFIELD, NJ 07081
          </Text>
          <Text>TEL: 973-467-8688</Text>
        </TextBox>
        <TextBox>
          <Heading>HOURS</Heading>
          <Text>
            MON - THURS: 11:45 AM - 10:00 PM
            <br />
            FRI- SAT: 11:45 AM - 11:00 PM
            <br />
            SUN: 11:45 AM - 10:00 PM
          </Text>
          <Text> </Text>
        </TextBox>
        <LogoBox>
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g46842-d541995-Reviews-Cathay_22-Springfield_New_Jersey.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo src={tripAdvisor} />
          </a>
          <a
            href="https://www.yelp.com/biz/cathay-22-springfield"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo src={yelp} />
          </a>
        </LogoBox>
      </Grid>
    </StyledFooter>
  );
}
