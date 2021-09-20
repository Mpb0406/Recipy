import React from "react";
import styled from "styled-components";
import pizzaHeader from "../img/pizza-header.png";

const DisplayRecipe = () => {
  return (
    <StyledDiv>
      <div className="header-container">
        <img src={pizzaHeader} alt="" />
        <div className="darken"></div>
      </div>
      <div className="title-card">
        <h1>NY Pizza</h1>
        <p>
          This is a recipe for NY-Style pizza. It is a thin crust pizza with a
          nice crisp. It is relatively easy to make.
        </p>
      </div>
      <div className="recipe"></div>
    </StyledDiv>
  );
};

// Styled Components

const StyledDiv = styled.div`
  .header-container {
    width: 100%;
    height: 60vh;
    overflow: hidden;
    object-fit: cover;
    position: relative;

    .darken {
      background-color: rgba(0, 0, 0, 0.4);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  .title-card {
    height: 60vh;
    width: 90%;
    border-radius: 1rem;
    background: linear-gradient(to bottom, #e1f2d5, #fff);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    opacity: 0.95;
    z-index: 2;
    position: absolute;
    top: 40%;
    left: 5%;
  }

  .recipe {
    height: 200vh;
  }
`;

export default DisplayRecipe;
