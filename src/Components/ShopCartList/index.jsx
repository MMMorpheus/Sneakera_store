import React from "react";
import { ShopCartItem } from "@/Components";

import styled from 'styled-components';


const ShopCartList = ({items}) => {
  return (
    <ShopList>
      {items?.map((product) => {
        return <ShopCartItem key={product.id} item={product} />;
      })}
    </ShopList>
  );
};


const ShopList  = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export default ShopCartList;
