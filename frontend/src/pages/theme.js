// src/theme.js
import styled from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const LightContainer = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.45) 100%
    ),
    linear-gradient(
      180deg,
      #e2d5f3 8.5%,
      #dcd3e8 17%,
      #d9d2e2 21.25%,
      #e8e8e8 67%,
      #fff 100%
    );
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
