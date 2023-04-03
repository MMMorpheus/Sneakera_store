import React, { useEffect, useReducer } from "react";
import { Header, ShopCart } from "@/Components";

import AppContext from "@/Context";
import reducer from "./reducer";
import * as actions from "./actions";
import initialState from "./state";

import { Outlet } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

import styled from "styled-components";

const App = () => {
  const [state, dispach] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      dispach(actions.loading(true));

      const cartProducts = await axios.get("/cart");
      const favouriteProducts = await axios.get("/favourite");
      const allProducts = await axios.get("/products");
      const allOrders = await axios.get("/orders");

      dispach(actions.loading(false));

      dispach(actions.getCartProducts(cartProducts.data));
      dispach(actions.getFavouriteProducts(favouriteProducts.data));
      dispach(actions.getAllProducts(allProducts.data));
      dispach(actions.getOrdersProducts(allOrders.data));
    }

    try {
      getData();
    } catch (e) {
      alert(e);
    }
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
