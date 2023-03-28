import styled, { css } from "styled-components";
import {
  justifyBetween,
  priceTypography,
  modelNamingTypograhy,
  cardActionBtn,
} from "@/styles";

export const Card = styled.li`
  width: 210px;
  height: 260px;
  padding: 20px 25px 25px 33px;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
  ${justifyBetween};
  flex-direction: column;
  position: relative;
  transition: scale 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
  }
  & > button {
    ${cardActionBtn};
    position: absolute;
    top: 30px;
    left: 30px;
    & > svg {
      width: 18px;
      height: 18px;
      color: #bdbdbd;
      transition: all 0.5s ease;
    }
  }
  & > button:hover > svg {
    color: red;
    scale: 1.1;
  }

  & > div:first-child {
    height: 112px;
    width: 133px;
    align-self: center;
  }
  & > p {
    ${modelNamingTypograhy}
  }
  & > div:last-child {
    width: 100%;
    ${justifyBetween};
  }
  & > div:last-child p {
    ${priceTypography};
  }
  & span {
    display: block;
    font-size: 11px;
    font-weight: 500;
    line-height: 13px;
    text-transform: uppercase;
    color: #bdbdbd;
  }
  & > div:last-child > button {
    ${cardActionBtn};
    ${(props) =>
      props.$isAdded ||
      css`
        background: linear-gradient(180deg, #89f09c 0%, #3cc755 100%);
      `}
  }
  & > div:last-child > button > svg {
    width: 14px;
    height: 14px;
    color: #d3d3d3;
    transition: color 0.5s ease, scale 0.5s ease;
  }
  & > div:last-child > button:hover > svg {
    color: black;
    scale: 1.1;
  }
`;