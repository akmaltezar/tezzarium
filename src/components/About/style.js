import styled from "styled-components";

export const Award = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 50px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 10px;
    margin-top: 15px;
  }
`;
