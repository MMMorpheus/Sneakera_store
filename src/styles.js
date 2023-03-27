import { css } from "styled-components";

// Positioning presets

export const alignCenter = css`
  display: flex;
  align-items: center;
`;
export const justifyBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const blockWidth = css`
  width: calc(100% - 120px);
  margin: 45px auto;
`;

// Typography

export const priceTypography = css`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const modelNamingTypograhy = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

export const cardActionBtn = css`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const greenBtn = css`
  height: 55px;
  width: 325px;
  border: none;
  border-radius: 18px;
  color: #fff;
  background-color: #9dd458;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
`;
