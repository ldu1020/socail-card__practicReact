/** @format */

import React from "react";
import Header from "./Header";
import Middle from "./Middle";
import Bottom from "./Bottom";
import styled, { createGlobalStyle } from "styled-components";

const CardWrapper = styled.div`
  background-color: #f4f4f4;
  width: 23rem;
  height: 37rem;
  border-radius: 1rem;
  box-shadow: -2px -2px 0.5px 0px #fff9, -0.5px -0.5px 5px 0px #fff9, 4px 4px 3px 0px #0002, 2px 2px 1px 0px #0001,
    inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001;
`;

const GlobalStyle = createGlobalStyle`
body {
  background-color: #efeae3;
  margin: 0;
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

`;

function SnsCard() {
  return (
    <div>
      <GlobalStyle />
      <CardWrapper>
        <Header />
        <Middle />
        <Bottom />
      </CardWrapper>
    </div>
  );
}

export default SnsCard;
