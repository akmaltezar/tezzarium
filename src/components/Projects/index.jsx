import React from "react";
import { myprojects } from "../../data";
import { Container, Title } from "../../elements";
import { Wrapper, Project, StackList, Visit } from "./style";

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <Wrapper>
        {myprojects.map((value, index) => {
          return (
            <Project
              key={index}
              whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <h4> {value.title} </h4>
              <p> {value.description} </p>
              <StackList>
                <li> {value.stack.front_languange} </li>
                <li> {value.stack.frontend} </li>
                <li> {value.stack.back_language} </li>
                <li> {value.stack.backend} </li>
                <li> {value.stack.database3} </li>
              </StackList>
              <a href={value.url} target="_blank" rel="noreferrer">
                <Visit />
              </a>
            </Project>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Projects;
