import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { allRecipes } from "../actions/recipes";
import MyRecipesCard from "./Cards/MyRecipesCard";

const RecipeFeed = ({ allRecipes, recipes: { recipes } }) => {
  useEffect(() => {
    allRecipes();
  }, []);
  console.log(recipes);
  return (
    <StyledDiv>
      <h1 className="title">
        Recipe <span>Feed</span>
      </h1>
      <div className="flex-recipes">
        {recipes.map((recipe) => (
          <MyRecipesCard
            title={recipe.title}
            description={recipe.description}
            tags={recipe.tags}
            likes={recipe.likes}
          />
        ))}
      </div>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

//Styled Components
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex-recipes {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default connect(mapStateToProps, { allRecipes })(RecipeFeed);
