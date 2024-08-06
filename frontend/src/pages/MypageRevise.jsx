import React from "react";
import * as MPR from "../styles/styledMypageRevise";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function MypageRevise() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  //프로필 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const usercode = localStorage.getItem("usercode");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const userResponse = await axios.get(
          `http://52.79.34.113/api/user/${usercode}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setProfileImg(userResponse.data.profile);
        setNickname(userResponse.data.nickname);
        setName(userResponse.data.name);
        setBirthDate(userResponse.data.birthdate);
        setEmail(userResponse.data.email);
        setPhone(userResponse.data.phone);
        setUsername(userResponse.data.username);
      } catch (error) {
        console.error("프로필 조회 실패 :", error);
      }
    };
    fetchData();
  }, []);

  // 이미지 업로드 input의 onChange

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  //회원정보 수정 기능
  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("token");
      const usercode = localStorage.getItem("usercode");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const formData = new FormData();
      formData.append("nickname", nickname);
      formData.append("phone", phone);
      if (imgRef.current && imgRef.current.files[0]) {
        formData.append("profile", imgRef.current.files[0]);
      }

      // 디버깅을 위한 로그
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      await axios.patch(
        `http://52.79.34.113/api/user/${usercode}/update/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("변경사항이 저장되었습니다.");
      goMyPage();
    } catch (error) {
      if (error.response) {
        // 서버에서 반환한 오류 메시지
        console.error("서버 응답 오류:", error.response.data);
        alert(`${JSON.stringify(error.response.data)}`);
      } else {
        console.error("회원정보 수정 실패 :", error);
        alert("회원정보 수정 실패. 서버 로그를 확인하세요.");
      }
    }
  };

  //하단바
  const goSearch = () => {
    navigate(`/search`);
    window.scrollTo(0, 0);
  };

  const goAI = () => {
    navigate(`/ai`);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    navigate(`/home`);
    window.scrollTo(0, 0);
  };

  const goRecord = () => {
    navigate(`/record`);
    window.scrollTo(0, 0);
  };

  const goMyPage = () => {
    navigate(`/mypage`);
    window.scrollTo(0, 0);
  };

  //하단바 끝

  return (
    <>
      <MPR.Container isDarkMode={isDarkMode}>
        <MPR.BackBtn onClick={goBack}></MPR.BackBtn>
        <MPR.PageTitle isDarkMode={isDarkMode}>프로필 편집</MPR.PageTitle>{" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <MPR.Item>
            <MPR.profile>
              <div
                id="background"
                style={{
                  width: "75px",
                  height: "75px",
                  fill: "#3D3A3A",
                }}
              />
              <img src={imgFile ? imgFile : profileImg} alt="profile"></img>
              <div
                id="backgroundBlack"
                style={{
                  width: "26px",
                  height: "26px",
                  background: isDarkMode ? "#121212" : "#EFE7F8",
                  borderRadius: "10px 0px 10px 10px",
                  marginLeft: "160px",
                  marginTop: "-21px",
                  position: "relative",
                  zIndex: "3",
                }}
              />
              <div
                id="backgroundPurple"
                style={{
                  width: "21px",
                  height: "21px",
                  background: isDarkMode ? "#121212" : "#fff",
                  borderRadius: "10px 0px 10px 10px",
                  marginLeft: "163px",
                  marginTop: "-23px",
                  position: "relative",
                  zIndex: "3",
                  border: "1px solid #A259FF",
                }}
              />
              <MPR.PostImgLabel htmlFor="profileImg">
                <img
                  src="./static/images/ProfileEdit.svg"
                  alt="profile-edit"
                  style={{
                    width: "11px",
                    height: "11px",
                    marginLeft: "169px",
                    marginTop: "-18px",
                    zIndex: "3",
                    position: "absolute",
                    cursor: "pointer",
                  }}
                />
              </MPR.PostImgLabel>
              <MPR.PostImgInput
                type="file"
                accept="image/*"
                onChange={saveImgFile}
                ref={imgRef}
                id="profileImg"
              />
            </MPR.profile>
            <MPR.name isDarkMode={isDarkMode}>{nickname}</MPR.name>
            <MPR.informationText isDarkMode={isDarkMode}>
              정보
              <img
                src={
                  isDarkMode
                    ? "./static/images/WhiteArrow.svg"
                    : "./static/images/lightWhiteArrow.svg"
                }
              />
            </MPR.informationText>
            <MPR.InputContainer isDarkMode={isDarkMode}>
              <MPR.InputLabel isDarkMode={isDarkMode}>아이디</MPR.InputLabel>
              <MPR.UserInfoShort>{username}</MPR.UserInfoShort>
              <MPR.InputLabel isDarkMode={isDarkMode}>이름</MPR.InputLabel>
              <MPR.Name>{name}</MPR.Name>
              <MPR.InputLabel isDarkMode={isDarkMode}>생년월일</MPR.InputLabel>
              <MPR.SelectBirth>{birthdate}</MPR.SelectBirth>
              <MPR.InputLabel isDarkMode={isDarkMode}>이메일</MPR.InputLabel>
              <MPR.Email>{email}</MPR.Email>
              <MPR.InputLabel isDarkMode={isDarkMode}>전화번호</MPR.InputLabel>
              <MPR.Email>{phone}</MPR.Email>
            </MPR.InputContainer>
            <MPR.changeText isDarkMode={isDarkMode}>
              변경
              <img
                src={
                  isDarkMode
                    ? "./static/images/WhiteArrow.svg"
                    : "./static/images/lightWhiteArrow.svg"
                }
                alt="profile"
              />
              <div id="background" />
            </MPR.changeText>
            <MPR.InputContainer isDarkMode={isDarkMode}>
              <MPR.InputLabel isDarkMode={isDarkMode}>닉네임</MPR.InputLabel>
              <MPR.NickName
                type="text"
                placeholder="닉네임을 입력하세요."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              ></MPR.NickName>
              <MPR.InputLabel isDarkMode={isDarkMode}>휴대번호</MPR.InputLabel>
              <MPR.PhoneNumber
                type="tel"
                placeholder="전화번호를 입력하세요."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></MPR.PhoneNumber>
              <MPR.Complete onClick={handleSaveChanges}>
                변경사항 저장하기
              </MPR.Complete>
            </MPR.InputContainer>
          </MPR.Item>{" "}
        </motion.div>
        {/*하단바*/}
        <MPR.NavBar>
          {/*검색*/}
          <MPR.NavBtnContainer>
            <MPR.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </MPR.NavIcon>
            <MPR.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </MPR.NavText>
          </MPR.NavBtnContainer>
          {/*AI 심리 분석*/}
          <MPR.NavBtnContainer>
            <MPR.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </MPR.NavIcon>
            <MPR.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </MPR.NavText>{" "}
          </MPR.NavBtnContainer>
          {/*홈*/}
          <MPR.NavBtnContainer>
            <MPR.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </MPR.NavIcon>
          </MPR.NavBtnContainer>
          {/*내 기록*/}
          <MPR.NavBtnContainer>
            <MPR.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </MPR.NavIcon>
            <MPR.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </MPR.NavText>
          </MPR.NavBtnContainer>
          {/*마이페이지*/}
          <MPR.NavBtnContainer>
            <MPR.NavIcon
              style={{
                marginLeft: "45px",
                color: "#A259FF",
              }}
            >
              <img
                src="./static/images/MyPageIcon.svg"
                onClick={goMyPage}
                style={{
                  color: "#A259FF",
                }}
              />
            </MPR.NavIcon>
            <MPR.NavText
              style={{
                color: "#A259FF",
              }}
            >
              마이페이지
            </MPR.NavText>
          </MPR.NavBtnContainer>
        </MPR.NavBar>
        {/*하단바*/}
      </MPR.Container>
    </>
  );
}
const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
