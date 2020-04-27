import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Modal from '../Modal';

import basilBeef from '../../assets/images/carousel/basil-beef-uncropped.png';
import beefSichuan from '../../assets/images/carousel/crazy-beef-sichuan-ncropped.png';
import pepperChicken from '../../assets/images/carousel/pepperchicken-uncropped.png';
import spicyDumplings from '../../assets/images/carousel/spicy-dumplings-uncropped.png';
import seafoodNoodle from '../../assets/images/carousel/seafood-noodle-basket-uncropped.png';
import prawnsCreamy from '../../assets/images/carousel/prawns-creamy-marnier-uncropped.png';
import danDan from '../../assets/images/carousel/dan-danMeinNoodles.png';

const StyledPopular = styled.section`
  height: 684px;
  background-color: #f4eaea;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 41px 352px;
  grid-row-gap: 65px;
  padding: 78px 0 148px 0;
`;

const Heading = styled.h2`
  justify-self: center;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 1.75px;
  color: #000000;
`;

const Image = styled.div`
  width: 359px;
  height: 352px;
  border-radius: 67px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const images = [
  basilBeef,
  beefSichuan,
  pepperChicken,
  spicyDumplings,
  seafoodNoodle,
  prawnsCreamy,
  danDan,
];

export default function Popular() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledPopular>
      <Grid>
        <Heading>SPECIALS AND POPULAR ITEMS</Heading>
        <Carousel responsive={responsive} centerMode={true} infinite={true}>
          {images.map((image) => (
            <Image backgroundImage={image} />
          ))}
        </Carousel>
      </Grid>
      {isOpen && <Modal />}
    </StyledPopular>
  );
}
