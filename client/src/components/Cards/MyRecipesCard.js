import React from "react";
import styled from "styled-components";
import pizzaHeader from "../../img/pizza-header.png";

const MyRecipesCard = () => {
  return (
    <StyledDiv>
      <img src={pizzaHeader} alt="" />
      <div className="tags-container">
        <div className="tag">pizza</div>
        <div className="tag">italian</div>
      </div>
      <h3 className="recipeTitle">Pizza Recipe</h3>
      <p className="recipeDescription">
        This is a recipe for NY-Style Pizza in a home oven
      </p>
      <i className="far fa-thumbs-up likes">
        <span>12 likes</span>
      </i>
    </StyledDiv>
  );
};

//Styled Components
const StyledDiv = styled.div`
  height: 50vh;
  width: 18vw;
  margin: 1rem 0.5rem;
  /* background-color: #fff; */
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  img {
    height: 45%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .tags-container {
    display: flex;
    margin: 0 0.5rem;

    .tag {
      background-color: #3b7c0b;
      padding: 0.2rem 0.6rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      color: #fff;
      margin-right: 0.5rem;
    }
  }

  .recipeTitle {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0.5rem;
  }

  .recipeDescription {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0.5rem;
  }

  .likes {
    margin: 0.75rem 0.5rem;
    font-size: 1.3rem;

    span {
      color: #343036;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 0.5rem;
    }
  }
`;

export default MyRecipesCard;
