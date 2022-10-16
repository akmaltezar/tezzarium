import styled from "styled-components";
import { DiAtom } from "react-icons/di";
import { BsThreeDots } from "react-icons/bs";

export const Foot = styled.div`
  padding: 50px 30px;
  border-top: solid 1px #212d45;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 20px 15px;
    flex-direction: column;
  }
`;
export const Randomizer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #212d45;
  border-radius: 5px;
  padding: 10px;

  p {
    color: #fee3ef;
    font-size: 1rem;
    font-family: "Space Grotesk", sans-serif;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 7px;
  }
`;
export const Dice = styled(DiAtom)`
  font-size: 2rem;
  color: #fee3ef;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const Load = styled(BsThreeDots)`
  font-size: 2rem;
  color: #fee3ef;
  border-radius: 5px;
  padding: 5px;
  background-color: #212d45;
`;
export const Social = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-top: 15px;
  }
`;
export const Icon = styled.a`
  font-size: 1.3rem;
  /* margin-right: 20px; */
  transition: 0.3s ease;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 4px;
  padding: 7px 7px 3px 7px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Stamp = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  font-family: "Space Grotesk", sans-serif;
`;
