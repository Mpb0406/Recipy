import styled from "styled-components";

export const MainButton = styled.button`
  color: #fff;
  background-color: #3b7c0b;
  border: none;
  width: 25%;
  height: 4rem;
  margin: 0 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
    border: 3px solid #3b7c0b;
    color: #3b7c0b;
  }
`;

export const SecondButton = styled.button`
  color: #fff;
  border: 3px solid #3b7c0b;
  background-color: transparent;
  width: 25%;
  margin: 0 2rem;
  transition: all 0.3s ease-in-out;
  color: #3b7c0b;
  &:hover {
    background-color: #3b7c0b;
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
