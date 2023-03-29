import React from "react";
import { ShopCartItem } from "@/Components";

import styled from 'styled-components';


const ShopCartList = ({list=[], remove}) => {
  return (
    <ShopList>
      {list.map((product) => {
        return <ShopCartItem key={product.id} item={product} onRemove={remove}/>;
      })}
    </ShopList>
  );
};


const ShopList  = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  overflow: auto;
`
export default ShopCartList;
