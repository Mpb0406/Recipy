import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import HeroText from "../components/HeroText";
import Categories from "../components/Categories";
import CTA from "../components/CTA";
import { connect } from "react-redux";
import RecipeFeed from "../components/RecipeFeed";

const Home = ({ auth: { isAuthenticated } }) => {
  return (
    <StyledFeed>
      {isAuthenticated ? (
        <div className="feed-container">
          <RecipeFeed />
        </div>
      ) : (
        <StyledMain>
          <HeroText />
          <Hero />
        </StyledMain>
      )}

      <Categories />
      <CTA />
    </StyledFeed>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

//Styled Components
const StyledFeed = styled.div`
  .feed-container {
    width: 80%;
    margin: auto;
  }
`;

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default connect(mapStateToProps)(Home);
