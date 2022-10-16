import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 15px 40px;
  box-sizing: border-box;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 12px 17px;
  }
`;
export const SectionDivider = styled.div`
  width: 124px;
  height: 8px;
  border-radius: 10px;
  background-color: #fff;
  margin: 2rem 4rem;
  /* background: linear-gradient(270deg, #fca311 0%, #3a0ca3 100%); */
  background: linear-gradient(270deg, #4cc9f0 0%, #3a0ca3 100%);
  @media screen and (max-width: 768px) {
    width: 52px;
    height: 4px;
    margin: 2rem;
  }
`;
export const Title = styled.h3`
  font-size: 3.5rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  margin: 0 1rem;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
