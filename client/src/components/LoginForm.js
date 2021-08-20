import React from "react";
import styled from "styled-components";
import { MainButton } from "../Styles";

const LoginForm = () => {
  return (
    <StyledDiv>
      <StyledForm action="" className="login">
        <h1>Hello, Welcome Back</h1>
        <div className="input-container">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <h4>Forgot your password?</h4>
        <MainButton>Login</MainButton>
        <h4>
          Don't have an account? <a href="#">Sign Up</a>
        </h4>
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
  margin-top: 6.5rem;

  h1 {
    text-align: center;
    margin-bottom: 5rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 10rem;

    input {
      padding: 0.5rem;
      font-size: 1.2rem;
      width: 50%;
    }
  }
`;

export default LoginForm;
