import React from 'react';
import styled from 'styled-components';

import Pdf from '../Pdf';

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Shim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
`;

const Image = styled.img`
  position: absolute;
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
    letter-spacing: 1.95px;
    color: #e5e5e5;
  }
`;

export default function Modal({ image, close, dish }) {
  return (
    <Outer>
      <Shim onClick={close} />
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
