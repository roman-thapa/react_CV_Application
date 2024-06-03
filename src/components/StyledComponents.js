import styled, { css } from "styled-components";

// Base component with shared styles
const SharedStyles = css`
  padding: 10px;
  margin: 10px;
  border: 2px solid darkblue;
  position: relative;
  border-radius: 3px;

  :before {
    ${(props) => css`
      content: "${props.tag}";
      color: darkblue;
      font-weight: bold;
    `}
    position: absolute;
    font-size: 75%;
    top: -7px;
    left: 15px;
    width: max-content;
    padding: 0 20px 0 20px;
    background-color: white;
  }
`;

// Extend the shared styles for different elements
export const P = styled.p`
  ${SharedStyles}
`;

export const StyledInput = styled.input`
  ${SharedStyles}
`;

export const StyledButton = styled.button`
  ${SharedStyles}
  cursor: pointer;
  background-color: white;
  color: darkblue;
  font-size: 16px;

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;

export const ManuDiv = styled.h2`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  :before {
    content: "";
    border-bottom: 2px solid blueviolet;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
  }
`;

export const StyledCheckbox = styled.input`
  ${SharedStyles}
`;
