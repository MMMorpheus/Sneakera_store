import styled from 'styled-components';

export const Overlay = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Cart = styled.aside`
  width: 420px;
  height: 100%;
  background-color: #fff;
  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin-bottom: 30px;
  }
`;
