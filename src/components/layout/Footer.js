import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <ExtLink href="http://slack.bootcamperscollective.com/">
          Join us on Slack
        </ExtLink>
        <ExtLink href="http://bootcamperscollective.com/home">
          Bootcampers Collective Site
        </ExtLink>
        <ExtLink href="https://www.meetup.com/Bootcampers-Collective/events/">
          Events
        </ExtLink>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #233d4d;
`;
const ExtLink = styled.a`
  padding-left: 30px;
  color: #fff;
  font-size: 18px;
`;
