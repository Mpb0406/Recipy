import React from "react";
import styled from "styled-components";
import pizzaHeader from "../../img/pizza-header.png";
import recipes from "../../reducers/recipes";

const MyRecipesCard = ({ title, description }) => {
  return (
    <StyledDiv>
      <img src={pizzaHeader} alt="" />
      <div className="bottom-card">
        <div className="title-desc">
          <h3 className="recipeTitle">{title}</h3>
          <p className="recipeDescription">{description}</p>
        </div>
        <div className="tags-container">
          <i className="far fa-thumbs-up likes" style={{ color: "#777" }}>
            <span>12 likes </span>
            <span>•</span>
          </i>
          <div className="tag">pizza</div>
          <div className="tag">italian</div>
        </div>
      </div>
    </StyledDiv>
  );
};

//Styled Components
const StyledDiv = styled.div`
  height: 50vh;
  width: 20vw;
  margin: 1rem 1rem;
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

  .bottom-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: firebrick; */
    height: 24vh;
  }

  .tags-container {
    display: flex;
    margin: 0.5rem;
    overflow: hidden;

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
    margin-right: 0.75rem;
    font-size: 1.3rem;
    overflow: hidden;

    i {
      color: #888;
    }

    span {
      color: #777;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 0.5rem;
    }
  }
`;

export default MyRecipesCard;
