import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import recipylogo from '../img/recipylogo.png';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';

const Footer = () => {
    return (
        <StyledFooter>
            <Socials>
                <Logo src={recipylogo} alt="" />
                <div className="icon-container">
                    <SocialIcon src={facebook} alt="" />
                    <SocialIcon src={instagram} alt="" />
                    <SocialIcon src={twitter} alt="" />
                </div>
            </Socials>
            <FooterContainer>
                <div className="about column">
                    <h3>About Us</h3>
                    <a href="/">Home</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <div className="services column">
                    <h3>Services</h3>
                    <a href="/">Home</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/reportbug">Report An Issue</a>
                </div>
                <div className="account column">
                    <h3>Account</h3>
                    <a href="/profile">Profile</a>
                    <a href="/account">My Account</a>
                    <a href="/preferences">Preferences</a>
                </div>
                <div className="subscribe column">
                    <h3>Subscribe</h3>
                    <input type="email" placeholder="Enter Your Email" />
                    <button>Subscribe</button>
                </div>
            </FooterContainer>


        </StyledFooter>
    )
};

// Styled Components

const StyledFooter = styled.footer`
    height: 60vh;
    width: 100%;
    background-color: #3B7C0B;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 30%;
        left: 2.5%;
        height: 0.1rem;
        width: 95%;
        background-color: #bbb;
    }
`;

const Socials = styled.div`
    height: 30%;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 5rem;
    cursor: pointer;
`;

const SocialIcon = styled.img`
    height: 3rem;
    margin: 1rem;
    cursor: pointer;
`;

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: auto;

    .column {
        display: flex;
        flex-direction: column;
        margin: 1.5rem;
        flex-grow: 1;

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 2rem;
            color: #fff;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                top: 95%;
                left: 0;
                height: 0.15rem;
                width: 20%;
                background-color: #fff;
            }
        }

        a {
            margin: 0 0 1rem;
            text-decoration: none;
            color: #fff;
        }
    }

    .subscribe {
        align-self: flex-start;
        flex-grow: 2;

        input {
            padding: 0.5rem;
            font-size: 1rem;
            color: #fff;
            width: 60%;
            background-color: transparent;
            outline: none;
            border: 2px solid #fff;
            border-radius: 0.2rem;

            &::placeholder {
                color: #fff;
            }
        }

        button {
            width: 60%;
            margin-top: 1rem;
            color: #3B7C0B;
            font-weight: 500;
            border: 2px solid #fff;
            transition: all 0.5s ease;

            &:hover {
                background-color: transparent;
                color: #fff;
                border: 2px solid #fff;
            }
        }
    }
`;

export default Footer
