import React from "react";
import * as MRD from "../styles/styledMyRecordDetail";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

export function MyRecordDetail() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [viewAt, setViewAt] = useState("");
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0); // 글자 수 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
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
        setCreatedAt(response.data.createdAt);
        setImg(response.data.img);
        setViewAt(response.data.viewAt);
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [id]);

  // 글자 수 업데이트
  useEffect(() => {
    setContentLength(content.length);
  }, [content]);

  //삭제 버튼
  const deletePost = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.delete(`http://52.79.34.113/api/posts/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      alert("기록이 삭제되었습니다.");
      navigate("/record");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("삭제 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  //수정 페이지로 이동
  const modifyPost = () => {
    navigate(`/recordwrite?id=${id}`);
  };

  const goBack = () => {
    navigate(-1);
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

  return (
    <>
      <MRD.Container isDarkMode={isDarkMode}>
        <MRD.BackBtn onClick={goBack}></MRD.BackBtn>
        <MRD.PageTitle isDarkMode={isDarkMode}>나의 기록</MRD.PageTitle>
        <MRD.Item>
          <MRD.firstBox>
            <MRD.date isDarkMode={isDarkMode}>
              <div id="text"> {viewAt} 관람</div>
            </MRD.date>
            <MRD.modify isDarkMode={isDarkMode} onClick={modifyPost}>
              <div id="text">수정</div>
            </MRD.modify>
            <MRD.remove isDarkMode={isDarkMode} onClick={deletePost}>
              <div id="text">삭제</div>
            </MRD.remove>
          </MRD.firstBox>
          <MRD.title isDarkMode={isDarkMode}>{title}</MRD.title>
          <MRD.img>
            <img
              src={img ? img : "./static/images/LikeBtn.svg"}
              alt="exhibition"
            ></img>
          </MRD.img>
          <MRD.PinkBlur></MRD.PinkBlur>
          <MRD.content isDarkMode={isDarkMode}>
            <div id="text">{content}</div>
          </MRD.content>
          <MRD.PinkBlur2></MRD.PinkBlur2>
          {/*하단바*/}
          <MRD.NavBar>
            {/*검색*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
              </MRD.NavIcon>
              <MRD.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </MRD.NavText>
            </MRD.NavBtnContainer>
            {/*AI 심리 분석*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon>
                <img src="./static/images/AIIcon.svg" onClick={goAI} />
              </MRD.NavIcon>
              <MRD.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </MRD.NavText>{" "}
            </MRD.NavBtnContainer>
            {/*홈*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="./static/images/HomeIcon.svg" onClick={goHome} />
              </MRD.NavIcon>
            </MRD.NavBtnContainer>
            {/*내 기록*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  marginLeft: "63px",
                  color: "#A259FF",
                }}
              >
                <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
              </MRD.NavIcon>
              <MRD.NavText
                style={{
                  marginLeft: "60px",
                  color: "#A259FF",
                }}
              >
                내 기록
              </MRD.NavText>
            </MRD.NavBtnContainer>
            {/*마이페이지*/}
            <MRD.NavBtnContainer>
              <MRD.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img
                  src="./static/images/MyPageIcon.svg"
                  onClick={goMyPage}
                  style={{}}
                />
              </MRD.NavIcon>
              <MRD.NavText style={{}}>마이페이지</MRD.NavText>
            </MRD.NavBtnContainer>
          </MRD.NavBar>
          {/*하단바*/}
        </MRD.Item>
      </MRD.Container>
    </>
  );
}
