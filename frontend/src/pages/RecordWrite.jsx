import React, { useState, useEffect, useRef } from "react";
import * as RW from "../styles/styledRecordWrite";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

export function RecordWrite() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [viewAt, setViewAt] = useState("");
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  const [contentLength, setContentLength] = useState(0); // 내용 글자 수 상태

  useEffect(() => {
    if (id) {
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
          setContent(response.data.content);
          setViewAt(response.data.viewAt);
          setImgFile(response.data.img);
        } catch (error) {
          console.error("기록글 조회 실패:", error);
        }
      };

      fetchData();
    }
  }, [id]);

  // 내용 글자 수 업데이트
  useEffect(() => {
    setContentLength(content.length);
    if (content.length > 300) {
      alert("내용은 300자 이내로 작성해주세요.");
      setContent(content.slice(0, 300));
    }
  }, [content]);

  const [titleLength, setTitleLength] = useState(0); // 제목 글자 수 상태

  useEffect(() => {
    setTitleLength(title.length);
    if (title.length > 15) {
      alert("제목은 15자 이내로 작성해주세요.");
      setTitle(title.slice(0, 15));
    }
  }, [title]);

  useEffect;

  const handlePost = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("viewAt", viewAt);
      formData.append("content", content);
      if (imgRef.current.files[0]) {
        formData.append("img", imgRef.current.files[0]);
      }

      if (id) {
        const response = await axios.patch(
          `http://52.79.34.113/api/posts/${id}/`,
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("기록글 수정 성공:", response.data);
      } else {
        const response = await axios.post(
          "http://52.79.34.113/api/posts/",
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("기록글 생성 성공:", response.data);
      }

      goRecord();
    } catch (error) {
      console.error("기록글 처리 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

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

  return (
    <>
      <RW.Container isDarkMode={isDarkMode}>
        <RW.BackBtn onClick={goBack}></RW.BackBtn>
        <RW.PageTitle isDarkMode={isDarkMode}>
          {id ? "기록 수정" : "기록하기"}
        </RW.PageTitle>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <RW.Item>
            <RW.record onClick={handlePost}>
              <div id="text">{id ? "수정하기" : "공유하기"}</div>
            </RW.record>
            <RW.PostImgLabel htmlFor="profileImg">
              <img src="./static/images/Image.svg" />
            </RW.PostImgLabel>
            <RW.PostImgInput
              type="file"
              accept="image/*"
              onChange={saveImgFile}
              ref={imgRef}
              id="profileImg"
            />
            <RW.PostedImg>
              <img src={imgFile ? imgFile : "./static/images/lightPhoto.svg"} />
            </RW.PostedImg>
            <RW.date
              type="date"
              value={viewAt}
              onChange={(e) => setViewAt(e.target.value)}
            />
            <RW.PinkBlur></RW.PinkBlur>
            <RW.title
              isDarkMode={isDarkMode}
              placeholder="관람한 전시명을 입력하세요. 15자 이내)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <RW.content
              isDarkMode={isDarkMode}
              placeholder="전시에 대해 자유롭게 기록해보세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <RW.ContentLength isDarkMode={isDarkMode}>
              <div id="text">({contentLength}/300)</div>
            </RW.ContentLength>

            <RW.PinkBlur2></RW.PinkBlur2>
          </RW.Item>{" "}
        </motion.div>
        <RW.NavBar>
          <RW.NavBtnContainer>
            <RW.NavIcon style={{ marginLeft: "25px" }}>
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </RW.NavIcon>
            <RW.NavText style={{ marginLeft: "28px" }}>검색</RW.NavText>
          </RW.NavBtnContainer>
          <RW.NavBtnContainer>
            <RW.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </RW.NavIcon>
            <RW.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </RW.NavText>
          </RW.NavBtnContainer>
          <RW.NavBtnContainer>
            <RW.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </RW.NavIcon>
          </RW.NavBtnContainer>
          <RW.NavBtnContainer>
            <RW.NavIcon style={{ marginLeft: "63px", color: "#A259FF" }}>
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </RW.NavIcon>
            <RW.NavText style={{ marginLeft: "60px", color: "#A259FF" }}>
              내 기록
            </RW.NavText>
          </RW.NavBtnContainer>
          <RW.NavBtnContainer>
            <RW.NavIcon style={{ marginLeft: "45px" }}>
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </RW.NavIcon>
            <RW.NavText>마이페이지</RW.NavText>
          </RW.NavBtnContainer>
        </RW.NavBar>
      </RW.Container>
    </>
  );
}
const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
