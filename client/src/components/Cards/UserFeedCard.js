import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import Gravatar from "react-gravatar";
import Moment from "react-moment";

const UserFeedCard = ({ id, profile: { profile } }) => {
  const [user, setUser] = useState({
    name: "",
    followers: "",
    following: "",
    bio: "",
  });

  useEffect(async () => {
    let res = await axios.get(`/api/profile/${id}`);
    setUser({
      name: res.data.name,
      followers: res.data.followers.length,
      following: res.data.following.length,
    });
  }, []);

  return (
    <StyledMain>
      <div className="top-container">
        <div className="avatar">
          {/* <img src={defaultUser} alt="" /> */}
          <Gravatar className="gravatar" size={85} email={profile.avatar} />
        </div>

        <div className="flex">
          <div className="user-info">
            <h3 className="name">{user.name}</h3>
            <Moment className="time" format="MM/DD/YYYY">
              {profile.memberSince}
            </Moment>
            <div className="follows">
              <span>
                {user.followers} <p>Followers</p>{" "}
              </span>
              <span>
                {user.following} <p>Following</p>{" "}
              </span>
            </div>
          </div>
          <span className="follow-button">Follow</span>
        </div>
      </div>

      <div className="bio">
        <p>This is my bio. This is a small paragraph about me.</p>
      </div>
    </StyledMain>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

//Styled Components
const StyledMain = styled.main`
  background: #fff;
  height: 35vh;
  width: 85%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1.5rem auto;

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

  .gravatar {
    border-radius: 50%;
  }

  .user-info {
    .date {
      font-size: 0.75rem;
      font-weight: 600;
      color: #969696;
    }

    .name {
      font-size: 1.4rem;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #3b7c0b;
      }
    }
  }

  .time {
    font-size: 0.8rem;
    font-weight: 600;
    color: #858585;
    line-height: 1rem;
  }

  .follows {
    display: flex;
    align-items: center;

    span {
      font-weight: 600;
      font-size: 1rem;
      margin: 0.5rem 0.8rem 0 0;
      color: black;

      p {
        display: inline;
        color: #3b7c0b;
        font-size: 1rem;
      }
    }
  }

  .bio {
    margin: 0 2rem 3rem;
    p {
      font-size: 1rem;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    width: 85%;
  }

  .follow-button {
    cursor: pointer;
    font-weight: 600;
  }
`;

export default connect(mapStateToProps)(UserFeedCard);
