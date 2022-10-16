import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 98vw;
  padding: 20px 50px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 18px 20px;
    height: 60vh;
    flex-flow: column-reverse;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.75);
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const RightSection = styled.div`
  display: block;
  width: 50%;
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;
export const Type = styled.div`
  display: block;
  padding: 12px 14px;

  h3 {
    font-family: "JetBrains Mono", monospace;
    font-size: 3rem;
    margin: 25px 0;
  }
  p {
    font-size: 1.8rem;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 12px;
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
