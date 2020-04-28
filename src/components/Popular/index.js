import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Modal from '../Modal';
import DishImage from './DishImage';
import dishes from './dishes';

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

export default function Popular() {
  const [isOpen, setIsOpen] = useState(false);
  const [dish, setDish] = useState(null);

  const dishSize = {
    height: '731px',
    width: '599px',
  };

  const handleOpen = (dish) => {
    setDish(dish);
    setIsOpen(true);
  };

  const handleClose = () => {
    setDish(null);
    setIsOpen(false);
  };

  return (
    <StyledPopular>
      <Grid>
        <Heading>SPECIALS AND POPULAR ITEMS</Heading>
        <Carousel responsive={responsive} centerMode={true} infinite={true}>
          {dishes.map((dish, i) => (
            <DishImage key={i} dish={dish} handleOpen={handleOpen} />
          ))}
        </Carousel>
      </Grid>
      {isOpen && (
        <Modal
          image={dish.image}
          close={handleClose}
          size={dishSize}
          dish={dish}
        />
      )}
    </StyledPopular>
  );
}
