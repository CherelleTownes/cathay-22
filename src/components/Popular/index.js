import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Modal from '../Modal';
import Heading from '../shared/Heading';
import DishImage from './DishImage';
import { CustomLeftArrow, CustomRightArrow } from './customArrows';
import dishes from './dishes';

const StyledSection = styled.section`
  height: 684px;
  background-color: #f4eaea;

  @media (max-width: 414px) {
    height: 176px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 41px 352px;
  grid-row-gap: 65px;
  padding: 78px 0 148px 0;

  @media (max-width: 414px) {
    grid-template-rows: 18px 91px;
    grid-row-gap: 18px;
    padding: 16px 0 33px 0;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export default function Popular() {
  const [isOpen, setIsOpen] = useState(false);
  const [dish, setDish] = useState(null);

  const handleOpen = (dish) => {
    setDish(dish);
    setIsOpen(true);
  };

  const handleClose = () => {
    setDish(null);
    setIsOpen(false);
  };

  return (
    <StyledSection>
      <Grid>
        <Heading>SPECIALS AND POPULAR ITEMS</Heading>
        <Carousel
          responsive={responsive}
          centerMode={true}
          infinite={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {dishes.map((dish, i) => (
            <DishImage key={i} dish={dish} handleOpen={handleOpen} />
          ))}
        </Carousel>
      </Grid>
      {isOpen && <Modal image={dish.image} close={handleClose} dish={dish} />}
    </StyledSection>
  );
}
