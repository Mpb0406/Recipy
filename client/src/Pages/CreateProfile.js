import React from "react";
import styled from "styled-components";
import { MainButton } from "../Styles";

const Createprofile = () => {
  return (
    <StyledForm>
      <h1 className="title">
        Create <span>Your Profile</span>{" "}
      </h1>

      <div className="profile-pic">
        <div className="picture-container">
          <i className="fas fa-user"></i>
        </div>
        <div className="file-upload">
          <p>Add a profile picture</p>
          <input type="file" />
        </div>
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
      <MainButton>Submit</MainButton>
    </StyledForm>
  );
};

// Styled Components
const StyledForm = styled.form`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-bottom: 2rem;
  }

  .profile-pic {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
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
  p {
    margin-bottom: 0.5rem;
  }
  button {
    margin: 2rem;
    align-self: center;
  }
`;

export default Createprofile;
