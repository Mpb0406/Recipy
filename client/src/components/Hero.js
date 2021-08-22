import React from 'react';
import styled from 'styled-components';
import hero from '../img/hero.png';

const Hero = () => {
    return (
        <StyledDiv>
            <Fade></Fade>
            <HeroImage src={hero} alt="" />
        </StyledDiv>
    )
};

//Styled Components
const StyledDiv = styled.div`
margin-top: 1rem;
position: relative;
height: 80vh;
`;

const Fade = styled.div`
    background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.6));
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.6;
    border-radius: 1rem;
`;

const HeroImage = styled.img`
    height: 100%;
    width: 95vw;
    border-radius: 1rem;
    object-fit: cover;
`;

export default Hero
