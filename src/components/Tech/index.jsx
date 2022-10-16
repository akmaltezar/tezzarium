import React from "react";
import { Img, Motion, Motion2, Stack } from "./style";
import {
  reactlogo,
  reduxlogo,
  jslogo,
  tslogo,
  gitlogo,
  postman,
} from "../../assets/image";
import { Container, Title } from "../../elements/index";

const Tech = () => {
  return (
    <Container id="tech">
      <Title>Tech & Tools</Title>

      <Motion>
        <Stack
          whileInView={{ x: [-100, 0], y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <Img src={jslogo} />
        </Stack>
        <Stack
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          {" "}
          <Img src={tslogo} />
        </Stack>
        <Stack
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <Img src={reactlogo} />
        </Stack>
        <Stack
          whileInView={{ x: [100, 0], y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <Img src={reduxlogo} />
        </Stack>
      </Motion>
      <Motion2>
        <Stack
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <Img src={gitlogo} />
        </Stack>
        <Stack
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <Img src={postman} />
        </Stack>
      </Motion2>
    </Container>
  );
};

export default Tech;
