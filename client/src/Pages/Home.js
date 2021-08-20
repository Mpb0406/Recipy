import React from 'react'
import styled from 'styled-components';
import Hero from '../components/Hero';
import HeroText from '../components/HeroText';
import Categories from '../components/Categories';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <div>
            <StyledMain>
                <HeroText />
                <Hero />
            </StyledMain>
            <Categories />
            <CTA />
        </div>

    )
};

const StyledMain = styled.main`
    display: flex;
    align-items: center;
    margin: 0 3rem;
`;

export default Home
