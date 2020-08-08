/** @format */

import React from "react";
import logo from "./logo.svg";
import Header from "./Header";
import Middle from "./Middle";
import Bottom from "./Bottom";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: #f4f4f4;
  width: 23rem;
  height: 37rem;
  border-radius: 1rem;
  box-shadow: -7px -7px 10px 0px #fff9, -4px -4px 3px 0px #fff9, 7px 7px 10px 0px #0002, 4px 4px 3px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001;
`;

function App() {
  return (
    <CardWrapper>
      <Header />
      <Middle />
      <Bottom />
    </CardWrapper>
  );
}

export default App;
