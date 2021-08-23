import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard';
//Images
import forward from '../img/forward.png';
import backward from '../img/backward.png';

const Categories = () => {
    return (
        <StyledDiv>
            <h1>Browse By Category</h1>
            <CategoryContainer>
                <div className="categories">
                    <h3 className="breakfast">Breakfast</h3>
                    <h3 className="lunch">Lunch</h3>
                    <h3 className="active">Dinner</h3>
                    <h3 className="dessert">Dessert</h3>
                    <h3 className="drinks">Drinks</h3>
                </div>
            </CategoryContainer>
            <RecipeSlider>
                <BackButton>
                    <img src={backward} alt="" />
                </BackButton>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <ForwardButton>
                    <img src={forward} alt="" />
                </ForwardButton>
            </RecipeSlider>
        </StyledDiv>
    )
};

//Styled Components
const StyledDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 0;
`;

const CategoryContainer = styled.div`
    margin: 1.2rem 0;
    width: 60%;
    
    .categories {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        h3 {
            padding: 1rem;
            position: relative;
            cursor: pointer;
        }

        &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 0;
            height: 0.1rem;
            width: 100%;
            background-color: #848185;
        }
    }

    .active::after {
        content: "";
        position: absolute;
        height: 0.25rem;
        width: 8rem;
        background-color: #3B7C0B;
        top: 95%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
    }
`;

const RecipeSlider = styled.div`
    width: 95%;
    height: 60vh;

    overflow-x: scroll;
    display: flex;
    align-items: center;

    &::-webkit-scrollbar {
        height: 0.6rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 1rem;
        padding: 0.5rem;
        transition: all 1s ease;

        &:hover {
            background-color: #343036;
        }
    }
`;

const BackButton = styled.div`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.8;
    position: absolute;
    margin-left: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        opacity: 1;
    }

    img {
        height: 1rem;
        margin: 1.5rem 1.2rem;
        opacity: 0.6;
    }
`;

const ForwardButton = styled.div`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.8;
    position: absolute;
    right: 3rem;
    margin-left: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        opacity: 1;
    }

    img {
        height: 1rem;
        margin: 1.5rem 1.2rem;
        opacity: 0.6;
    }
`;

export default Categories;
