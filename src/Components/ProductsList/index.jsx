import React from "react";
import { ProductCard } from "@/Components";
import styled from "styled-components";
import { blockWidth } from "@/styles";

import { items } from "@/items";

const ProductsList = ({ children }) => {
  return (
    <List>
      <ul>
        {items.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </ul>
    </List>
  );
};

const List = styled.section`
  ${blockWidth}
  height: 600px;
  padding: 10px;
  border: 1px solid black;
  & > ul {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default ProductsList;
