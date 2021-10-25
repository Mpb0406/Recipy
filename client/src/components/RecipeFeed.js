import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { allRecipes } from "../actions/recipes";
import MyRecipesCard from "./Cards/MyRecipesCard";
import RecipeFeedCard from "./Cards/RecipeFeedCard";
import Loading from "./Loading";

const RecipeFeed = ({ allRecipes, recipes: { recipes } }) => {
  useEffect(() => {
    allRecipes();
  }, []);
  return (
    <StyledDiv>
      <h1 className="feed-title">
        Recipe <span>Feed</span>
      </h1>

      {recipes.length < 1 ? (
        <Loading />
      ) : (
        <div className="flex-recipes">
          {recipes.map((recipe) => (
            <RecipeFeedCard
              title={recipe.title}
              description={recipe.description}
              tags={recipe.tags}
              likes={recipe.likes.length}
              id={recipe._id}
            />
          ))}
        </div>
      )}
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

  .feed-title {
    text-align: center;
  }

  .flex-recipes {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default connect(mapStateToProps, { allRecipes })(RecipeFeed);
