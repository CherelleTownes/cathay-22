import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

const StyledSection = styled.section`
  height: 775px;
  background-color: #f4eaea;

  @media (max-width: 414px) {
    height: 234px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 80px;
  grid-row-gap: 48px;
  height: 100%;
  max-width: 1059px;
  padding: 118px 0px 64px 0px;
  margin: 0 auto;

  @media (max-width: 414px) {
    max-width: 338px;
    padding: 27px 0px 23px 0px;
    grid-template-rows: 1fr 24px;
    grid-row-gap: 23px;
  }
`;

const TextBox = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  height: 65%;
`;

const Heading = styled.h2`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 1.75px;
  color: #000000;
  justify-self: start;
  margin-top: 21px;

  @media (max-width: 414px) {
    font-size: 15px;
    letter-spacing: 0.75px;
    margin-top: 8px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  letter-spacing: 1.71px;
  color: #000000;
  justify-self: center;
  line-height: 1.2;

  @media (max-width: 414px) {
    font-size: 8px;
    letter-spacing: 0.76px;
    margin-top: 20px;
  }
`;

const Map = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 557px;
  height: 459px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #d0d0d0;
  border-radius: 40px;

  iframe {
    border-radius: 40px;
  }

  @media (max-width: 414px) {
    width: 166px;
    height: 137px;
    border-radius: 10px;

    iframe {
      border-radius: 10px;
    }
  }
`;

const ResText = styled.p`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  border-radius: 30px;
  border: solid 2px #a32e02;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
  color: #a32e02;
  text-align: center;
  padding-top: 20px;
  height: 100%;
  width: 100%;

  @media (max-width: 414px) {
    font-size: 8px;
    font-weight: 500;
    line-height: 2.75;
    letter-spacing: 0.08px;
    padding: 0;
  }
`;

export default function Location() {
  return (
    <StyledSection id="directions" name="directions">
      <Grid>
        <TextBox>
          <Heading>OUR LOCATION</Heading>
          <Text>
            124 RT. 22 WEST
            <br />
            SPRINGFIELD, NJ 07081
            <br />
            <br />
            Tel: 973-467-8688
            <br />
            <br />
            MON - THURS: 11:45 AM - 10:00 PM
            <br />
            FRI - SAT: 11:45 AM - 11:00 PM
            <br />
            SUN: 11:45 AM - 10:00 PM
          </Text>
        </TextBox>
        <ResText>
          Reservations are only accepted on weekends, call us at (973) 467-8688
          to plan your visit!
        </ResText>
        <Map>
          <Iframe
            url="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN13s2YbLNIgRQ1ZLeIuutZw&key=AIzaSyA7pmdzI6C618AuBR8MoZ5fvtVBst0_B8A"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </Map>
      </Grid>
    </StyledSection>
  );
}

/* <iframe
    width="600"
    height="450"
    frameborder="0"
    style="border:0"
    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN13s2YbLNIgRQ1ZLeIuutZw&key=AIzaSyA7pmdzI6C618AuBR8MoZ5fvtVBst0_B8A"
    allowfullscreen>
  </iframe> */
