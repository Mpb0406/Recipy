import styled from "styled-components";

export const MainButton = styled.button`
    color: #fff;
    background-color: #3B7C0B;
    border: none;
    width: 25%;
    margin: 0 2rem;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        background-color: transparent;
        color: #3B7C0B;
        border: 3px solid #3B7C0B;
    }
`;

export const SecondButton = styled.button`
    color: #3B7C0B;
    border: 3px solid #3B7C0B;
    background-color: transparent;
    width: 25%;
    margin: 0 2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #3B7C0B;
        color: #fff;
    }
`;

export const CategoryImg = styled.img`
    height: 10rem;

    /* &:hover {
        border: 5px solid blue;
        border-radius: 50%;
    } */
`;