import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledDiv>
      <i className="fas fa-spinner fa-pulse"></i>
    </StyledDiv>
  );
};

// Styled Components

const StyledDiv = styled.div`
  height: 90vh;
  width: 50%;
  margin: 5rem auto;
  text-align: center;

  i {
    font-size: 4rem;
  }
`;

export default Loading;
