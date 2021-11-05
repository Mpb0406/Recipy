import React, { useState, useEffect } from "react";
import styled from "styled-components";
import man from "../img/man.jpg";
import defaultUser from "../img/default-user.png";
import kitchen from "../img/kitchen.jpg";
import UserFeedCard from "../components/Cards/UserFeedCard";
import RecipeFeedCard from "../components/Cards/RecipeFeedCard";
import { connect } from "react-redux";
import { getProfile } from "../actions/profile";
import Loading from "../components/Loading";

//Create Local State to Toggle Active Classes for Bookmarks, Followers, and Following

const MyProfile = ({ getProfile, profile: { profile } }) => {
  const [toggleDisplay, setToggleDisplay] = useState("bookmarks");

  useEffect(() => {
    getProfile();
  }, []);

  return profile === null ? (
    <Loading />
  ) : (
    <StyledDiv>
      <section className="header">
        <div className="img-container">
          <div className="img-darkener"></div>
          <img src={kitchen} alt="" />
        </div>

        <div className="avatar-container">
          <img src={defaultUser} alt="" />
        </div>
        <h3 className="username">Mike Bolloskis</h3>
      </section>
      <main className="main-section">
        <div className="follower-container">
          <div
            onClick={() => setToggleDisplay("bookmarks")}
            className={`bookmarks ${
              toggleDisplay === "bookmarks" ? "active" : ""
            }`}
          >
            <p>{profile.bookmarks.length}</p>
            <span>Bookmarks</span>
          </div>
          <div
            onClick={() => setToggleDisplay("followers")}
            className={`followers ${
              toggleDisplay === "followers" ? "active" : ""
            }`}
          >
            <p>{profile.followers.length}</p>
            <span>Followers</span>
          </div>
          <div
            onClick={() => setToggleDisplay("following")}
            className={`following ${
              toggleDisplay === "following" ? "active" : ""
            }`}
          >
            <p>{profile.following.length}</p>
            <span>Following</span>
          </div>
        </div>
        <div className="bio-container">
          <h4>
            My <span>Bio:</span>{" "}
          </h4>
          <p>
            This is my bio and this is where I write a short description about
            myself and things and stuff and things and stuff and things and
            stuff and things and stuff and stuff and things
          </p>
        </div>
      </main>
      <section className="content-container">
        <h3 className="content-title">
          My{" "}
          <span>
            {toggleDisplay === "bookmarks"
              ? "Bookmarks"
              : toggleDisplay === "followers"
              ? "Followers"
              : "Following"}
          </span>
        </h3>
        <div className="feed">
          {toggleDisplay === "bookmarks" ? (
            <>
              {profile.bookmarks.map((bookmark) => (
                <RecipeFeedCard
                  title={bookmark.title}
                  description={bookmark.description}
                  tags={bookmark.tags}
                  likes={bookmark.likes}
                  id={bookmark._id}
                />
              ))}
            </>
          ) : toggleDisplay === "followers" ? (
            <>
              {profile.followers.map((follow) => (
                <UserFeedCard id={follow._id} />
              ))}
            </>
          ) : (
            profile.following.map((follow) => <UserFeedCard />)
          )}
        </div>
      </section>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

//Styled Components
const StyledDiv = styled.div`
  .header {
    width: 100%;
    height: 40vh;
    position: relative;
    z-index: 1;

    .img-container {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: relative;

      img {
        width: 100rem;
        height: 25rem;
        object-fit: cover;
        position: absolute;
      }

      .img-darkener {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 1;
      }
    }
  }

  .avatar-container {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 150%;
    left: 3%;
    transform: translateY(-130%);
    overflow: hidden;
    border: 5px solid #3b7c0b;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    img {
      width: 14rem;
      object-fit: cover;
    }
  }

  .username {
    position: absolute;
    top: 80%;
    left: 20%;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    z-index: 2;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.6));
  }

  .follower-container {
    height: 5rem;
    width: 50%;
    background: #fff;
    /* border-radius: 0.5rem; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    margin: 3rem auto 2rem;

    .bookmarks,
    .followers,
    .following {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      p {
        font-size: 1.2rem;
        font-weight: 600;
      }
      span {
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .active {
      position: relative;
    }

    .active > span {
      font-weight: 700;
    }

    .active::after {
      content: "";
      position: absolute;
      top: 118%;
      left: 50%;
      transform: translateX(-50%);
      height: 0.3rem;
      width: 8rem;
      background: #3b7c0b;
    }
  }

  .main-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bio-container {
    margin: 0 10rem 2rem;

    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      color: #757575;
    }
  }

  .content-container {
    margin: 2rem 10rem 2rem;

    .content-title {
      font-size: 2rem;
    }

    .feed {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
  }
`;

export default connect(mapStateToProps, { getProfile })(MyProfile);
