/** @format */

import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  color: #3391e3;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: cetner;
  border-top: 1px solid #c1c1c1;
  margin: 0;
  padding: 10px;
  transition: all 0.3s;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const H3Wrapper = styled.div`
  padding: 0 10px;
  border-bottom: 1px solid #c1c1c1;
`;

function BottomInfo() {
  return (
    <H3Wrapper>
      <H3>Katiepeterson.com|fashiondose.com</H3>
      <H3>+1.618.832.7893</H3>
      <H3>katieperterson@email.com</H3>
      <H3>PO Box 4206, New York,YY 10001</H3>
    </H3Wrapper>
  );
}

const Icon = styled.i`
  font-size: 1.8rem;
  color: gray;
  transition: all 0.3s;

  &:hover {
    color: #3391e3;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

function Footer() {
  return (
    <FooterDiv>
      <Icon className="fas fa-th"></Icon>
      <Icon className="far fa-square"></Icon>
      <Icon className="far fa-user"></Icon>
    </FooterDiv>
  );
}

export default function Bottom() {
  return (
    <div>
      <BottomInfo />
      <Footer />
    </div>
  );
}
