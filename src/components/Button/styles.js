import styled from "styled-components";

export const ButtonWhite = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: lightgray;
  }
`;

export const ButtonRed = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: darkred;
  }


`;
