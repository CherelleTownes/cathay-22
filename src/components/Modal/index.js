import React from 'react';
import styled from 'styled-components';

import Pdf from '../Pdf';

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 731px;
  width: 599px;
  object-fit: cover;
  border-radius: 40px;

  @media (max-width: 414px) {
    position: fixed;
    width: 256px;
    height: 312px;
    border-radius: 45px;
  }
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

  @media (max-width: 414px) {
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.45);
    font-size: 15px;
    font-weight: bold;
    line-height: 1.31;
    letter-spacing: 1.95px;
    color: #e5e5e5;
  }
`;

export default function Modal({ image, close, dish }) {
  return (
    <Outer onClick={close}>
      {dish ? (
        <>
          <Image src={image} />
          <ModalText>
            {dish.name}
            <br />
            {dish.price}
          </ModalText>
        </>
      ) : (
        <Pdf pdf={image} />
      )}
    </Outer>
  );
}
