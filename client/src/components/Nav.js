import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import recipylogo from "../img/recipylogo.png";
import recipeNavIcon from "../img/recipe-nav-icon.png";
import userNavIcon from "../img/user-nav-icon.png";
import logoutNavIcon from "../img/logout-nav-icon.png";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <>
      <li>
        <StyledAnchor href="/" className="active">
          Home
        </StyledAnchor>
      </li>
      <li>
        <StyledAnchor href="/login">Login</StyledAnchor>
      </li>
      <li>
        <StyledAnchor href="/signup">Sign Up</StyledAnchor>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className="active">
        <img className="nav-icon" src={recipeNavIcon} alt="" />
        <StyledAnchor href="/">My Recipes</StyledAnchor>
      </li>
      <li>
        <img className="nav-icon" src={userNavIcon} alt="" />
        <StyledAnchor href="/myrecipes">Profile</StyledAnchor>
      </li>
      <li>
        <img className="nav-icon" src={logoutNavIcon} alt="" />
        <StyledAnchor onClick={logout} href="/dashboard">
          Logout
        </StyledAnchor>
      </li>
    </>
  );

  return (
    <StyledNav>
      <Logo src={recipylogo} alt="" />

      {!loading && (
        <NavItems> {isAuthenticated ? authLinks : guestLinks} </NavItems>
      )}
    </StyledNav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

//Styled Components
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  margin: 0 3rem;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  list-style: none;
  position: relative;

  .active::after {
    content: "";
    position: absolute;
    height: 0.4rem;
    width: 30%;
    background-color: #3b7c0b;
    top: 105%;
    left: 50%;
    transform: translateX(-50%);
  }

  li {
    display: flex;
    align-items: center;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #343036;
  position: relative;
`;

const Logo = styled.img`
  height: 3.5rem;
  cursor: pointer;
`;

const Profile = styled.img`
  height: 1.8rem;
  cursor: pointer;
`;

export default connect(mapStateToProps, { logout })(Nav);
