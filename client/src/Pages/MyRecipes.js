import React, { useEffect } from "react";
import styled from "styled-components";
import notebookBg from "../img/notebook-bg.png";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipes";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const MyRecipes = ({ recipes: { recipes }, getRecipes }) => {
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <StyledSection>
      <div>
        <h1 className="form-title">
          My <span>Recipes</span>
        </h1>

        {recipes.length === 0 ? (
          <p>You don't have any recipes yet...</p>
        ) : (
          <div className="flex">
            {recipes.map((recipe) => (
              <div>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
        )}
        <Link to="/create-recipe" className="link-button">
          Add Recipe
        </Link>
      </div>
      <img src={notebookBg} alt="" />
    </StyledSection>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

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
  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
    z-index: -1;
  }

  .flex {
    display: flex;
  }
`;

// Import Recipes State - If User Has Recipes Render Them, Else Render 'You Do Not Have Recipes'
export default connect(mapStateToProps, { getRecipes })(MyRecipes);
