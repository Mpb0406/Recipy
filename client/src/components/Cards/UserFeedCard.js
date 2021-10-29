import React from "react";
import styled from "styled-components";
import defaultUser from "../../img/default-user.png";

const UserFeedCard = () => {
  return (
    <StyledMain>
      <div className="top-container">
        <div className="avatar">
          <img src={defaultUser} alt="" />
        </div>
        <div className="user-info">
          <h3>Mike Bolloskis</h3>
          <div className="follows">
            <span>Followers: 12</span>
            <span>Following: 11</span>
          </div>
          <span>Member since: 1/1/2021</span>
        </div>
        <span className="follow">Follow</span>
      </div>
      <div className="bio">
        <p>This is my bio. This is a small paragraph about me.</p>
      </div>
    </StyledMain>
  );
};

//Styled Components
const StyledMain = styled.main`
  background: #fff;
  height: 35vh;
  width: 85%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  margin: 1.5rem 0;

  .top-container {
    display: flex;
    margin: 1.5rem 1.5rem 0;
    position: relative;
    width: 95%;
    /* background: firebrick; */

    &::after {
      content: "";
      position: absolute;
      height: 0.15rem;
      width: 100%;
      top: 120%;
      left: 0;
      background: gray;
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
      width: 8.5rem;
    }
  }

  .user-info {
  }

  .follow {
    align-self: flex-start;
  }

  .bio {
    margin: 0 2rem;
    p {
      font-size: 1rem;
    }
  }
`;

export default UserFeedCard;
