import React from 'react';
import { Header } from '@/Components';
import styled from 'styled-components';



const App = () => {
  return (
    <StyledWrapper>
      <Header />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  width: 1080px;
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
`

export default App;
