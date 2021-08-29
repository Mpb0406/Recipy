import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MainButton } from '../Styles'

const SignUp = () => {
    return (
        <StyledDiv>
            <h1>Create An Account</h1>
            <StyledForm action="">
                <div className="name-container">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Create a Password" />
                <input type="password" placeholder="Re-Type Password" />
                <MainButton>Create Account</MainButton>
                <Link to="/login">Return to Login</Link>

            </StyledForm>
        </StyledDiv>
    )
};

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

export default SignUp
