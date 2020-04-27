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

const dishes = [
  {
    name: 'Basil with Beef',
    price: '$14.95',
    image: basilBeef,
  },
  {
    name: 'Crazy Beef Sichuan Style',
    price: '$18.95',
    image: beefSichuan,
  },
  {
    name: '3 Pepper Chicken',
    price: '$15.95',
    image: pepperChicken,
  },
  {
    name: 'Spicy Dumpling',
    price: '$6.50',
    image: spicyDumplings,
  },
  {
    name: 'Seafood in a Noodle Basket',
    price: '$21.95',
    image: seafoodNoodle,
  },
  {
    name: 'Prawns with Creamy Marnier Sauce',
    price: '$22.95',
    image: prawnsCreamy,
  },
  {
    name: 'Dan-Dan Mein Noodle',
    price: '$14.95',
    image: danDan,
  },
];

export default function Popular() {
  const [isOpen, setIsOpen] = useState(false);
  const [dish, setDish] = useState('');

  const dishSize = {
    height: '731px',
    width: '599px',
  };

  const handleOpen = (image) => {
    setDish(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setDish('');
    setIsOpen(false);
  };

  return (
    <StyledPopular>
      <Grid>
        <Heading>SPECIALS AND POPULAR ITEMS</Heading>
        <Carousel responsive={responsive} centerMode={true} infinite={true}>
          {dishes.map((dish) => (
            <Image
              backgroundImage={dish.image}
              onClick={() => handleOpen(dish.image)}
            />
          ))}
        </Carousel>
      </Grid>
      {isOpen && (
        <Modal image={dish} close={handleClose} size={dishSize} isDish={true} />
      )}
    </StyledPopular>
  );
}
