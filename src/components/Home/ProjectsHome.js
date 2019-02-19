import React, { Component } from "react";
import styled from "@emotion/styled";
import cojs from "../../assets/COjs.png";
import Project from "./Project";
export default class ProjectsHome extends Component {
  state = {
    projectDocLink:
      "https://docs.google.com/spreadsheets/d/1FJI_td4uxTPaLpxDB704zghNhy9BLfzZ7HuVk8byv14/edit#gid=0"
    // hovered: false
  };

  onButtonClick = () => {
    window.open(this.state.projectDocLink);
  };

  render() {
    return (
      <Container>
        <Title>Our Projects</Title>
        <ProjectsContainer>
          <Project
            link="github.com"
            desc="here is the first description for my example project"
            title="Example Project One"
          />
          <Project
            link="github.com"
            desc="here is the first description for my other example project"
            title="This Site"
          />
          <Project
            link="github.com"
            desc="here is the first description for another example project"
            title="Example Project Two"
          />
        </ProjectsContainer>
        <Button onClick={this.onButtonClick}>
          Click here to open projects doc
        </Button>
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Title = styled.h2`
  color: #000;
  justify-self: flex-start;
`;
const Container = styled.div`
  display: flex;
  height: 550px;
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 30px;
`;
const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px;
  justify-content: space-evenly;
`;

const Button = styled.div`
  width: 220px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  padding: 8px;
`;
