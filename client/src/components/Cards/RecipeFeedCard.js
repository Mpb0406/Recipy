import React from "react";
import styled from "styled-components";
import man from "../../img/man.jpg";

const RecipeFeedCard = () => {
  return (
    <StyledMain>
      <div className="avatar">
        <img src={man} alt="" />
      </div>
      <div className="user-info">
        <div className="name-bio">
          <h3>Mike Bolloskis</h3>
          <p>
            Hi my name is Mike and I like to cook and stuff and things and
            things and stuff and stuff and things
          </p>
        </div>
        <i className="fas fa-file-alt recipes">
          <span>12 Recipes</span>{" "}
        </i>
        <div className="following-container follower">
          <i className="fas fa-users">
            <span>31 Followers</span>{" "}
          </i>
          <i className="fas fa-user-friends following">
            <span>15 Following</span>{" "}
          </i>
          <i className="fas fa-user-minus unfollow">
            <span>Unfollow</span>
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
  margin: 2rem 0;

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
      width: 11rem;
    }
  }

  .user-info {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;

    .name-bio {
      margin-bottom: 2rem;
      h3 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.1rem;
      }
    }

    .recipes {
      margin-bottom: 1rem;
    }

    .following-container {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }

    i {
      font-size: 1.2rem;
      color: #343036;
      cursor: pointer;

      span {
        margin-left: 0.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        color: #343036;
      }
    }

    .follower,
    .following {
      flex-grow: 8;
    }

    .following {
      margin-left: 2rem;
    }

    .unfollow {
      flex-grow: 1;
    }
  }
`;

export default RecipeFeedCard;
