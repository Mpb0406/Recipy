import React from "react";
import styled from "styled-components";
import { MainButton } from "../Styles";
import { connect } from "react-redux";

const MyRecipes = () => {
  return (
    <StyledSection>
      <h1>
        My <span>Recipes</span>
      </h1>
      <p>You don't have any recipes yet...</p>
      <MainButton>Add Recipe</MainButton>
    </StyledSection>
  );
};

//Styled Components
const StyledSection = styled.section`
  height: 90vh;

  h1 {
    margin: 1rem 0 2rem 3rem;
  }

  p {
    margin: 1rem 3rem;
  }

  button {
    margin: 2rem 3rem;
    height: 4rem;
    width: 15%;
  }
`;

// Import Recipes State - If User Has Recipes Render Them, Else Render 'You Do Not Have Recipes'
export default connect(null)(MyRecipes);
