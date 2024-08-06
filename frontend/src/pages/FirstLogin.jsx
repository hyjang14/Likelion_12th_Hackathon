import React from "react";
import * as L from "../styles/styledFirstLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export function FirstLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const goIntroduceApp = () => {
    navigate(`/introduceapp`);
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
      goIntroduceApp();
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
    <>
      <L.Container>
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
            <L.InputLabel>아이디</L.InputLabel>
            <L.UserInput
              type="text"
              placeholder="아이디를 입력하세요."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></L.UserInput>
            <br></br>
            <L.InputLabel>비밀번호</L.InputLabel>
            <L.UserInput
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></L.UserInput>
          </L.InputContainer>
          {errorMessage && <L.ErrorMessage>{errorMessage}</L.ErrorMessage>}
          <br></br>
          <L.Complete onClick={handleLogin}>완료</L.Complete>
        </motion.div>
      </L.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
