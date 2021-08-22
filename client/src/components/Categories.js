import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard';
//Images

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
`;

export default Categories;
