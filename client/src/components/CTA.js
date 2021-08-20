import React from 'react'
import styled from 'styled-components';
import cta from '../img/cta.png';
import { MainButton, SecondButton } from '../Styles';

const CTA = () => {
    return (
        <StyledDiv>
            <img src={cta} alt="" />
            <CTAContainer>
                <h1>Add your recipes or search our  database for new ideas</h1>
                <div className="button-container">
                    <MainButton>Add Recipe</MainButton>
                    <SecondButton>Find Recipes</SecondButton>
                </div>
            </CTAContainer>
        </StyledDiv>
    )
};

//Styled Components

const StyledDiv = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 25rem;
        margin: 5rem;
        filter: drop-shadow(0 5px 40px rgba(0, 0, 0, 0.25));
    }
`;

const CTAContainer = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
    }

    .button-container {
        width: 100%;
        margin: 2rem;
        display: flex;
        justify-content: center;
    }
`;

export default CTA
