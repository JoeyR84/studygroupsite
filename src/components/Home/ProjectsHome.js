import React, { Component } from "react";
import styled from "@emotion/styled";

export default class ProjectsHome extends Component {
  state = {
    projectDocLink:
      "https://docs.google.com/spreadsheets/d/1FJI_td4uxTPaLpxDB704zghNhy9BLfzZ7HuVk8byv14/edit#gid=0"
  };

  onButtonClick = () => {
    window.open(this.state.projectDocLink);
  };

  // TODO Make the project card its own component with a sweet animation that shows you the description. Also make a carousel to show more projects for when we have more stuff to display. This should pull data from the github api.

  render() {
    return (
      <Container>
        <Title>Our Projects</Title>
        <ProjectsContainer>
          <Card>
            <CardImg />
            <CardTitle>Project Title</CardTitle>
          </Card>
          <Card>
            <CardImg />
            <CardTitle>Project Title</CardTitle>
          </Card>
          <Card>
            <CardImg />
            <CardTitle>Project Title</CardTitle>
          </Card>
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
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  border: 1px dotted #000;
`;
const CardImg = styled.img``;
const CardTitle = styled.h4``;
const Button = styled.div`
  width: 220px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  padding: 8px;
`;
