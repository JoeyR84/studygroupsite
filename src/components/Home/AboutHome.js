import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import COjs from "../../assets/COjs.png";
export default class AboutHome extends Component {
  render() {
    return (
      <Container>
        <AboutContainer>
          <Title>Who are we?</Title>
          <TopContainer>
            <ImgDiv>
              <Img src={COjs} alt="our logo for CO.js" />
            </ImgDiv>
            <ParContainer>
              <Par>
                We are a group of junior developers who get together to help
                each other learn, work on open-source projects, and hangout.
                Want to learn more about what we are about, what we do, or how
                to get involved? Great! Click the link below!
              </Par>
            </ParContainer>
          </TopContainer>
          <Link to="/About">Learn More</Link>
        </AboutContainer>
        <TechContainer>
          <TechTitle>Things that we learn:</TechTitle>
          <TechDiv>
            <TechList>
              <TechItem>JavaScript</TechItem>
              <TechItem>React</TechItem>
              <TechItem>Vue</TechItem>
            </TechList>
            <TechList>
              <TechItem>Redux</TechItem>
              <TechItem>GraphQL</TechItem>
              <TechItem>Native Mobile Apps</TechItem>
            </TechList>
            <TechList>
              <TechItem>JAM Stack</TechItem>
              <TechItem>MERN Stack</TechItem>
              <TechItem>and more!</TechItem>
            </TechList>
          </TechDiv>
        </TechContainer>
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Title = styled.h1`
  color: #000;
  align-self: center;
`;
const Container = styled.div`
  height: 600px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AboutContainer = styled.div`
  display: flex;
  height: 350px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
`;
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 45px;
`;
const ParContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TechContainer = styled.div`
  display: flex;
  background-color: #f0f2a6;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TechDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 150px;
  padding-right: 150px;
  width: 100%;
`;
const TechTitle = styled.h3``;
const TechList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const TechItem = styled.li`
  padding: 7px;
`;
const Img = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
`;
const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
`;
const Par = styled.p`
  font-size: 20px;
  color: #000;
`;
