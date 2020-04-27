import React from 'react';
import styled from 'styled-components';
import tripAdvisor from '../../assets/images/tripadvisor.png';
import yelp from '../../assets/images/yelp.png';

const StyledFooter = styled.footer`
  height: 183px;
  background-color: #a32e02;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 304px 1fr 1fr;
  max-width: 1440px;
  height: 100%;
  padding: 26px 181px 40px 126px;
  margin: 0 auto;
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
`;

const Text = styled.p`
  font-size: 17px;
  letter-spacing: 1.62px;
  color: #ffffff;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.img`
  height: 88px;
  width: 88px;
  margin-left: 32px;
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
