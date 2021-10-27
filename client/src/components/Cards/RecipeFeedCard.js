import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import def from "../../img/default.png";
import { connect } from "react-redux";
import Loading from "../Loading";
import { likeRecipe, unlikeRecipe } from "../../actions/recipes";
import { bookmarkRecipe, removeBookmark } from "../../actions/profile";

const RecipeFeedCard = ({
  profile: { profile },
  auth: { user, isAuthenticated },
  id,
  likeRecipe,
  unlikeRecipe,
  bookmarkRecipe,
  removeBookmark,
}) => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    tags: [],
    likes: [],
    id: "",
  });

  useEffect(async () => {
    let res = await axios.get(`/api/recipes/myrecipes/${id}`);
    setRecipe({
      title: res.data.title,
      description: res.data.description,
      tags: res.data.tags,
      likes: res.data.likes,
      id: res.data._id,
    });
  });

  console.log(recipe.id);
  return !isAuthenticated ? (
    <Loading />
  ) : (
    <StyledMain>
      <div className="top-container">
        <div className="avatar">
          <img src={def} alt="" />
        </div>

        <div className="recipe-info">
          <Link to={`/recipes/${id}`}>
            <h3 className="title">{recipe.title}</h3>
          </Link>
          <p className="user">Mike Bolloskis</p>
          <div className="time-tags">
            <p className="time">5 days ago</p>
            <div className="tag-container">
              {recipe.tags.map((tag) => (
                <div className="tag">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="description">{recipe.description}</p>
      <div className="interactions">
        <i
          className={`${
            recipe.likes.filter((like) => like.user === user._id).length === 0
              ? "far"
              : "fas"
          } fa-thumbs-up likes`}
          onClick={
            recipe.likes.filter((like) => like.user === user._id).length === 0
              ? () => likeRecipe(id)
              : () => unlikeRecipe(id)
          }
        >
          <span>
            {recipe.likes.length} {recipe.likes.length === 1 ? "Like" : "Likes"}
          </span>
        </i>
        <i
          className={`${
            profile.bookmarks.filter((bookmark) => bookmark._id === recipe.id)
              .length === 0
              ? "far"
              : "fas"
          } fa-bookmark bookmarks`}
          onClick={
            profile.bookmarks.filter((bookmark) => bookmark._id === recipe.id)
              .length === 0
              ? () => bookmarkRecipe(id)
              : () => removeBookmark(id)
          }
        >
          <span>Bookmark</span>
        </i>
        <i className="fas fa-user-plus">
          <span>Follow</span>
        </i>
      </div>
    </StyledMain>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

//Styled Components
const StyledMain = styled.main`
  background: #fff;
  height: 15.5rem;
  width: 85%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.5rem auto;

  .top-container {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 1rem auto;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 110%;
      width: 100%;
      height: 1px;
      background: #999999;
    }
  }

  .avatar {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #3b7c0b;
    margin-right: 1rem;

    img {
      object-fit: cover;
      height: 7rem;
    }
  }

  .recipe-info {
    width: 85%;

    .title {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2rem;
    }

    .user {
      font-size: 1rem;
      font-weight: 600;
      color: #3b7c0b;
    }

    .time {
      font-size: 0.8rem;
      font-weight: 600;
      color: #858585;
      line-height: 1rem;
    }
  }

  .time-tags {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .tag-container {
    display: flex;
    align-items: center;
    width: 50%;
    margin-top: 1rem;

    .tag {
      padding: 0.15rem 0.5rem;
      margin: 0 0.25rem;
      background: green;
      border-radius: 3rem;
      font-size: 0.8rem;
      color: #fff;
      cursor: pointer;
    }
  }

  .description {
    width: 95%;
    margin: 0.5rem auto 1rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .interactions {
    width: 98%;
    margin: 0.5rem auto 0.5rem;
    background: #ccdced77;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 2rem;
      width: 1px;
      background: #959595;
    }

    &::before {
      top: 50%;
      left: 33%;
      transform: translate(-33%, -50%);
    }

    &::after {
      top: 50%;
      right: 33%;
      transform: translate(33%, -50%);
    }

    i {
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      &:hover {
        font-weight: 600;
        color: #3b7c0b;
      }

      span {
        margin-left: 0.5rem;
        color: black;
        font-weight: 500;
        font-size: 1.1rem;
        font-family: "Poppins", sans-serif;
      }
    }
  }
`;

export default connect(mapStateToProps, {
  likeRecipe,
  unlikeRecipe,
  bookmarkRecipe,
  removeBookmark,
})(RecipeFeedCard);
