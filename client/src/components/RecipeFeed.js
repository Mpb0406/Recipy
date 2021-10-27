import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { allRecipes } from "../actions/recipes";
import { getProfile } from "../actions/profile";
import RecipeFeedCard from "./Cards/RecipeFeedCard";
import Loading from "./Loading";

const RecipeFeed = ({
  allRecipes,
  recipes: { recipes },
  profile: { profile },
  getProfile,
}) => {
  useEffect(() => {
    allRecipes();
    getProfile();
  }, []);
  return (
    <StyledDiv>
      <h1 className="feed-title">
        Recipe <span>Feed</span>
      </h1>

      {recipes.length < 1 || profile === null ? (
        <Loading />
      ) : (
        <div className="flex-recipes">
          {recipes.map((recipe) => (
            <RecipeFeedCard likes={recipe.likes} id={recipe._id} />
          ))}
        </div>
      )}
    </StyledDiv>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  profile: state.profile,
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

export default connect(mapStateToProps, { allRecipes, getProfile })(RecipeFeed);
