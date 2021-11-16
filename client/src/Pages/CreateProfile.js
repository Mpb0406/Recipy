import React, { useState } from "react";
import styled from "styled-components";
import { MainButton } from "../Styles";
import { connect } from "react-redux";
import { createProfile } from "../actions/profile";

const Createprofile = ({ createProfile }) => {
  const [formData, setFormData] = useState({
    bio: "",
    social: {
      instagram: "",
      twitter: "",
      facebook: "",
      youtube: "",
    },
  });

  const [toggleSocials, setToggleSocials] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChangeSocial = (e) =>
    setFormData({
      ...formData,
      social: { ...formData.social, [e.target.name]: e.target.value },
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    createProfile(formData);
  };

  console.log(formData);

  return (
    <StyledForm onSubmit={(e) => onSubmit(e)}>
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
          name="bio"
          id=""
          cols="100"
          rows="5"
          placeholder="Bio..."
          onChange={(e) => onChange(e)}
        ></textarea>
      </div>
      <button
        className="socials-button"
        onClick={() => setToggleSocials(!toggleSocials)}
      >
        Add socials
      </button>

      {toggleSocials && (
        <div className="add-socials">
          <div className="social">
            <i className="fab fa-facebook social-icon"></i>
            <input
              type="text"
              name="facebook"
              onChange={(e) => onChangeSocial(e)}
              placeholder="Facebook"
            />
          </div>
          <div className="social">
            <i className="fab fa-instagram social-icon"></i>
            <input
              type="text"
              name="instagram"
              onChange={(e) => onChangeSocial(e)}
              placeholder="Instagram"
            />
          </div>
          <div className="social">
            <i className="fab fa-twitter social-icon"> </i>
            <input
              type="text"
              name="twitter"
              onChange={(e) => onChangeSocial(e)}
              placeholder="Twitter"
            />
          </div>
          <div className="social">
            <i className="fab fa-youtube social-icon"></i>
            <input
              type="text"
              name="youtube"
              onChange={(e) => onChangeSocial(e)}
              placeholder="Youtube"
            />
          </div>
        </div>
      )}

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

  .socials-button {
    background: #3b7c0b;
    color: #fff;
    border: 2px solid #f0f7ff;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 0.5s ease;

    &:hover {
      background: none;
      color: #3b7c0b;
      border: 2px solid #3b7c0b;
    }
  }

  .add-socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .social {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem;
    }

    .social-icon {
      font-size: 2rem;
      margin-right: 1rem;
    }

    input {
      margin: 0 0.5rem;
      padding: 0.25rem;
      font-size: 1rem;
    }
  }
`;

export default connect(null, { createProfile })(Createprofile);
