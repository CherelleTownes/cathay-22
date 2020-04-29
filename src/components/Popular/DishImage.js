import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 359px;
  height: 352px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 67px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 67px;

  &:hover {
    filter: brightness(45%);
    cursor: pointer;
  }
`;

const Text = styled.p`
  position: absolute;
  font-size: 25px;
  font-weight: bold;
  line-height: 1.31;
  letter-spacing: 3.25px;
  color: #ffffff;
  text-align: center;
`;

export default function DishImage({ dish, handleOpen }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
      onClick={() => handleOpen(dish)}
    >
      <Image src={dish.image} />
      {isHover && (
        <Text>
          {dish.name}
          <br />
          {dish.price}
        </Text>
      )}
    </Container>
  );
}
