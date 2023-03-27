import React from "react";
import * as C from "./style"

import {ShopCartList} from "@/Components"

const ShopCart = ({ products }) => {
  return (
    <C.Overlay>
      <C.Cart>
        <h2>Кошик</h2>
        <ShopCartList />
      </C.Cart>
    </C.Overlay>
  );
};

export default ShopCart;
