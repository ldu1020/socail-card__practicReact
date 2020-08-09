/** @format */

import React from "react";
import personImg from "./person.png";
import styled from "styled-components";

const PersonImg = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
`;

const ImgWrapper1 = styled.div`
  width: 10.6rem;
  height: 10.6rem;
  border-radius: 50%;
  background: rgb(207, 148, 63);
  background: linear-gradient(20deg, rgba(207, 148, 63, 1) 6%, rgba(185, 77, 54, 1) 47%, rgba(190, 38, 175, 1) 88%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper2 = styled.div`
  width: 9.8rem;
  height: 9.8rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TitleImg() {
  return (
    <ImgWrapper1>
      <ImgWrapper2>
        <PersonImg src={personImg} alt="person" />
      </ImgWrapper2>
    </ImgWrapper1>
  );
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;
  justify-content: center;
`;

const PopularIndex = styled.div`
  display: flex;
`;

const H1 = styled.h1`
  font-size: 1.3rem;
  margin: 0;
`;
const H3 = styled.h3`
  font-size: 13px;
  margin: 0;
  text-align: center;
`;

const GrayP = styled.p`
  color: gray;
  margin: 0 0 12px 0;
`;

const GraySmallP = styled.p`
  color: gray;
  font-size: 12px;
  margin: 0;
  text-align: center;
  margin: 0px 5px 12px 5px;
`;

const Button = styled.button`
  width: 100%;
  height: 1.5rem;
  color: white;
  background-color: #3391e3;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  outline: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

function TitleInfo() {
  return (
    <TitleBox>
      <div>
        <H1>
          Lee
          <br />
          Dong
        </H1>
        <GrayP>@plowerbee</GrayP>
      </div>
      <PopularIndex>
        <div>
          <H3>High</H3>
          <GraySmallP>Engagement</GraySmallP>
        </div>
        <div>
          <H3>Devoted</H3>
          <GraySmallP>Following</GraySmallP>
        </div>
      </PopularIndex>
      <div>
        <Button>Let's Talk</Button>
      </div>
    </TitleBox>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  height: 30%;
  align-items: center;
  vertical-align: middle;
`;

export default function Header() {
  return (
    <HeaderDiv className="header">
      <TitleImg />
      <TitleInfo />
    </HeaderDiv>
  );
}
