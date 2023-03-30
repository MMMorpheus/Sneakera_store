import styled, { css } from "styled-components";

// Positioning presets

export const flexnCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
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

export const listPositioning = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Page = styled.section`
  ${blockWidth};
  min-height: 600px;
  display: flex;
  flex-direction: column;
  & > h2 {
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
  }
  & > ul {
    ${listPositioning};
  }
`;

export const EmptyPage = styled.section`
  min-height: 600px;
  ${flexnCenter};
  flex-direction: column;
  text-align: center;
  & > img {
    margin-bottom: 24px;
  }
  & > h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    margin-bottom: 11px;
  }
  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    opacity: 0.4;
    margin-bottom: 41px;
  }
  & div {
    ${greenBtn};
    ${flexnCenter};
    position: relative;
  }
  & div > svg {
    position: absolute;
    top: 21px;
    left: 29px;
  }
`;
