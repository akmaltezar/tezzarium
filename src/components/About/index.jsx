import React from "react";
import { Container, Title } from "../../elements";
import Certificates from "../Certificates";
import { certificates, certificates2 } from "../../assets/image";
import Timeline from "../Timeline";
import { Award } from "./style";

const About = () => {
  return (
    <Container id="about">
      <Title>About</Title>
      <Timeline />
      <Title>Certificates</Title>
      <Award>
        <Certificates data={certificates} />
        <Certificates data={certificates2} />
      </Award>
    </Container>
  );
};

export default About;
