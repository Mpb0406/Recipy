import React from 'react'
import styled from 'styled-components'
// Images
import shrimpstirfry from '../img/shrimp-stir-fry.png';
import likeempty from '../img/like-empty.png';
import bookmarkempty from '../img/bookmark-empty.png';

const RecipeCard = () => {
    return (
        <StyledDiv>
            <RecipeImg src={shrimpstirfry} alt="" />
            <User>Mike Bolloskis</User>
            <Title>Shrimp Stir-Fry</Title>
            <Interactions>
                <div className="likes">
                    <Like src={likeempty} alt="" />
                    <h3>25 Likes</h3>
                </div>
                <Like className="bookmark" src={bookmarkempty} alt="" />
            </Interactions>

        </StyledDiv>
    )
};

// Styled Components

const StyledDiv = styled.div`
    height: 95%;
    background-color: #fff;
    min-width: 20%;
    border-radius: 0.5rem;
    margin: 0 0.25rem;
`;

const User = styled.h3`
    cursor: pointer;
    width: 90%;
    margin: auto;
    font-weight: 600;
    font-size: 1rem;
    color: #3B7C0B;
`;

const Title = styled.h2`
    width: 90%;
    margin: auto;
    font-size: 1.25rem;
    height: 4rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
`;

const RecipeImg = styled.img`
    width: 100%;
    height: 60%;
    overflow: hidden;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    cursor: pointer;
`;

const Interactions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;

    .likes {
        display: flex;

        h3 {
            color: #848185;
            font-weight: 500;
        }
    }

    h3 {
        margin: 0 0.5rem;
        justify-self: start;
    }

    .bookmark {
        
    }
    
`;

const Like = styled.img`
    height: 1.6rem;

    
`;

export default RecipeCard
