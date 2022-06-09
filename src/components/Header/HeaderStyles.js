import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #0F1624;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 50px;
    padding: 20px;
    color: #ffffff;
    font-family: 'Space Grotesk', sans-serif;

`;
export const Nav = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 40%;
`;
export const NavList = styled.a`
    text-decoration: none;
    font-size: 1.2rem
`;

export const Logo = styled.div`
    justify-content: flex-start;
    display: flex;
    width: 20%;
    padding: 20px 0;
    

`;
export const Name = styled.h3`
    margin: 0;
    letter-spacing: 3px;
    font-size: 2rem;
    color: #fff
`