import React from 'react'
import styled from 'styled-components';
import { MainButton, SecondButton } from '../Styles';

const HeroText = () => {
    return (
        <StyledDiv>
            <StyledText>Store all your <br /> favorite recipes <br /> right here!</StyledText>
            <div className="button-container">
                <MainButton>Login</MainButton>
                <SecondButton>Sign Up</SecondButton>
            </div>
        </StyledDiv>
    )
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellow; */
    justify-content: center;
    height: 90vh;

    .button-container {
        display: flex;
        justify-content: center;
        width: 100%;
        /* background-color: blue; */
    }
`;

const StyledText = styled.h1`
    margin: 0 6rem 4rem;
`;

export default HeroText
