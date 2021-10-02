import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import HeroText from "../components/HeroText";
import Categories from "../components/Categories";
import CTA from "../components/CTA";
import { connect } from "react-redux";

const Home = ({ auth: { isAuthenticated } }) => {
  return (
    <div>
      {isAuthenticated ? (
        <h1>Recipe Feed</h1>
      ) : (
        <StyledMain>
          <HeroText />
          <Hero />
        </StyledMain>
      )}

      <Categories />
      <CTA />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default connect(mapStateToProps)(Home);
