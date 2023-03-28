import React, { useState, useEffect } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { Header, Slider, ProductsList, ShopCart } from "@/Components";
import styled from "styled-components";


const App = () => {

  const {lockScroll, unlockScroll} = useScrollLock();

  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const handelCart = () => {
    cartOpened ? (setCartOpened(false), unlockScroll()) : (setCartOpened(true), lockScroll());
  }

  useEffect(() => {
    fetch("https://6422bf7677e7062b3e219a4d.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <StyledWrapper>
      <Header cartOpen={handelCart}/>
      <Slider />
      <ProductsList items={products}/>
      {cartOpened && <ShopCart items={cartProducts} cartClose={handelCart}/>}
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
