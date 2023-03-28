import React from "react";
import * as C from "./style";

import { ShopCartList } from "@/Components";

const ShopCart = ({ products }) => {
  return (
    <C.Overlay>
      <C.Cart>
        <h2>Кошик</h2>
        <ShopCartList />
        <div>
          <C.Line>
            <span>Загалом:</span>
            <div></div>
            <p>1250 грн.</p>
          </C.Line>
          <C.Line>
            <span>ПДВ 20%:</span>
            <div></div>
            <p>250 грн.</p>
          </C.Line>
          <button>
            Оформити замовлення
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path
                d="M1 7H14.7143"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </C.Cart>
    </C.Overlay>
  );
};

export default ShopCart;
