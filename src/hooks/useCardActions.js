import { useCallback, useContext } from "react";

import AppContext from "@/Context";
import {
  addToCart,
  removeFromCart,
  addToFavourites,
  removeFromFavourites,
} from "@/actions";

import axios from "axios";

const useCardActions = () => {
  const {
    state: { cartProducts, favouriteProducts },
    dispach,
  } = useContext(AppContext);

  const handleCartItem = useCallback(async (obj) => {
    const { id } = obj;
    try {
      if (cartProducts.find((catrObj) => catrObj.id === id)) {
        await axios.delete(`/cart/${id}`);
        dispach(removeFromCart(id));
      } else {
        const { data } = await axios.post(`/cart`, obj);
        dispach(addToCart(data));
      }
    } catch (error) {
      alert(error);
    }
  });

  const handleFavouriteItem = useCallback(async (obj) => {
    const { id } = obj;
    try {
      if (favouriteProducts.find((catrObj) => catrObj.id === id)) {
        await axios.delete(`/favourite/${id}`);
        dispach(removeFromFavourites(id));
      } else {
        const { data } = await axios.post(`/favourite`, obj);
        dispach(addToFavourites(obj));
      }
    } catch (e) {
      alert(e);
    }
  });

  return { handleCartItem, handleFavouriteItem };
};

export default useCardActions;
