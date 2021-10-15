import React from "react";
import styled from "styled-components";

const MyProfile = () => {
  return (
    <StyledDiv>
      <section className="header">
        <div className="avatar-container"></div>
        <h3>Mike Bolloskis</h3>
      </section>
      <div className="bio-container">
        <h4>Bio:</h4>
        <p>
          This is my bio and this is where I write a short description about
          myself
        </p>
      </div>
      <div className="follower-container">
        <div className="bookmarks">
          <p>12</p>
          <span>Bookmarks</span>
        </div>
        <div className="followers">
          <p>12</p>
          <span>Followers</span>
        </div>
        <div className="following">
          <p>12</p>
          <span>Following</span>
        </div>
      </div>
    </StyledDiv>
  );
};

//Styled Components
const StyledDiv = styled.div`
  .header {
    background: gray;
    width: 100%;
    height: 40vh;
  }

  .avatar-container {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background: #fff;
  }

  .follower-container {
    height: 6rem;
    width: 50%;
    background: #fff;
    border-radius: 0.5rem;
    display: flex;
  }
`;

export default MyProfile;
