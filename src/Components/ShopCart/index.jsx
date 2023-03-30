import React, { useContext } from "react";
import * as C from "./style";
import empty from "@/assets/empty_cart.png";

import { ShopCartItem } from "@/Components";

import AppContext from "@/Context";
import { handleCart, removeFromCart } from "@/actions";

import axios from "axios";

const ShopCart = () => {
  const {
    state: { cartProducts, isCartOpened },
    dispach,
  } = useContext(AppContext);

  const clickToCloseCart = () => {
    dispach(handleCart(!isCartOpened));
  };

  const clickToRemoveFromCart = (id) => {
    axios.delete(`cart/${id}`)
    dispach(removeFromCart(id));
  }

  const getTotalPrice = cartProducts.reduce((acum, cur) => {
    acum + cur.price
  }, 0)

  return (
    <C.Overlay>
      <C.Cart>
        <div>
          <h2>Кошик</h2>
          <button onClick={clickToCloseCart}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" />
            </svg>
          </button>
        </div>
        {console.log(cartProducts)}
        {!cartProducts.length ? (
          <C.Empty>
            <img width={120} height={120} src={empty} alt="Empty cart" />
            <h2>Кошик порожній</h2>
            <p>
              Додайте хоча б одну пару кросівок, для того, щоб зробити
              замовлення
            </p>
            <button onClick={clickToCloseCart}>
              Повернутись
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            </button>{" "}
          </C.Empty>
        ) : (
          <>
            <C.ShopList>
              {cartProducts.map((product) => {
                return (
                  <ShopCartItem
                    // key={product.id}
                    item={product}
                    onRemove={clickToRemoveFromCart}
                  />
                );
              })}
            </C.ShopList>
            <div>
              <C.Line>
                <span>Загалом:</span>
                <div></div>
                <p>{getTotalPrice}грн.</p>
              </C.Line>
              <C.Line>
                <span>ПДВ 20%:</span>
                <div></div>
                <p>{getTotalPrice * 0.2} грн.</p>
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
          </>
        )}
      </C.Cart>
    </C.Overlay>
  );
};

export default ShopCart;
