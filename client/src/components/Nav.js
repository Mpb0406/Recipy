import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import recipylogo from '../img/recipylogo.png';
import user from '../img/user.png'

const Nav = () => {
    return (
        <StyledNav>
            <Logo src={recipylogo} alt="" />
            <NavItems>
                <li><StyledAnchor href="/">Home</StyledAnchor></li>
                <li><StyledAnchor href="/browse">Browse</StyledAnchor></li>
                <li><StyledAnchor href="/myrecipes">My Recipes</StyledAnchor></li>
                <li><Profile src={user} alt="" /></li>
            </NavItems>
        </StyledNav>
    )
};

//Styled Components
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    margin: 0 3rem;
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    list-style: none;

    &::after {
        content: '';
        height: 0.4rem;
        width: 3.5rem;
        background-color: #3B7C0B;
        top: 7.5%;
        right: 40.45%;
        position: absolute;
    }

    a {

    }
`;

const StyledAnchor = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #343036;
`;

const Logo = styled.img`
    height: 3.5rem;
    cursor: pointer;
`;

const Profile = styled.img`
    height: 1.8rem;
    cursor: pointer;
`;

export default Nav
