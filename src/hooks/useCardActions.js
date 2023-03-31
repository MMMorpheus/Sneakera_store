import { useState, useContext } from "react";

import AppContext from "@/Context";
import {
  addToCart,
  removeFromCart,
  addToFavourites,
  removeFromFavourites,
} from "@/actions";

import axios from "axios";

export const useCardActions = () => {
  const {
    state: { cartProducts, favouriteProducts },
    dispach,
  } = useContext(AppContext);

  const handleCartItem = async (obj) => {
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
  };

  const handleFavouriteItem = async (obj) => {
    const { id } = obj;
    console.log(favouriteProducts.find((catrObj) => catrObj.id === id));
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
  };

  return { handleCartItem, handleFavouriteItem };
};
