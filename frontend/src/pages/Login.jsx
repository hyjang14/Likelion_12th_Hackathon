import React from "react";
import * as L from "../styles/styledLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import styled from "styled-components";

// 스타일링 컴포넌트 정의
const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: ${(props) =>
    props.isDarkMode
      ? "#121212"
      : "linear-gradient(0deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 100%), linear-gradient(180deg, #e2d5f3 8.5%, #dcd3e8 17%, #d9d2e2 21.25%, #e8e8e8 67%, #fff 100%)"};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const LightLogin = styled.button`
  width: 328px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #a259ff;
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

export const InputLabel = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3d3a3a")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  margin: 7px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
`;

export function Login() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const goHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };

  const goRegister = () => {
    navigate(`/register`);
    window.scrollTo(0, 0);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;
    try {
      const response = await axios.post(
        "http://52.79.34.113/api/rest-auth/login/",
        {
          username,
          password,
        }
      );

      //토큰 저장
      const token = response.data.token;
      localStorage.setItem("token", token);

      //usercode 저장
      const usercode = response.data.usercode;
      localStorage.setItem("usercode", usercode);

      console.log("로그인 성공:", response.data);
      goHome();
    } catch (error) {
      console.error("로그인 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        setErrorMessage("아이디 혹은 비밀번호가 잘못되었습니다.");
      } else {
        setErrorMessage("로그인에 실패했습니다. 네트워크를 확인해주세요.");
      }
    }
  };

  const validateInputs = () => {
    if (username.trim() === "") {
      setErrorMessage("아이디를 입력하세요.");
      return false;
    }

    if (password.trim() === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={{ duration: 0.3 }}
      >
        <L.Group>
          <img src="./static/images/Group.svg" alt="Group" />
        </L.Group>
        <L.Ellipse549></L.Ellipse549>
        <br />
        <br />
        <br />
        <br />
        <L.InputContainer>
          <InputLabel isDarkMode={isDarkMode}>아이디</InputLabel>
          <L.UserInput
            isDarkMode={isDarkMode}
            type="text"
            placeholder="아이디를 입력하세요."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></L.UserInput>
          <br></br>
          <InputLabel isDarkMode={isDarkMode}>비밀번호</InputLabel>
          <L.UserInput
            isDarkMode={isDarkMode}
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></L.UserInput>
        </L.InputContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <br></br>
        <LightLogin isDarkMode={isDarkMode} onClick={handleLogin}>
          완료
        </LightLogin>
        <L.InfoText isDarkMode={isDarkMode}>아직 계정이 없나요?</L.InfoText>
        <L.RegisterBtn onClick={goRegister} isDarkMode={isDarkMode}>
          회원가입 >
        </L.RegisterBtn>
      </motion.div>
    </Container>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
