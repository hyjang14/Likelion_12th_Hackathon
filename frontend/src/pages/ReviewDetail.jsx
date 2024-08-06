import React from "react";
import * as RD from "../styles/styledReviewDetail";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function ReviewDetail() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [viewAt, setViewAt] = useState("");
  const [profile, setProfile] = useState("");
  const [content, setContent] = useState("");
  const [nickname, setNickName] = useState("");

  const [likeBtn, setLikeBtn] = useState("./static/images/LikeBtn.svg");
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(
          `http://52.79.34.113/api/posts/${id}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        setTitle(response.data.title);
        setNickName(response.data.nickname);
        setContent(response.data.content);
        setCreatedAt(response.data.createdAt);
        setImg(response.data.img);
        setViewAt(response.data.viewAt);
        setProfile(response.data.profile);
        setLikeCount(response.data.likeCount);
        setIsLiked(response.data.isLiked);

        // 로컬 스토리지에서 좋아요 상태 불러오기
        const storedIsLiked = localStorage.getItem("isLiked_" + id);
        setIsLiked(storedIsLiked === "true" || response.data.isLiked);
        setLikeBtn(
          storedIsLiked === "true" || response.data.isLiked
            ? "./static/images/LikeBtnOn.svg"
            : "./static/images/LikeBtn.svg"
        );
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData();
  }, [id]);

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  // 하단바 네비게이션 함수들
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

  // 좋아요 버튼 핸들러
  const handleLike = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const url = isLiked
        ? `http://52.79.34.113/api/likes/${id}/delete/`
        : `http://52.79.34.113/api/likes/${id}/`;

      const method = isLiked ? "delete" : "post";

      const response = await axios({
        method,
        url,
        headers: { Authorization: `Token ${token}` },
      });

      setIsLiked((prev) => {
        const newLikeStatus = !prev;
        localStorage.setItem("isLiked_" + id, newLikeStatus); // 상태를 로컬 스토리지에 저장
        setLikeCount((prevCount) =>
          newLikeStatus ? prevCount + 1 : prevCount - 1
        );
        setLikeBtn(
          newLikeStatus
            ? "./static/images/LikeBtnOn.svg"
            : "./static/images/LikeBtn.svg"
        );
        return newLikeStatus;
      });

      alert(isLiked ? "좋아요가 취소되었습니다." : "좋아요를 남겼습니다.");
    } catch (error) {
      console.error("좋아요 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <>
      <RD.Container isDarkMode={isDarkMode}>
        <RD.BackBtn onClick={goBack}></RD.BackBtn>
        <RD.PageTitle isDarkMode={isDarkMode}>커뮤니티</RD.PageTitle>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <RD.Item>
            <RD.ReviewContainer>
              <RD.profile isDarkMode={isDarkMode}>
                <img src={`http://52.79.34.113${profile}`} alt="profile" />
                <div id="name">{nickname}</div>
                <div id="time">{createdAt}</div>
              </RD.profile>
              <RD.firstBox isDarkMode={isDarkMode}>
                <RD.date>
                  <div id="text">{viewAt}</div>
                </RD.date>
                <RD.like onClick={handleLike}>
                  <img src={likeBtn} alt="like" />
                  <div id="count">{likeCount}</div>
                </RD.like>
                <RD.PinkBlur></RD.PinkBlur>
              </RD.firstBox>
              <RD.title isDarkMode={isDarkMode}>{title}</RD.title>
              <RD.img>
                <img src={img} alt="exhibition" />
              </RD.img>
              <RD.contentContainer isDarkMode={isDarkMode}>
                <div id="content">{content}</div>
              </RD.contentContainer>
            </RD.ReviewContainer>
            <RD.PinkBlur2></RD.PinkBlur2>{" "}
          </RD.Item>{" "}
        </motion.div>
        {/* 하단바 */}
        <RD.NavBar>
          {/* 검색 */}
          <RD.NavBtnContainer>
            <RD.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </RD.NavIcon>
            <RD.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </RD.NavText>
          </RD.NavBtnContainer>
          {/* AI 심리 분석 */}
          <RD.NavBtnContainer>
            <RD.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </RD.NavIcon>
            <RD.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </RD.NavText>
          </RD.NavBtnContainer>
          {/* 홈 */}
          <RD.NavBtnContainer>
            <RD.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </RD.NavIcon>
          </RD.NavBtnContainer>
          {/* 내 기록 */}
          <RD.NavBtnContainer>
            <RD.NavIcon
              style={{
                marginLeft: "63px",
                color: "#A259FF",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </RD.NavIcon>
            <RD.NavText
              style={{
                marginLeft: "60px",
                color: "#A259FF",
              }}
            >
              내 기록
            </RD.NavText>
          </RD.NavBtnContainer>
          {/* 마이페이지 */}
          <RD.NavBtnContainer>
            <RD.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </RD.NavIcon>
            <RD.NavText>마이페이지</RD.NavText>
          </RD.NavBtnContainer>
        </RD.NavBar>
        {/* 하단바 끝 */}
      </RD.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
