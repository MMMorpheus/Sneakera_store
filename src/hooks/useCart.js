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

  const { unlockScroll } = useScrollLock();

  // const getTotalPrice = cartProducts && cartProducts.reduce((acum, cur) => {
  //   (acum + cur.price), 0
  // })

  const onCloseCart = () => {
    unlockScroll();
    dispach(handleCart(!isCartOpened));
  };

  const createOrder = async () => {
    setOrderID(prev => prev + 1);
    const order = {
      id: orderID,
      createdAt: new Date(),
      products: [...cartProducts],
    };
    try {
      const {data} = await axios.post("/orders", order);
      dispach(makeAnOrder(data));
      for (let i = 0; i < cartProducts.length; i++) {
        const product = cartProducts[i];
        await axios.delete(`/cart/${product.id}`);
      }
      dispach(clearCart([]));
      setIsordered(true)
      console.log(orderID)
    } catch (error) {
      console.log(error);
    }
  };
  
  return { cartProducts, onCloseCart, createOrder, orderID, isOrdered };
};

export default useCart;
