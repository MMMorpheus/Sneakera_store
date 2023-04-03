import styled from "styled-components";
import {
  alignCenter,
  justifyBetween,
  priceTypography,
  greenBtn,
  cardActionBtn,
} from "@/styles";

export const Overlay = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
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

  & > div:first-child {
    ${justifyBetween};
  }
  & > div:first-child > h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin-bottom: 30px;
  }
  & > div:first-child > button {
    ${cardActionBtn};
  }
  & > div:first-child > button svg {
    color: #b5b5b5;
    transition: color 0.5s ease, scale 0.5s ease;
  }
  & > div:first-child > button:hover > svg {
    color: black;
    scale: 1.1;
  }
  & > div:last-child {
    margin-top: auto;
  }
  & > div:last-child > button {
    ${greenBtn}
    position: relative;
  }
  & > div:last-child > button > svg {
    position: absolute;
    right: 29px;
    top: 21px;
  }
`;

export const ShopList  = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  overflow: auto;
`

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

export const Empty = styled.div`
  ${alignCenter};
  flex-direction: column;
  flex: 1;
  margin-top: 200px !important;
  & > img {
    margin-bottom: 21px;
  }
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    margin-bottom: 10px;
  }
  & > p {
    max-width: 300px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    opacity: 0.4;
    margin-bottom: 40px;
  }
  & > button {
    width: 245px !important;
    position: relative;
  }
  & > button > svg {
    position: absolute;
    top: 21px;
    left: 29px;
}
`;
