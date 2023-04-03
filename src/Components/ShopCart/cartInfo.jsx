import React from "react";
import * as C from "./style";

const CartInfo = ({ title, desc, imgUrl, onClick }) => {
  return (
    <C.Empty>
      <img width={120} height={120} src={imgUrl} alt="Empty cart" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <button onClick={onClick}>
        Повернутись
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path
            d="M14.7144 7L1.00007 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13L1 7L7 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </C.Empty>
  );
};

export default CartInfo;
