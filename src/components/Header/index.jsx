import React from "react";
import {
  Container,
  Title,
  Navbar,
  Nav,
  Anchor,
  SocialIcons,
  List,
} from "./style";
import { BsLinkedin } from "react-icons/bs";
const Header = () => {
  return (
    <Container id="/">
      <Anchor href="/">
        <Title> Akmal Tezar </Title>
      </Anchor>

      <Navbar>
        <List>
          <Anchor href="#about">
            <Nav>About</Nav>
          </Anchor>
        </List>
        <List>
          <Anchor href="#tech">
            <Nav>Tech</Nav>
          </Anchor>
        </List>
        <List>
          <Anchor href="#projects">
            <Nav>Projects</Nav>
          </Anchor>
        </List>
      </Navbar>
      <SocialIcons
        href="https://www.linkedin.com/in/akmal-tezar-a0379b235"
        target="_blank"
        rel="noopener"
      >
        <BsLinkedin />
      </SocialIcons>
    </Container>
  );
};

export default Header;
