import React from 'react'
import styled from 'styled-components'
import { CategoryImg } from '../Styles';
//Images
import breakfast from '../img/breakfast.png';
import lunch from '../img/lunch.png';
import dinner from '../img/dinner.png';
import dessert from '../img/dessert.png';
import drinks from '../img/drinks.png'

const Categories = () => {
    return (
        <StyledDiv>
            <div className="container">
                <h1>Browse By Category</h1>
                <CategoryContainer>
                    <div className="category">
                        <CategoryImg src={breakfast} alt="" />
                        <h3>Breakfast</h3>
                    </div>
                    <div className="category">
                        <CategoryImg src={lunch} alt="" />
                        <h3>Lunch</h3>
                    </div>
                    <div className="category">
                        <CategoryImg src={dinner} alt="" />
                        <h3>Dinner</h3>
                    </div>
                    <div className="category">
                        <CategoryImg src={dessert} alt="" />
                        <h3>Dessert</h3>
                    </div>
                    <div className="category">
                        <CategoryImg src={drinks} alt="" />
                        <h3>Drinks</h3>
                    </div>
                </CategoryContainer>
            </div>
        </StyledDiv>
    )
};

//Styled Components
const StyledDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        height: 90vh;
        width: 90vw;
        border-radius: 1rem;
        background-color: #fff;
    }
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .category {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
`;

export default Categories;
