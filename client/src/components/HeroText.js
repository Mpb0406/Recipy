import React from 'react'
import styled from 'styled-components';

const HeroText = () => {
    return (
        <div>
            <StyledText>Store all your <br /> favorite recipes <br /> right here!</StyledText>
            <MainButton>Login</MainButton>
            <SecondButton>Sign Up</SecondButton>
        </div>
    )
};

const StyledText = styled.h1`
    margin: 0 6rem 3rem;
`;

const MainButton = styled.button`
    color: #fff;
    background-color: #3B7C0B;
    border: none;
    width: 25%;
`;

const SecondButton = styled.button`
    color: #3B7C0B;
    border: 3px solid #3B7C0B;
    background-color: transparent;
    width: 25%;
`;

export default HeroText
