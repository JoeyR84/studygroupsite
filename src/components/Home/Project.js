import React, { Component } from "react";
import posed from "react-pose";
import styled from "@emotion/styled";

export default class Project extends Component {
  state = {
    hovered: false
  };

  onMouseEnter = () => {
    this.setState({ hovered: true });
    console.log(this.state.hovered);
  };
  onMouseLeave = () => {
    this.setState({ hovered: false });
    console.log(this.state.hovered);
  };
  render() {
    return (
      <Card onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <CardImg />
        {this.state.hovered ? (
          <p>
            {this.props.desc}
            <a href={this.props.link}>Link</a>
          </p>
        ) : (
          <CardTitle>{this.props.title}</CardTitle>
        )}
      </Card>
    );
  }
}

// pose animations
const PoseCard = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  }
});
// styled components
const Card = styled(PoseCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: 275x;
  border: 1px dotted #000;
  background-color: #ce8147;
`;
const CardImg = styled.img`
  width: 230px;
  height: 230px;
  object-fit: contain;
`;
const CardTitle = styled.h4`
  padding-bottom: 15px;
`;
