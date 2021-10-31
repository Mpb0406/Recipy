import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { MainButton } from "../Styles";
import { connect } from "react-redux";
import { displayAlert } from "../actions/alert";
import { register } from "../actions/auth";

const SignUp = ({ displayAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      displayAlert("Passwords do not match (yikes!)", "warning");
    } else {
      register({ name, email, password });
      displayAlert("Registration Success!", "success");
    }
  };

  if (isAuthenticated) {
    setTimeout(() => {
      return <Redirect to="/createprofile" />;
    }, 5000);
  }

  return (
    <StyledDiv>
      <h1>Create An Account</h1>
      <StyledForm onSubmit={(e) => onSubmit(e)}>
        <div className="name-container">
          <input
            type="text"
            placeholder="First Name"
            name="name"
            onChange={(e) => onChange(e)}
          />
          <input type="text" placeholder="Last Name" name="lastName" />
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="Create a Password"
          name="password"
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="Re-Type Password"
          name="password2"
          onChange={(e) => onChange(e)}
        />
        <MainButton>Create Account</MainButton>
        <Link to="/login">Return to Login</Link>
      </StyledForm>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// Styled Components

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34%;
  margin-top: 1.5rem;

  .name-container {
    display: flex;
    justify-content: space-between;
    width: 100%;

    input {
      width: 48%;
    }
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    margin: 0.6rem 0;
  }

  button {
    margin: 3rem 0;
    width: 100%;
    height: 4rem;
  }

  a {
    color: #969696;
    text-decoration: none;
    font-weight: 500;
  }
`;

export default connect(mapStateToProps, { displayAlert, register })(SignUp);
