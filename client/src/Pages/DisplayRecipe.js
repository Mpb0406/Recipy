import React, { useEffect } from "react";
import styled from "styled-components";
import pizzaHeader from "../img/pizza-header.png";
import def from "../img/default.png";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getOneRecipe } from "../actions/recipes";
import Loading from "../components/Loading";
import man from "../img/man.jpg";
import { likeRecipe } from "../actions/recipes";

const DisplayRecipe = ({
  getOneRecipe,
  recipe: { recipe, loading },
  likeRecipe,
}) => {
  const { id } = useParams();
  useEffect(() => {
    getOneRecipe(id);
  }, []);

  const likeOrUnlike = () => {
    likeRecipe(id);
  };
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
          <div className="recipe-actions">
            <Link to={`/recipes/edit-recipe/${recipe._id}`}>
              <span className="edit-recipe">Edit</span>
            </Link>
            <span className="delete-recipe">Delete</span>
          </div>
          <div className="interactions">
            <div className="time-container">
              <i className="far fa-clock"></i>
              <div className="time">
                <p>Prep: {recipe.preptime} min</p>
                <p>Cook: {recipe.cooktime} min</p>
              </div>
            </div>
            <i className="far fa-bookmark bookmark">
              <span>Bookmark</span>
            </i>
            <i
              className="far fa-thumbs-up like"
              onClick={(e) => likeRecipe(id)}
            >
              <span>Like</span>{" "}
            </i>
          </div>
        </div>
        <div className="profile-pic">
          <img src={man} alt="" />
          <h3>Mike Bolloskis</h3>
        </div>
      </div>
      <div className="arrow-container">
        <div className="tags-section">
          {recipe.tags.map((tag) => (
            <div className="tag">
              <span>{tag}</span>
            </div>
          ))}
        </div>

        {recipe.tags.length > 0 && (
          <div className="scroll-right">
            <i className="fas fa-chevron-right"></i>
          </div>
        )}
      </div>
      <div className="recipe-container">
        <div className="ingredients">
          <h3 className="ingredients-title title">Ingredients</h3>
          <div className="serves">
            <h4>Serves:</h4>
            <input type="text" placeholder={recipe.serves} />
            <i className="fas fa-redo-alt"></i>
          </div>
          <div className="ingredients-list">
            {recipe.ingredients.map((ingredient) => (
              <div>
                <p>
                  {ingredient.amount} {ingredient.unit} {ingredient.item}
                  <br />
                  {ingredient.alternate && (
                    <span className="optional">
                      optionally: {ingredient.alternate}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="procedures">
          <h3 className="procedures-title title">Procedures</h3>
          <div className="procedures-list">
            {recipe.procedures.map((procedure, idx) => (
              <div className="step">
                <div className="circle">
                  <span>{idx + 1}</span>
                </div>
                <p>{procedure.step}</p>
              </div>
            ))}
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

  //Title Card Section
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

      .recipe-actions {

        .edit-recipe, .delete-recipe {
          font-weight: 600;
          margin: 0 1rem 0 0;
          font-size: 1.1rem;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        /* .edit-recipe {
          color: #343036;
        } */

        .delete-recipe {
          color: firebrick;
        }
      }

      .interactions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 55vw;
        margin-top: 3rem;

        i {
          margin-right: 0.5rem;
          font-size: 2rem;
          color: #343036;
          text-align: center;
          display: flex;
          align-items: center;
        }

        span {
          font-size: 1.2rem;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          margin-left: 0.5rem;
          color: #343036;
        }

        .bookmark, .like {
          transition: all 0.3s ease;
          cursor: pointer;
          &:hover {
            color: #3B7C0B;
            font-weight: 600;
          }
          
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

  //Ingredients and Procedures

  .recipe-container {
    display: flex;
    margin-top: 1rem;
  }

  .ingredients {
    flex: 2;
  }

  .title {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ingredients-title {
    &::before,
    &::after {
      content: "";
      height: 0.1rem;
      width: 15%;
      background-color: gray;
      margin: 0 1rem;
    }
  }

  .optional {
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
    color: #808080;
  }

  .procedures-title {
    &::before,
    &::after {
      content: "";
      height: 0.1rem;
      width: 30%;
      background-color: gray;
      margin: 0 1rem;
    }
  }

  .serves {
    margin: 1.5rem 10rem;
    display: flex;
    align-items: center;

    h4 {
      margin-right: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    input {
      width: 3rem;
      padding: 0.5rem;
      font-size: 1.3rem;
      text-align: center;
      margin-right: 0.75rem;
    }

    i {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }

  .ingredients-list {
    margin: 1.5rem 5rem;

    p {
      margin: 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 150%;
        left: 20%;
        height: 0.1rem;
        width: 40%;
        background-color: #969696;
      }
    }
  }

  .procedures {
    flex: 3;
  }

  .step {
    display: flex;
    align-items: center;
    margin: 2.5rem 0;

    p {
      flex: 3;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  .circle {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: #3b7c0b;
    position: relative;
    margin-right: 1rem;

    span {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .tags-title {
    position: relative;
    margin-top: 5rem;
    &::before,
    &::after {
      content: "";
      height: 0.1rem;
      width: 30%;
      background-color: gray;
      margin: 0 1rem;
    }
  }

  .arrow-container {
    margin: 1rem 3rem;
    position: relative;
  }

  .scroll-right {
    display: flex;
      position: absolute;
      top: 50%;
      right: -1%;
      transform: translateY(-50%);
      background: #fff;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      padding: 1rem ;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #3b7c0b;
        color: #fff;
      }

      i {
        font-size: 2rem;
        transform: translateX(35%);
      }
    }
  }

  .tags-section {
    display: flex;

    margin-top: 22vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }



  .tag {
    margin: 1rem 0.5rem;
    padding: 0.4rem 0.2rem;
    background-color: #3b7c0b;
    border-radius: 2.5rem;
    border: 2px solid #3b7c0b;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: transparent;
      color: #3b7c0b;
      border: 2px solid #3b7c0b;
    }

    span {
      color: #fff;
      font-weight: 600;
      padding: 0.6rem 1.3rem;

      &:hover {
        color: #3b7c0b;
      }
    }
  }
`;

export default connect(mapStateToProps, { getOneRecipe, likeRecipe })(
  DisplayRecipe
);
