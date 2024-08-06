import React from "react";
import * as A from "../styles/styledAI";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function AI() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIRecordList = () => {
    navigate(`/airecordlist`);
  };

  const goAIPast = () => {
    navigate(`/aipast`);
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
      <A.Container isDarkMode={isDarkMode}>
        <A.BackBtn onClick={goBack}></A.BackBtn>
        <A.PageTitle isDarkMode={isDarkMode}>AI 심리 분석</A.PageTitle>{" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <A.Item>
            <A.AIImg isDarkMode={isDarkMode} />
            <A.Analysis onClick={goAIRecordList}>
              <div id="folder">
                <img src="./static/images/Folder.svg" />
              </div>
              <div id="text">내 기록 분석하기</div>
            </A.Analysis>
            <A.Replay onClick={goAIPast}>
              <div id="past">
                <img src="./static/images/Past.svg" />
              </div>
              <div id="text2">지난 분석 다시 보기</div>
            </A.Replay>{" "}
            <A.PinkBlur />
          </A.Item>
        </motion.div>
        {/*하단바*/}
        <A.NavBar>
          {/*검색*/}
          <A.NavBtnContainer>
            <A.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </A.NavIcon>
            <A.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </A.NavText>
          </A.NavBtnContainer>
          {/*AI 심리 분석*/}
          <A.NavBtnContainer>
            <A.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </A.NavIcon>
            <A.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
                color: "#A259FF",
              }}
            >
              AI 심리 분석
            </A.NavText>{" "}
          </A.NavBtnContainer>
          {/*홈*/}
          <A.NavBtnContainer>
            <A.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </A.NavIcon>
          </A.NavBtnContainer>
          {/*내 기록*/}
          <A.NavBtnContainer>
            <A.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </A.NavIcon>
            <A.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </A.NavText>
          </A.NavBtnContainer>
          {/*마이페이지*/}
          <A.NavBtnContainer>
            <A.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </A.NavIcon>
            <A.NavText>마이페이지</A.NavText>
          </A.NavBtnContainer>
        </A.NavBar>
        {/*하단바*/}
      </A.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
