import React from "react";
import * as R from "../styles/styledRegister";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

export function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [idCheckMessage, setIdCheckMessage] = useState(""); // 아이디 중복 체크 메시지 상태 추가
  const [nickCheckMessage, setNickCheckMessage] = useState(""); // 닉네임 중복 체크 메시지 상태 추가

  // 체크박스 상태 관리
  const [isPersonalInfoChecked, setIsPersonalInfoChecked] = useState(false);
  const [isThirdPartyInfoChecked, setIsThirdPartyInfoChecked] = useState(false);

  const goWelcome = () => {
    navigate(`/welcome`);
    window.scrollTo(0, 0);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    if (!isPersonalInfoChecked || !isThirdPartyInfoChecked) {
      alert(
        "개인정보 수집 및 이용과 제3자 정보 제공에 모두 동의하셔야 가입할 수 있습니다."
      );
      return;
    }

    try {
      const response = await axios.post("http://52.79.34.113/api/user/", {
        username,
        password,
        password_confirm,
        email,
        nickname,
        phone,
        name,
        birthdate,
      });
      console.log("회원가입 성공:", response.data);
      goWelcome(); // 성공적으로 가입된 후 홈으로 이동
    } catch (error) {
      console.error("회원가입 실패", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
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

    if (password.length < 8) {
      setErrorMessage("비밀번호가 8글자 미만입니다. 다시 입력하세요.");
      return false;
    }

    if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      setErrorMessage(
        "비밀번호는 문자와 숫자 조합만 가능합니다. 다시 입력하세요."
      );
      return false;
    }

    if (/^\d+$/.test(password)) {
      setErrorMessage("숫자로만 이루어져 있습니다. 다시 입력하세요.");
      return false;
    }

    if (["11111111", "12345678", "password", "qwerty"].includes(password)) {
      setErrorMessage("이 비밀번호는 너무 흔합니다. 다시 입력하세요.");
      return false;
    }

    if (password !== password_confirm) {
      setErrorMessage("비밀번호 확인이 일치하지 않습니다.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleIdCheck = async () => {
    if (username.trim() === "") {
      setIdCheckMessage("아이디를 입력하세요.");
      return;
    }

    try {
      const response = await axios.post("http://52.79.34.113/api/user/", {
        username,
      });
      if (response.data.username && response.data.username.length > 0) {
        setIdCheckMessage("사용 가능한 아이디입니다.");
      } else {
        setIdCheckMessage("사용 가능한 아이디입니다.");
      }
    } catch (error) {
      if (error.response && error.response.data.username) {
        setIdCheckMessage("이미 사용중인 아이디입니다.");
      } else {
        setIdCheckMessage("사용 가능한 아이디입니다.");
      }
    }
  };

  const handleNickCheck = async () => {
    if (nickname.trim() === "") {
      setNickCheckMessage("닉네임을 입력하세요.");
      return;
    }
    try {
      await axios.post("http://52.79.34.113/api/user/", {
        nickname,
      });
      setNickCheckMessage("사용 가능한 닉네임입니다.");
    } catch (error) {
      if (error.response && error.response.data.nickname) {
        setNickCheckMessage("이미 사용중인 닉네임입니다.");
      } else {
        setNickCheckMessage("사용 가능한 닉네임입니다.");
      }
    }
  };

  return (
    <R.Container>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
      >
        <R.Group>
          <img src="./static/images/Group.svg" alt="Group" />
        </R.Group>
        <R.Ellipse549></R.Ellipse549>
        <br />
        <br />
        <br />
        <br />
        <br />
        <R.InputContainer>
          <R.InputLabel>아이디</R.InputLabel>
          <R.UserInputShort
            type="text"
            placeholder="아이디를 입력하세요."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <R.CheckId onClick={handleIdCheck}>중복체크</R.CheckId>
          <R.IdCheckMessage>{idCheckMessage}</R.IdCheckMessage>{" "}
          {/* 아이디 중복 체크 메시지 표시 */}
          <br />
          <R.InputLabel>비밀번호 (영문 및 숫자 조합 8자 이상)</R.InputLabel>
          <R.UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <R.InputLabel>비밀번호 확인</R.InputLabel>
          <R.UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password_confirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <br />
          <br />
          <br />
          <br />
          <R.InputLabel>이름</R.InputLabel>
          <R.Name
            type="text"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <R.InputLabel>닉네임 (8자 이내)</R.InputLabel>
          <R.NickName
            type="text"
            placeholder="닉네임을 입력하세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <R.CheckNickName onClick={handleNickCheck}>중복체크</R.CheckNickName>
          <R.NickCheckMessage>{nickCheckMessage}</R.NickCheckMessage>{" "}
          {/* 닉네임 중복 체크 메시지 표시 */}
          <R.InputLabel>생년월일</R.InputLabel>
          <R.SelectBirth
            type="date"
            value={birthdate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <R.InputLabel>이메일</R.InputLabel>
          <R.Email
            type="email"
            placeholder="example@art.kr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <R.InputLabel>전화번호</R.InputLabel>
          <R.PhoneNumber
            type="tel"
            placeholder="전화번호를 입력하세요."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errorMessage && <R.ErrorMessage>{errorMessage}</R.ErrorMessage>}
          <R.Agreement>
            <input
              type="checkbox"
              checked={isPersonalInfoChecked}
              onChange={(e) => setIsPersonalInfoChecked(e.target.checked)}
            />
            <div id="text">개인정보 수집 및 이용에 대해 동의합니다.</div>
          </R.Agreement>
          <R.Agreement>
            <input
              type="checkbox"
              checked={isThirdPartyInfoChecked}
              onChange={(e) => setIsThirdPartyInfoChecked(e.target.checked)}
            />
            <div id="text">제3자 정보 제공에 동의합니다.</div>
          </R.Agreement>
          <R.Complete onClick={handleRegister}>가입하기</R.Complete>
        </R.InputContainer>
      </motion.div>
    </R.Container>
  );
}

const pageTransition = {
  initial: { x: "100%", y: "10%" }, // 오른쪽에서 시작
  animate: { x: "8%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
