import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.img`
  height: ${(props) => props.size.height};
  width: ${(props) => props.size.width};
  object-fit: cover;

  ${(props) => props.isDish && 'border-radius: 40px;'}
`;

const ModalText = styled.p`
  position: absolute;
  font-size: 25px;
  font-weight: bold;
  line-height: 1.31;
  letter-spacing: 3.25px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function Modal({ image, close, size, dish }) {
  return (
    <Outer onClick={close}>
      <Inner src={image} size={size} isDish={dish} />
      {dish && (
        <ModalText>
          {dish.name}
          <br />
          {dish.price}
        </ModalText>
      )}
    </Outer>
  );
}
