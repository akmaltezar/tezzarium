import React from 'react';
import { SiArtixlinux } from "react-icons/si";
import {Container,Logo,Nav, NavList, Name} from './HeaderStyles';

const Header = () => {
  return (
    <Container>
      <Logo>
        <SiArtixlinux size="2rem"/>
        <Name>Tezzarium</Name>
      </Logo>
      <Nav>
        <li> <NavList>About</NavList> </li>
        <li> <NavList>Technologies</NavList> </li>
        <li> <NavList>Projects</NavList> </li>
      </Nav>
    </Container>
  )
}

export default Header