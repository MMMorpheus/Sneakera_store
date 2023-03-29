import React, { useState, useEffect } from "react";
import axios from "axios";
import { useScrollLock } from "@/hooks/useScrollLock";
import { Header, Slider, ProductsList, ShopCart } from "@/Components";
import styled from "styled-components";

const App = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [cartOpened, setCartOpened] = useState(false);

  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  

  const handleCart = () => {
    cartOpened
      ? (setCartOpened(false), unlockScroll())
      : (setCartOpened(true), lockScroll());
  };

  const addToCart = (item) => {
    setCartProducts((prev) => [...prev, item]);
    axios.post("https://6422bf7677e7062b3e219a4d.mockapi.io/api/v1/cart", item);
  };

  const removeFromCart = (id) => {
    setCartProducts(cartProducts.filter( item => item.id !== id ));
    axios.delete(`https://6422bf7677e7062b3e219a4d.mockapi.io/api/v1/cart/${id}`)
  };

  const addToFavourites = () => {
    console.log("Add to favourites");
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }
  
  useEffect(() => {
    axios.get("https://6422bf7677e7062b3e219a4d.mockapi.io/api/v1/products")
      .then((res) => setProducts(res.data));
  }, []);
  useEffect(() => {
    axios.get("https://6422bf7677e7062b3e219a4d.mockapi.io/api/v1/cart")
      .then((res) => setCartProducts(res.data));
  }, []);

  return (
    <StyledWrapper>
      <Header cartOpen={handleCart} total={0} />
      <Slider />
      <ProductsList
        searchValue={searchValue}
        handleInput={handleSearch}
        items={products}
        addCartBtn={addToCart}
        addFavouritesBtn={addToFavourites}
      />
      {cartOpened && (
        <ShopCart
          items={cartProducts}
          cartClose={handleCart}
          removeCartBtn={removeFromCart}
          total={0}
        />
      )}
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
