import React from "react";
import { Dice, Foot, Load, Randomizer, Social, Icon, Stamp } from "./style";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Container } from "../../elements";

const Footer = () => {
  const [quotes, setQuotes] = React.useState("");
  const [load, setLoad] = React.useState(false);

  const getQuotes = async () => {
    setLoad(true);
    await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setLoad(false);
        setQuotes(result.slip.advice);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Container>
      <Foot>
        <Randomizer>
          <p>{quotes ? quotes : "Click the atom >>>"}</p>
          {load ? <Load /> : <Dice onClick={() => getQuotes()} />}
        </Randomizer>
        <Social>
          <Icon
            href="https://github.com/akmaltezar"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </Icon>
          <Icon
            href="https://www.linkedin.com/in/akmal-tezar-a0379b235"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </Icon>
          <Icon
            href="https://www.instagram.com/akmal_tezzar/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </Icon>
        </Social>
      </Foot>
      <Stamp>@2023 Akmal</Stamp>
    </Container>
  );
};

export default Footer;
