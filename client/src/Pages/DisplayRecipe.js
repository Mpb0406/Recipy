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
            <div className="time-container">
              <i className="far fa-clock"></i>
              <div className="time">
                <p>Prep: 90 min</p>
                <p>Cook: 10 min</p>
              </div>
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
      <div className="ingredients">
        <h3>Ingredients</h3>
        <span>Serves:</span>
        <input type="text" placeholder="3" />
        <div className="ingredients-list">
          <p>5 oz Bread Flour</p>
          <p>1 Tbsp Instant Yeast</p>
          <p>1.5 cup warm water</p>
          <p>1 Tbsp Sugar</p>
        </div>
      </div>
      <div className="procedures">
        <h3>Procedures</h3>
        <div className="procedures-list">
          <div className="step">
            <div className="circle">1.</div>
            <p>
              Mix flour and yeast mixture together until all flour is
              incorporated and just dry enough to work with your hands
            </p>
          </div>
          <div className="step">
            <div className="circle">2.</div>
            <p>
              Let dough rise for at least an hour or double its original size
            </p>
          </div>
          <div className="step">
            <div className="circle">3.</div>
            <p>
              Lightly flour a work surface and roll out dough into circle about
              1/4” thick
            </p>
          </div>
        </div>
      </div>
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
    height: 50vh;
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

    .flex-container-1 {
      margin: 0 3rem;
      height: 85%;

      .title-desc {
        margin-bottom: 2rem;
      }

      .interactions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 55vw;
        margin-top: 5.2rem;

        i {
          margin-right: 1rem;
          font-size: 2.2rem;
          color: #343036;
          text-align: center;
          display: flex;
          align-items: center;
        }

        span {
          font-size: 1.2rem;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          margin-left: 1rem;
          color: #343036;
        }

        .time-container {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .recipe {
    height: 200vh;
  }

  .profile-pic {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;
    img {
      width: 12rem;
      height: 12rem;
      object-fit: cover;
      border-radius: 50%;
      border: 6px solid #3b7c0b;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }

    h3 {
      font-size: 1.3rem;
      margin-top: 1rem;
    }
  }
`;

export default connect(mapStateToProps, { getOneRecipe })(DisplayRecipe);
