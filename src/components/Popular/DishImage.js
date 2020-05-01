import React from 'react';
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

  @media (max-width: 414px) {
    width: 92px;
    height: 91px;
    border-radius: 15px;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  border-radius: 67px;

  ${Container}:hover & {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${(props) => props.image});
    cursor: pointer;
  }

  @media (max-width: 414px) {
    border-radius: 15px;
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
  display: none;

  ${Container}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export default function DishImage({ dish, handleOpen }) {
  return (
    <Container onClick={() => handleOpen(dish)}>
      <Image image={dish.image} />
      <Text onClick={() => handleOpen(dish)}>
        {dish.name}
        <br />
        {dish.price}
      </Text>
    </Container>
  );
}
