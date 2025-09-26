import styled from "styled-components";

export const Background = styled.button`
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.button`
  background-color: #000;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe{
      border: none;
  }
`
