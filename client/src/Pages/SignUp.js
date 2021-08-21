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
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;

    input {
        width: 40%;
        padding: 0.5rem;
    }

    button {
        margin: 3rem 0;
        width: 100%;
        height: 4rem;
    }
`;

export default SignUp
