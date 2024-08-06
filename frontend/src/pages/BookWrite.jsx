import React from "react";
import * as W from "../styles/styledBookWrite";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function BookWrite() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(""); // 추가된 부분
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);

  // 글자 수 업데이트
  useEffect(() => {
    setContentLength(content.length);
    if (content.length > 300) {
      alert("300자 이내로 작성해주세요.");
      setContent(content.slice(0, 300));
    }
  }, [content]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const bookId = queryParams.get("book_id");

  const goBookCommunity = () => {
    navigate(`/bookcommunity?id=${id}`);
    window.scrollTo(0, 0);
  };

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 기존 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      if (bookId) {
        try {
          const token = localStorage.getItem("token");

          if (!token) {
            alert("로그인 후 이용하세요.");
            return;
          }

          const response = await axios.get(
            `http://52.79.34.113/api/datas/${id}/books/${bookId}/`,
            {
              headers: { Authorization: `Token ${token}` },
            }
          );

          setTitle(response.data.title);
          setAuthor(response.data.author);
          setContent(response.data.content);
          setImgFile(response.data.image);
        } catch (error) {
          alert("제목은 15자 이내로 작성해야 합니다.");
          console.error("기존 데이터 불러오기 실패:", error);
        }
      }
    };

    fetchData();
  }, [id, bookId]);

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goBookDetail = (bookId) => {
    navigate(`/bookdetail?id=${id}&book_id=${bookId}`);
    window.scrollTo(0, 0);
  };

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
      formData.append("author", author);
      formData.append("content", content);
      if (imgRef.current.files[0]) {
        formData.append("image", imgRef.current.files[0]);
      }

      let response;

      if (bookId) {
        response = await axios.patch(
          `http://52.79.34.113/api/datas/${id}/books/${bookId}/`,
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("도서 추천글 수정 성공:", response.data);
        goBookDetail(bookId);
      } else {
        response = await axios.post(
          `http://52.79.34.113/api/datas/${id}/books/`,
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("도서 추천글 생성 성공:", response.data);
        goBookCommunity();
      }
    } catch (error) {
      console.error("도서 추천글 생성 실패:", error);
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
      <W.Container isDarkMode={isDarkMode}>
        <W.BackBtn onClick={goBack} />
        <W.PageTitle isDarkMode={isDarkMode}>추천글 작성</W.PageTitle>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <W.Item>
            <W.ShareBtn onClick={handlePost}>공유하기</W.ShareBtn>
            <W.PostImgLabel htmlFor="profileImg">
              <img
                src={
                  isDarkMode
                    ? "./static/images/PostImgBtn.svg"
                    : "./static/images/lightPostImgBtn.svg"
                }
              />
            </W.PostImgLabel>
            <W.PostImgInput
              type="file"
              accept="image/*"
              onChange={saveImgFile}
              ref={imgRef}
              id="profileImg"
            />
            <W.PostedImg>
              <img src={imgFile ? imgFile : "./static/images/BasicImg.svg"} />
            </W.PostedImg>
            <W.PostTitle
              isDarkMode={isDarkMode}
              placeholder="책 제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></W.PostTitle>
            <W.PostArtist
              isDarkMode={isDarkMode}
              placeholder="작가명을 입력하세요."
              value={author} // 추가된 부분
              onChange={(e) => setAuthor(e.target.value)} // 추가된 부분
            ></W.PostArtist>
            <W.PostContent
              isDarkMode={isDarkMode}
              placeholder="내용을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></W.PostContent>
            <W.ContentLength isDarkMode={isDarkMode}>
              <div id="text">({contentLength}/300)</div>
            </W.ContentLength>
          </W.Item>{" "}
        </motion.div>
        {/*하단바*/}
        <W.NavBar>
          {/*검색*/}
          <W.NavBtnContainer>
            <W.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </W.NavIcon>
            <W.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </W.NavText>
          </W.NavBtnContainer>
          {/*AI 심리 분석*/}
          <W.NavBtnContainer>
            <W.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </W.NavIcon>
            <W.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </W.NavText>{" "}
          </W.NavBtnContainer>
          {/*홈*/}
          <W.NavBtnContainer>
            <W.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </W.NavIcon>
          </W.NavBtnContainer>
          {/*내 기록*/}
          <W.NavBtnContainer>
            <W.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </W.NavIcon>
            <W.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </W.NavText>
          </W.NavBtnContainer>
          {/*마이페이지*/}
          <W.NavBtnContainer>
            <W.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </W.NavIcon>
            <W.NavText>마이페이지</W.NavText>
          </W.NavBtnContainer>
        </W.NavBar>
        {/*하단바*/}
      </W.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
