import React from "react";
import * as H from "../styles/styledHome";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

import SimpleSlider from "./SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Home() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsCountPerPage = 3; // 페이지당 항목 수
  const newItemCountPerPage = 3;

  const goContentIntro = (id) => {
    navigate(`/contentintro?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goReviewDetail = (id) => {
    navigate(`/reviewdetail?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goReview = () => {
    navigate(`/review`);
    window.scrollTo(0, 0);
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

  const [content, setContent] = useState([]);
  const [review, setReview] = useState([]);
  const [newcontent, setNewContent] = useState([]);

  //최신 전시
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://52.79.34.113/api/data/`);
        const allData = response.data;

        // 최신 전시 데이터를 날짜로 정렬
        const sortedData = allData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // 최신 전시 3개만 가져오기
        const latestExhibits = sortedData.slice(0, newItemCountPerPage);

        setNewContent(latestExhibits); // 최신 전시 3개 설정
      } catch (error) {
        console.error("최신 전시 조회 실패 :", error);
      }
    };
    fetchData();
  }, []);

  //HOT 전시
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const response = await axios.get(`http://52.79.34.113/api/data/`);
        const allData = response.data;
        const sortedData = allData.sort((a, b) => b.scrapCount - a.scrapCount);

        setContent(response.data); // API 응답으로 받은 데이터를 state에 저장   const allData = response.data;

        //총 데이터 개수 추정
        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setContent(paginatedData); //현재 페이지 데이터 설정
      } catch (error) {
        console.error("전시 상세 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  //hot 후기글
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://52.79.34.113/api/posts/`, {
          headers: { Authorization: `Token ${token}` },
        });

        const allData = response.data;
        const sortedData = allData.sort((a, b) => b.likeCount - a.likeCount);

        //총 데이터 개수 추정
        const totalItems = sortedData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setReview(paginatedData); //현재 페이지 데이터 설정
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  return (
    <>
      <H.Container isDarkMode={isDarkMode}>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <H.Item>
            <H.ThemeBtn
              onClick={toggleDarkMode}
              isDarkMode={isDarkMode}
            ></H.ThemeBtn>
            <H.NewExhibit>
              {" "}
              <H.InfoTextPurple>New</H.InfoTextPurple>
              <SimpleSlider newContent={newcontent}></SimpleSlider>
            </H.NewExhibit>
            {/* <SimpleSlider></SimpleSlider> */}
            <H.PinkBlur />
            <H.AD onClick={goAI} isDarkMode={isDarkMode}></H.AD>
            <br />
            <H.InfoText isDarkMode={isDarkMode}>HOT 후기글</H.InfoText>
            <H.ReviewBtn onClick={goReview} isDarkMode={isDarkMode}>
              더보기
              <H.WhiteArrow isDarkMode={isDarkMode} />
            </H.ReviewBtn>{" "}
            {review.map((e) => (
              <H.ReviewBox
                key={e.id}
                onClick={() => goReviewDetail(e.id)}
                isDarkMode={isDarkMode}
              >
                <H.ProfileImg>
                  <img src={`http://52.79.34.113${e.profile}`} alt="profile" />
                </H.ProfileImg>
                <H.ReviewName isDarkMode={isDarkMode}>
                  {e.nickname}
                </H.ReviewName>
                <H.ReviewDate isDarkMode={isDarkMode}>
                  {e.createdAt2}
                </H.ReviewDate>
                <H.ReviewTitle isDarkMode={isDarkMode}>{e.title}</H.ReviewTitle>
                <H.ReviewContent isDarkMode={isDarkMode}>
                  {e.content}
                </H.ReviewContent>
                <H.ReviewImg>
                  <img src={e.img} alt="Review Image" />
                </H.ReviewImg>
                <H.LikeIcon />
                <H.LikeCnt>{e.likeCount}</H.LikeCnt>
              </H.ReviewBox>
            ))}
            <H.InfoText isDarkMode={isDarkMode}>HOT 전시</H.InfoText>
            <H.ReviewBtn onClick={goSearch} isDarkMode={isDarkMode}>
              더보기 <H.WhiteArrow isDarkMode={isDarkMode} />
            </H.ReviewBtn>
            {content.map((e) => (
              <H.ExhibitPoster key={e.id} onClick={() => goContentIntro(e.id)}>
                <img src={e.image} />
                <H.ExhibitInfo key={e.id} onClick={() => goContentIntro(e.id)}>
                  <p id={"InfoP"}>
                    {e.title}
                    <br />
                    {e.period}
                    <br />
                    {e.place}
                  </p>
                </H.ExhibitInfo>
                <br />
              </H.ExhibitPoster>
            ))}{" "}
          </H.Item>{" "}
        </motion.div>
        <H.PurpleBlur></H.PurpleBlur>
        {/*하단바*/}
        <H.NavBar>
          {/*검색*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </H.NavIcon>
            <H.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </H.NavText>
          </H.NavBtnContainer>
          {/*AI 심리 분석*/}
          <H.NavBtnContainer>
            <H.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </H.NavIcon>
            <H.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </H.NavText>
          </H.NavBtnContainer>
          {/*홈*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </H.NavIcon>
          </H.NavBtnContainer>
          {/*내 기록*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </H.NavIcon>
            <H.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </H.NavText>
          </H.NavBtnContainer>
          {/*마이페이지*/}
          <H.NavBtnContainer>
            <H.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </H.NavIcon>
            <H.NavText>마이페이지</H.NavText>
          </H.NavBtnContainer>
        </H.NavBar>
        {/*하단바*/}
      </H.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
