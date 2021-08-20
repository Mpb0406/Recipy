import React from "react";
import styled from "styled-components";
import LoginHero from "../components/LoginHero";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <StyledDiv>
      <LoginHero />
      <LoginForm />
    </StyledDiv>
  );
};

//Styled Components

const StyledDiv = styled.div`
  display: flex;
  justify-content: start;
  height: 90vh;
`;

export default Login;
