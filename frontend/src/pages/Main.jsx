import React from "react";
import * as M from "../styles/styledMain";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext"; // ThemeContext에서 useTheme을 가져옵니다.

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  }
`;

const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: #121212;
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LightContainer = styled(Container)`
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
  color: #000;
`;

const Login = styled.button`
  width: 328px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #121212;
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  cursor: pointer;
  margin-bottom: 20px;
`;

const LightLogin = styled.button`
  width: 328px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #fff;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  cursor: pointer;
  margin-bottom: 20px;
`;

export function Main() {
  const { isDarkMode, toggleDarkMode } = useTheme(); // ThemeContext에서 다크 모드 상태와 토글 함수를 가져옵니다.
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
    window.scrollTo(0, 0);
  };

  const goRegister = () => {
    navigate(`/register`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      {isDarkMode ? (
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.3 }}
          >
            <M.Group>
              <img src="./static/images/Group2.svg" alt="Group" />
            </M.Group>
            <M.Ellipse549></M.Ellipse549>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Login onClick={goLogin}>로그인</Login>
            <br />
            <M.Register onClick={goRegister}>회원가입</M.Register>
          </motion.div>
        </Container>
      ) : (
        <LightContainer>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.3 }}
          >
            <M.Group>
              <img src="./static/images/Group2.svg" alt="Group" />
            </M.Group>
            <M.Ellipse549></M.Ellipse549>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <LightLogin onClick={goLogin}>로그인</LightLogin>
            <br />
            <M.Register onClick={goRegister}>회원가입</M.Register>
          </motion.div>
        </LightContainer>
      )}
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};

export default Main;
