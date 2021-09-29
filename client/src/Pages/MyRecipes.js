import React, { useEffect } from "react";
import styled from "styled-components";
import notebookBg from "../img/notebook-bg.png";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipes";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import DisplayRecipe from "./DisplayRecipe";
import MyRecipesCard from "../components/Cards/MyRecipesCard";

const MyRecipes = ({
  recipes: { recipes, loading },
  getRecipes,
  getOneRecipe,
}) => {
  useEffect(() => {
    getRecipes();
  });
  return recipes.length === 0 && loading ? (
    <Loading />
  ) : (
    <StyledSection>
      <div className="container">
        <h1 className="form-title">
          My <span>Recipes</span>
        </h1>

        {recipes.length === 0 ? (
          <p>You don't have any recipes yet...</p>
        ) : (
          <div className="flex">
            {recipes.map((recipe) => (
              <div>
                <Link className="recipe-link" to={`/recipes/${recipe._id}`}>
                  <MyRecipesCard
                    title={recipe.title}
                    description={recipe.description}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
        <Link to="/create-recipe" className="link-button">
          Add Recipe
        </Link>
      </div>
      <img className="bg-img" src={notebookBg} alt="" />
    </StyledSection>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

//Styled Components
const StyledSection = styled.section`
  display: flex;

  .container {
    margin-bottom: 5rem;
  }

  .recipe-link {
    text-decoration: none;

    h3,
    p,
    i {
      color: #343036;
    }
  }

  .bg-img {
    position: fixed;
    right: 0;
    top: 0;
    width: 30%;
    z-index: -1;
    opacity: 0.4;
  }

  .flex {
    display: flex;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }
`;

// Import Recipes State - If User Has Recipes Render Them, Else Render 'You Do Not Have Recipes'
export default connect(mapStateToProps, { getRecipes })(MyRecipes);
