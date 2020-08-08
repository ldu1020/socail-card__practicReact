/** @format */

import React from "react";
import styled from "styled-components";

const gradi = `linear-gradient(20deg, rgba(207, 148, 63, 1) 6%, rgba(185, 77, 54, 1) 47%, rgba(190, 38, 175, 1) 88%);
`;

const H3 = styled.h3`
  font-size: 14px;
  margin: 1px;
`;
const P = styled.p`
  font-size: 14px;
  margin: 1px;
`;

function MiddleTitle() {
  return (
    <div>
      <div>
        <H3>Fashion Blogger|Travel and Lifestyle|Make up</H3>
      </div>
      <div>
        <P>
          Owner of @fashiondosebykatie #fashiondose <br />
          Fashion Writer,Brand Ambassador, Content Createor{" "}
        </P>
      </div>
    </div>
  );
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 16px 12px;
`;

const Icon = styled.i`  
width:2.5rem;
height:2.5rem;  
display:flex;
justify-content: center;
align-items: center;
background: rgb(207, 148, 63);
  background:${gradi}
  -webkit-background-clip: text;
  background-clip: text,border;
  color: transparent;
  font-size: 1.5rem;
  border: 2px solid rgb(207, 148, 63);
  border-radius: 50%;
  
`;

const SmallP = styled.p`
  font-size: 9px;
  margin: 1px;
  font-weight: bolder;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MiddleIcon() {
  return (
    <IconWrapper>
      <IconItem>
        <Icon className="fas fa-shopping-basket"></Icon>
        <SmallP>
          Affiliate
          <br />
          Program
        </SmallP>
      </IconItem>
      <IconItem>
        <Icon className="fas fa-volume-up"></Icon>
        <SmallP>
          Sponsorship
          <br />
          and Ads
        </SmallP>
      </IconItem>
      <IconItem>
        <Icon className="fas fa-camera-retro"></Icon>
        <SmallP>
          Content
          <br />
          Creation
        </SmallP>
      </IconItem>
      <IconItem>
        <Icon className="fas fa-microphone-alt"></Icon>
        <SmallP>
          Speaking
          <br />
          Engagements
        </SmallP>
      </IconItem>
    </IconWrapper>
  );
}

const MiddleDiv = styled.div`
  width: 100%;
  hight: 25%;
  text-align: center;
`;

export default function Middle() {
  return (
    <MiddleDiv>
      <MiddleTitle />
      <MiddleIcon />
    </MiddleDiv>
  );
}
