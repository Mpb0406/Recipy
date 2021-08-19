import React from 'react';
import styled from 'styled-components';
import heroImage from '../img/hero-image.png';

const Hero = () => {
    return (
        <StyledDiv>
            <HeroImage src={heroImage} alt="" />
        </StyledDiv>
    )
};

//Styled Components
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 90vh;
`;

const HeroImage = styled.img`
    height: 25rem;
    filter: drop-shadow(0 5px 40px rgba(0, 0, 0, 0.25));
    /* animation: spin 1s ease alternate;

    @keyframes spin {
        from {
            transform: rotateZ(0deg);
        } to {
            transform: rotateZ(360deg);
        }
    } */
`;

export default Hero
