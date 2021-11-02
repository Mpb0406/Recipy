import React from "react";
import styled from "styled-components";

const Createprofile = () => {
  return (
    <StyledDiv>
      <h1>
        Create <span>Your Profile</span>{" "}
      </h1>

      <div className="profile-pic">
        <div className="picture-container">
          <i className="fas fa-user"></i>
        </div>
        <p>Add a profile picture</p>
      </div>

      <div className="bio-section">
        <p>Tell us about yourself...</p>
        <textarea
          name=""
          id=""
          cols="100"
          rows="5"
          placeholder="Bio..."
        ></textarea>
      </div>
    </StyledDiv>
  );
};

// Styled Components
const StyledDiv = styled.div`
  .profile-pic {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
    .picture-container {
      height: 10rem;
      width: 10rem;
      background: #c4c4c4;
      border-radius: 50%;
      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .fa-user {
        color: #fff;
        font-size: 5rem;
      }
    }
  }
`;

export default Createprofile;
