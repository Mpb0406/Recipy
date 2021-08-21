import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainButton, SecondButton } from '../Styles';

const HeroText = () => {
    return (
        <StyledDiv>
            <StyledText>Store all your <br /> favorite recipes <br /> right here!</StyledText>
            <div className="button-container">
                <MainButton><Link className="login" to="/login">Login</Link></MainButton>
                <SecondButton><Link className="signUp" to="/signup">Sign Up</Link></SecondButton>
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
        
        .login {
            text-decoration: none;
            color: white;
            padding: 2.5rem;
            &:hover {
                color: #3B7C0B;
            }
        }
        .signUp {
            text-decoration: none;
            color: #3B7C0B;
            padding: 1.6rem 1.82rem;
            &:hover {
                color: #fff;
            }
        }
    }
`;

const StyledText = styled.h1`
    margin: 0 6rem 4rem;
`;

export default HeroText
