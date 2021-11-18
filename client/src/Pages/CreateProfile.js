import React, { useState } from "react";
import styled from "styled-components";
import { MainButton } from "../Styles";
import { connect } from "react-redux";
import { createProfile } from "../actions/profile";
import Gravatar from "react-gravatar";
import Loading from "../components/Loading";

const Createprofile = ({ createProfile, profile: { profile } }) => {
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

  return profile === null ? (
    <Loading />
  ) : (
    <StyledForm onSubmit={(e) => onSubmit(e)}>
      <h1 className="title">
        Update <span>Your Profile</span>{" "}
      </h1>

      <div className="profile-pic">
        <Gravatar
          size={150}
          className="picture-container"
          email={profile.avatar}
        />
        <div className="file-upload">
          <div className="gravatar-actions">
            <div className="change-pic">
              <i className="fas fa-camera"></i>
              <p>Change profile picture</p>
            </div>
            <label className="instructions">
              <ol>
                <li>Login or create account</li>
                <li>Click Update Gravatar</li>
                <li>Follow instructions</li>
                <li>Changes may take 24hrs</li>
              </ol>
            </label>
          </div>
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
          <div className="social">
            <i className="fab fa-tiktok social-icon"></i>
            <input
              type="text"
              name="tiktok"
              onChange={(e) => onChangeSocial(e)}
              placeholder="TikTok"
            />
          </div>
        </div>
      )}

      <MainButton>Submit</MainButton>
    </StyledForm>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

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

    .file-upload {
      cursor: pointer;
      font-size: 1.1rem;
      transition: color 0.3s ease;

      .change-pic {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        &:hover {
          color: #3b7c0b;
        }
      }

      ol {
        margin-left: 1rem;
      }

      p {
        margin-left: 0.5rem;
      }
    }
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

export default connect(mapStateToProps, { createProfile })(Createprofile);
