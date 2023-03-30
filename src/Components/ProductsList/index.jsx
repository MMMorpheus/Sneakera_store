import React, { useContext } from "react";
import { ProductCard } from "@/Components";

import AppContext from "@/Context";
import { setSearchValue} from "@/actions";

import styled from "styled-components";
import { blockWidth, justifyBetween, listPositioning } from "@/styles";

const ProductsList = () => {
  const {
    state: { allProducts, searchValue },
    dispach,
  } = useContext(AppContext);

  return (
    <List>
      <div>
        <h1>
          {searchValue ? `Пошук за запитом: "${searchValue}"` : "Усі кросівки"}
        </h1>
        <label>
          <input
            type="text"
            placeholder="Пошук.."
            value={searchValue}
            onChange={(e) => {
              dispach(setSearchValue(e.target.value));
            }}
          />
          <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                stroke="#E4E4E4"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </label>
      </div>
      <ul>
        {allProducts &&
          allProducts
            .filter((item) =>
              item.model.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              );
            })}
      </ul>
    </List>
  );
};

const List = styled.section`
  ${blockWidth}
  flex: 1;
  margin-top: auto;
  & > div {
    ${justifyBetween}
    margin-bottom: 40px;
  }
  & > div > h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
  }
  & > div > label {
    position: relative;
  }
  & > div input {
    width: 250px;
    height: 45px;
    border: 1px solid #f3f3f3;
    border-radius: 10px;
    text-indent: 46px;
  }
  & > div > input::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #d4d4d4;
  }
  & > div div {
    position: absolute;
    top: 30%;
    left: 17px;
  }
  & > ul {
    ${listPositioning};
  }
`;

export default ProductsList;
