import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import BackgroundAnimation from "./BgAnimation";
import { Container, LeftSection, RightSection, Type } from "./style";

const Hero = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [" Akmal ", "a Frontend Dev", "a Web Dev", "a Mobile Dev"],
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Container>
      <LeftSection>
        <Type>
          <h3>
            HELLO WORLD,
            <br /> I'm <span ref={typeTarget} />
          </h3>
          <p>Coding is really hard,but $1000 is $1000</p>
        </Type>
      </LeftSection>
      <RightSection>
        <BackgroundAnimation />
      </RightSection>
    </Container>
  );
};

export default Hero;
