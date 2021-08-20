import React from 'react'
import styled from 'styled-components';
import login from '../img/login.png';
import { MainButton } from '../Styles';

const LoginHero = () => {
    return (
        <StyledDiv>
            <div className="container">
                <div>
                    <Fade></Fade>
                    <StyledImage src={login} alt="" />
                </div>

            </div>
        </StyledDiv>
    )
};

//Styled Components

const StyledDiv = styled.div`
    position: relative;
    
    .container {
        display: flex;
    }
`;

const StyledImage = styled.img`
    width: 50vw;
    height: 100vh;
    object-fit: cover;
`;

const Fade = styled.div`
    height: 100vh;
    width: 37.5vw;
    background: linear-gradient(to right, transparent, #F0F7FF);
    position: absolute;
    top: 0;
    left: 25%;
    z-index: 1;
`;

export default LoginHero
