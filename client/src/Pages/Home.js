import React from 'react'
import styled from 'styled-components';
import Hero from '../components/Hero';
import HeroText from '../components/HeroText';

const Home = () => {
    return (
        <StyledMain>
            <HeroText />
            <Hero />
        </StyledMain>
    )
};

const StyledMain = styled.main`
    display: flex;
    align-items: center;
`;

export default Home
