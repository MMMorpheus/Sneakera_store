import React from 'react';
import { Header, Slider, ProductsList, ShopCart } from '@/Components';
import styled from 'styled-components';



const App = () => {
  return (
    <StyledWrapper>
      <Header />
      {/* <Slider /> */}
      <ProductsList />
      {/* <ShopCart /> */}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`

export default App;
