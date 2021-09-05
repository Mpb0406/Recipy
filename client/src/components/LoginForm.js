import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { MainButton } from "../Styles";
import { connect } from "react-redux";
import { login } from "../actions/auth";

const LoginForm = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log(formData);

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  // Redirect if Logged in
  if (isAuthenticated) {
    return <Redirect to="/myrecipes" />;
  }

  return (
    <StyledDiv>
      <StyledForm action="" onSubmit={(e) => onSubmit(e)} className="login">
        <h1>
          Hello, <br /> Welcome Back
        </h1>
        <div className="form">
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <Link to="/" className="forgotPassword">
            Forgot your password?
          </Link>
          <MainButton type="submit">Login</MainButton>
          <h4 className="signUp">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </h4>
        </div>
      </StyledForm>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

//Styled Components

const StyledDiv = styled.div`
  height: 90vh;
  width: 100%;
`;

const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    line-height: 4.5rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 8rem;

    input {
      padding: 0.5rem;
      font-size: 1.2rem;
      width: 100%;
    }
  }
  .forgotPassword {
    text-align: end;
    color: #969696;
    font-weight: 600;
    display: block;
  }

  .signUp {
    text-align: center;
    color: #969696;
    font-weight: 500;

    a {
      color: #3b7c0b;
      text-decoration: none;
      font-weight: 700;
    }
  }

  button {
    align-items: center;
    margin: 3rem 0;
    width: 100%;
    height: 4rem;
  }

  .form {
    width: 60%;
  }
`;

export default connect(mapStateToProps, { login })(LoginForm);
