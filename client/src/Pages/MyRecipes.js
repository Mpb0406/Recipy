import React from "react";
import styled from "styled-components";
import notebookBg from "../img/notebook-bg.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MyRecipes = () => {
  return (
    <StyledSection>
      <div>
        <h1 className="form-title">
          My <span>Recipes</span>
        </h1>
        <p>You don't have any recipes yet...</p>
        <Link to="/create-recipe" className="link-button">
          Add Recipe
        </Link>
      </div>
      <img src={notebookBg} alt="" />
    </StyledSection>
  );
};

//Styled Components
const StyledSection = styled.section`
  height: 90vh;
  display: flex;

  div {
    width: 100%;
  }
  h1 {
    margin: 1rem 0 2rem 3rem;
  }

  p {
    margin: 1rem 3rem 4rem;
  }

  button {
    margin: 2rem 3rem;
    height: 4rem;
    width: 15%;
  }
`;

// Import Recipes State - If User Has Recipes Render Them, Else Render 'You Do Not Have Recipes'
export default connect(null)(MyRecipes);
