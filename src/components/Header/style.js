import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 20vh;
  padding: 18px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.75);

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    padding: 18px 18px;
    height: 17vh;
    flex-direction: column;
  }
`;
export const Title = styled.h3`
  font-size: 2rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  margin-left: 20px;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 1.4rem;
  }
`;
export const Navbar = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 35%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const List = styled.li`
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s ease;
  &:hover {
    background-color: #212d45;

    cursor: pointer;
  }
`;
export const Anchor = styled.a`
  color: inherit;
`;
export const Nav = styled.p`
  font-weight: 500;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const SocialIcons = styled.a`
  font-size: 1.5rem;
  margin-right: 20px;
  transition: 0.3s ease;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 5px;
  padding: 7px 7px 3px 7px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
