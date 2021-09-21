import React, { useEffect } from "react";
import styled from "styled-components";
import pizzaHeader from "../img/pizza-header.png";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getOneRecipe } from "../actions/recipes";
import Loading from "../components/Loading";
import man from "../img/man.jpg";

const DisplayRecipe = ({ getOneRecipe, recipe: { recipe, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    getOneRecipe(id);
  }, []);
  return recipe === null ? (
    <Loading />
  ) : (
    <StyledDiv>
      <div className="header-container">
        <img src={pizzaHeader} alt="" />
        <div className="darken"></div>
      </div>
      <div className="title-card">
        <div className="flex-container-1">
          <div className="title-desc">
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
          </div>
          <div className="interactions">
            <i className="far fa-clock"></i>
            <div className="time">
              <p>Prep: 90 min</p>
              <p>Cook: 10 min</p>
            </div>
            <i className="far fa-bookmark">
              <span>Bookmark</span>
            </i>
            <i className="far fa-thumbs-up">
              <span>Like</span>{" "}
            </i>
          </div>
        </div>
        <div className="profile-pic">
          <img src={man} alt="" />
          <h3>Mike Bolloskis</h3>
        </div>
      </div>
      <div className="recipe"></div>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipes,
});

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
    display: flex;
    align-items: center;
    justify-content: space-between;

    .interactions {
      display: flex;
    }
  }

  .recipe {
    height: 200vh;
  }

  .profile-pic {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 12rem;
      height: 12rem;
      object-fit: cover;
      border-radius: 50%;
      border: 6px solid #3b7c0b;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default connect(mapStateToProps, { getOneRecipe })(DisplayRecipe);
