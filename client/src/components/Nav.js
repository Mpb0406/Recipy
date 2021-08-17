import React from 'react';
import styled from 'styled-components';
import recipylogo from '../img/recipylogo.png';

const Nav = () => {
    return (
        <StyledNav>
            <img src={recipylogo} alt="" />
            <NavItems>
                <li><StyledAnchor href="#">Home</StyledAnchor></li>
                <li><StyledAnchor href="#">Browse</StyledAnchor></li>
                <li><StyledAnchor href="#">My Recipes</StyledAnchor></li>
                <li><StyledAnchor href="#">Profile</StyledAnchor></li>
            </NavItems>
        </StyledNav>
    )
};

//Styled Components
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    list-style: none;
`;

const StyledAnchor = styled.a`
    text-decoration: none;
`;

export default Nav
