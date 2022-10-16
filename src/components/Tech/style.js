import styled from "styled-components";
import { motion } from "framer-motion";

export const Motion = styled.div`
  display: flex;
  padding: 15px 20px;
  box-sizing: border-box;
  justify-content: space-around;

  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    row-gap: 8px;
    padding: 10px 15px;
  }
`;
export const Motion2 = styled.div`
  display: flex;
  padding: 15px 20px;
  box-sizing: border-box;
  justify-content: space-around;

  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 4px;
    padding: 10px 15px;
  }
`;
export const Stack = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #001524;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
export const Img = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 65px;
    height: 65px;
  }
`;
