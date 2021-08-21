import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainButton } from "../Styles";

const LoginForm = () => {
  return (
    <StyledDiv>
      <StyledForm action="" className="login">
        <h1>Hello, Welcome Back</h1>
        <div className="form">
          <div className="input-container">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <Link to="/" className="forgotPassword">Forgot your password?</Link>
          <MainButton>Login</MainButton>
          <h4 className="signUp">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </h4>
        </div>
      </StyledForm>
    </StyledDiv>
  );
};

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
      color: #3B7C0B;
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

export default LoginForm;
