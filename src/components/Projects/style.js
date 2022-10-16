import styled from "styled-components";
import { motion } from "framer-motion";
import { BsArrowUpRightSquare } from "react-icons/bs";

export const Wrapper = styled.ul`
  list-style: none;
  padding: 15px 25px;
  box-sizing: border-box;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Project = styled(motion.li)`
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #00b4d8;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    padding: 15px;

    h4 {
      font-size: 1.1rem;
      margin-bottom: 6px;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 6px;
    }
  }
`;
export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  border-radius: 5px;
  background: #cae9ff;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  padding: 8px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    padding: 5px;
    font-size: 0.8rem;
  }
`;

export const Visit = styled(BsArrowUpRightSquare)`
  font-size: 2rem;
  align-self: flex-end;
  color: #00b4d8;
`;
