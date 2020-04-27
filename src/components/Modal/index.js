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
`;

export default function Modal({ image, close, size }) {
  return (
    <Outer onClick={close}>
      <Inner src={image} size={size} />
    </Outer>
  );
}
