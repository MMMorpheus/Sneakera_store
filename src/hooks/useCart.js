import { useState, useContext } from "react";
import { useScrollLock } from "@/hooks";

import AppContext from "@/Context";
import { handleCart, clearCart, makeAnOrder } from "@/actions";

import axios from "axios";

const useCart = () => {
  const {
    state: { cartProducts, isCartOpened },
    dispach,
  } = useContext(AppContext);

  const [orderID, setOrderID] = useState(0);
  const [isOrdered, setIsordered] = useState(false);

  const { lockScroll, unlockScroll } = useScrollLock();

  const total = cartProducts.length
    ? cartProducts.reduce((acum, cur) => acum + cur.price, 0)
    : 0;

  const handleCartView = () => {
    if (isCartOpened) {
      unlockScroll();
      dispach(handleCart(!isCartOpened));
    } else {
      lockScroll();
      dispach(handleCart(!isCartOpened));
    }
  };

  const createOrder = () => {
    setOrderID((prev) => prev + 1);
    return {
      id: orderID,
      createdAt: new Date(),
      products: [...cartProducts],
    };
  };

  const makeOrder = async () => {
    try {
      const { data } = await axios.post("/orders", createOrder());
      dispach(makeAnOrder(data));
      for (let i = 0; i < cartProducts.length; i++) {
        const product = cartProducts[i];
        await axios.delete(`/cart/${product.id}`);
      }
      dispach(clearCart([]));
      setIsordered(true);
    } catch (error) {
      console.log(error);
    }
  };

  return { cartProducts, handleCartView, makeOrder, isOrdered, total };
};

export default useCart;
