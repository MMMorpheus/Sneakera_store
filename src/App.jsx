import React, { useState, useEffect, useReducer } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { Header, ShopCart } from "@/Components";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import reducer from "./reducer";
import * as actions from "./actions";
import initialState from "./state";

import AppContext from "@/Context";

const App = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  // const [cartOpened, setCartOpened] = useState(false);

  const [state, dispach] = useReducer(reducer, initialState);

  // const handleCart = () => {
  //   cartOpened
  //     ? (setCartOpened(false), unlockScroll())
  //     : (setCartOpened(true), lockScroll());
  // };

  const addToCart = (item) => {
    setCartProducts((prev) => [...prev, item]);
    axios.post("https://6422bf7677e7062b3e219a4d.mockapi.io/api/v1/cart", item);
  };

  // const removeFromCart = (id) => {
  //   setCartProducts(cartProducts.filter((item) => item.id !== id));
  //   axios.delete(
  //     `https://6422bf7677e7062b3e219a4d.mockapi.io/api/v1/cart/${id}`
  //   );
  // };

  const addToFavourites = () => {
    console.log("Add to favourites");
  };

  useEffect(() => {
    async function getData() {
      const cartProducts = await axios.get("/cart");
      const favouriteProducts = await axios.get("/favourite");
      const allProducts = await axios.get("/products");

      dispach(actions.getCartProducts(cartProducts.data));
      dispach(actions.getFavouriteProducts(favouriteProducts.data));
      dispach(actions.getAllProducts(allProducts.data));
    }
    getData();
  }, []);

  return (
    <StyledWrapper>
      <AppContext.Provider value={{ state, dispach }}>
        <Header />
        {state.isCartOpened && <ShopCart />}
        <Outlet />
      </AppContext.Provider>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

export default App;
