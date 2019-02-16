import React, { Component } from "react";
import styled from "@emotion/styled";
import jsimage from "../../assets/jsimage.png";
import Nav from "../layout/NavBar/Nav";

export default class HeaderHome extends Component {
  render() {
    return (
      <Container>
        <SubContainer>
          <Img src={jsimage} alt="background of javascript logo" />
          <Title>Colorado JavaScript Project and Study Group</Title>
        </SubContainer>
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Container = styled.div`
  height: 600px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SubContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Title = styled.h1`
  color: #fff;
  padding-bottom: 100px;
  padding-right: 150px;
  width: 500px;
  z-index: 1;
`;
// could probably use object-fit css property to do this background image better. also need a better res image.
const Img = styled.img`
  position: absolute;
  height: 500px;
  width: 100%;
`;
