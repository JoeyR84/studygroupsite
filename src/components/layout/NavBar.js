import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import Logo from "../../assets/bclogo.png";

export default class Nav extends Component {
  render() {
    return (
      <Container>
        <Item>
          <Links to="/">Home</Links>
        </Item>
        <Item>
          <Links to="/About">About Us</Links>
        </Item>
        <Item>
          <Image src={Logo} />
        </Item>
        <Item>
          <Links to="/Projects">Projects</Links>
        </Item>
        <Item>
          <Links to="/GroupLearning">Get Involved</Links>
        </Item>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 50px;
`;
const Item = styled.div`
  display: flex;
`;
const Image = styled.img`
  height: 95px;
  width: 95px;
`;
const Links = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  color: #000;
`;
