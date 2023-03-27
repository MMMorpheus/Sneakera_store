import styled from "styled-components";
import { justifyBetween, priceTypography, greenBtn } from "@/styles";

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
  ${justifyBetween};
  flex-direction: column;
  & > h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin-bottom: 30px;
  }
  & > div {
    margin-top: auto;
  }
  & > div > button {
    ${greenBtn}
    position: relative;
  }
  & > div > button > svg {
    position: absolute;
    right: 29px;
    top: 21px;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 19px;
  & span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }
  & > div {
    flex: 1;
    margin-inline: 8px;
    height: 13px;
    border-bottom: 2px dotted #dfdfdf;
  }
  & p {
    ${priceTypography}
  }
`;
