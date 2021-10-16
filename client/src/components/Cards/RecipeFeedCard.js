import React from "react";
import styled from "styled-components";
import pizzaAvatar from "../../img/pizza-avatar.jpg";

const RecipeFeedCard = () => {
  return (
    <StyledMain>
      <div className="avatar">
        <img src={pizzaAvatar} alt="" />
      </div>
      <div className="recipe-container">
        <div className="recipe-info">
          <h3>NY-Style Pizza</h3>
          <p>
            This is a recipe for NY-Style pizza made in a home oven and it is
            really easy to make
          </p>
        </div>
        <div className="tag-container">
          <div className="tag">pizza</div>
          <div className="tag">italian</div>
          <div className="tag">dinner</div>
        </div>
        <div className="like-container">
          <i className="far fa-thumbs-up likes">
            <span>12 Likes</span>
          </i>
          <i className="fas fa-thumbs-down unlike">
            <span>Unlike</span>
          </i>
        </div>
      </div>
    </StyledMain>
  );
};

//Styled Components
const StyledMain = styled.main`
  background: #fff;
  height: 35vh;
  width: 85%;
  /* border-radius: 0.8rem; */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1.5rem 0;

  .avatar {
    height: 11rem;
    width: 11rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #3b7c0b;

    img {
      object-fit: cover;
      height: 11rem;
    }
  }

  .recipe-container {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
  }

  .recipe-info {
    width: 100%;

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  .tag-container {
    display: flex;
    width: 100%;
    margin-top: 0.5rem;

    .tag {
      padding: 0.2rem 0.5rem;
      margin: 0 0.25rem;
      background: green;
      border-radius: 3rem;
      font-size: 0.8rem;
      color: #fff;
      cursor: pointer;
    }
  }

  .like-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 2rem 0 0;

    span {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 1.2rem;
      margin-left: 0.5rem;
      color: #343036;
    }

    .likes,
    .unlike {
      font-size: 1.2rem;
      color: #343036;
      cursor: pointer;
    }
  }
`;

export default RecipeFeedCard;
