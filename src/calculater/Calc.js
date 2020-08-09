/** @format */

import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  width:100%;
  height:100vh;
  background-color:#ffd9b0;
  padding: 0;
  margin: 0;
  display:flex;
  justify-content: center;
  align-items: center;
}

button {
  cursor: pointer;
  outline: none;
}
`;

const NumberZone = styled.div`
  width: 300px;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0;
`;

const Display = styled.div`
  width: 100%;
  height: 100px;
  grid-column-start: 1;
  grid-column-end: 5;
  background-color: #433437;
  position: relative;
  margin: 0;
`;

const ClearBtn = styled.button`
  grid-column-start: 1;
  grid-column-end: 3;
  border: 0.1px solid #433437;
  font-size: 30px;
  background-color: #fff;
  color: #494949;
  transition: 0.3s;
  &:active {
    background-color: orange;
`;

const NumBtn = styled.button`
  border: 0.1px solid #433437;
  font-size: 40px;
  background-color: ${(props) => (props.clac ? "#d12c4d" : "#fff")};
  color: #494949;
  transition: 0.3s;
  &:active {
    background-color: orange;
  }
`;

const OutputZone = styled.span`
  color: #fff;
  font-size: 40px;
  position: absolute;
  top: 50%;
`;

const OutputState = styled.span`
  color: #fff;
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
`;

export default function Calc() {
  const [output, setOutput] = useState({
    mainState: "",
    subState: "",
  });

  const outputRef = useRef();
  const { mainState, subState } = output;

  const getValue = (e) => {
    let value = e.target.textContent;

    setOutput({
      mainState: mainState + value,
      subState: subState + value,
    });

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOutput({
        mainState: "",
        subState: subState + value,
      });
    } else if (value === "=") {
      setOutput({
        mainState: eval(subState) || "nan",
        subState: eval(subState),
      });
    } else if (value === "clear") {
      setOutput({
        mainState: "",
        subState: "",
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <NumberZone>
        <Display>
          <OutputState>{output.subState}</OutputState>
          <OutputZone ref={outputRef}>{output.mainState}</OutputZone>
        </Display>
        <ClearBtn onClick={getValue}>clear</ClearBtn>
        <NumBtn clac onClick={getValue}>
          =
        </NumBtn>
        <NumBtn clac onClick={getValue}>
          +
        </NumBtn>
        <NumBtn onClick={getValue}>1</NumBtn>
        <NumBtn onClick={getValue}>2</NumBtn>
        <NumBtn onClick={getValue}>3</NumBtn>
        <NumBtn clac onClick={getValue}>
          -
        </NumBtn>
        <NumBtn onClick={getValue}>4</NumBtn>
        <NumBtn onClick={getValue}>5</NumBtn>
        <NumBtn onClick={getValue}>6</NumBtn>
        <NumBtn clac onClick={getValue}>
          *
        </NumBtn>
        <NumBtn onClick={getValue}>7</NumBtn>
        <NumBtn onClick={getValue}>8</NumBtn>
        <NumBtn onClick={getValue}>9</NumBtn>
        <NumBtn clac onClick={getValue}>
          /
        </NumBtn>
      </NumberZone>
    </>
  );
}
