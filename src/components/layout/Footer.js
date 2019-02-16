import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <ExtLink href="https://bootcamperscollective.slack.com/">Slack</ExtLink>
        <ExtLink href="http://bootcamperscollective.com/home">
          bootcampers Collective
        </ExtLink>
      </Container>
    );
  }
}

const Container = styled.div``;
const ExtLink = styled.a``;
