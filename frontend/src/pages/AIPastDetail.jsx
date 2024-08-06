import React, { useState, useEffect } from "react";
import * as A from "../styles/styledAIPastDetail";
import { useNavigate, useLocation } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

export function AIPastDetail() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const calculateWidth = (percentage) => {
    return `${Math.min((percentage / 100) * 213, 213)}px`;
  };

  const [post, setPost] = useState({
    title: "",
    img: "",
    createdAt: "",
    viewAt: "",
    content: "",
    nickname: "",
  });
  const [analysis, setAnalysis] = useState({
    analysis: "",
    happiness: 0,
    sadness: 0,
    anger: 0,
    anxiety: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(
          "http://52.79.34.113/api/analysis-results/",
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        const item = response.data.find((item) => item.id.toString() === id);

        if (item) {
          setPost({
            title: item.post.title || "",
            img: item.post.img || "",
            createdAt: item.post.createdAt || "",
            viewAt: item.post.viewAt || "",
            content: item.post.content || "",
            nickname: item.post.nickname || "",
          });

          setAnalysis({
            analysis: item.analysis || "",
            happiness: item.happiness || 0,
            sadness: item.sadness || 0,
            anger: item.anger || 0,
            anxiety: item.anxiety || 0,
          });
        }
      } catch (error) {
        console.error("후기글 조회 실패 :", error.message);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const pieChartData = [
    { value: analysis.anger, color: "#261042", name: "분노" },
    { value: analysis.anxiety, color: "#512984", name: "불안" },
    { value: analysis.sadness, color: "#8241D8", name: "슬픔" },
    { value: analysis.happiness, color: "#DBBEFC", name: "행복" },
  ];

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

  const consumerHeight =
    (post.content || "").length <= 150
      ? `${Math.max((post.content || "").length * 1, 120)}px` // 최소 50px로 설정
      : `${(post.content || "").length}px`;

  return (
    <>
      <A.Container isDarkMode={isDarkMode}>
        <A.BackBtn onClick={goBack} />
        <A.PageTitle isDarkMode={isDarkMode}>분석 상세</A.PageTitle>
        <A.Item>
          <A.Introduce isDarkMode={isDarkMode} />
          <A.Content isDarkMode={isDarkMode}>
            <div id="Title">{post.title}</div>
            <div id="Date">{post.createdAt}</div>
          </A.Content>{" "}
          <A.PurpleBlur />
          <A.Consumer
            isDarkMode={isDarkMode}
            style={{
              flexGrow: "1",
              height: consumerHeight,
              maxWidth: "100%",
            }}
          >
            <div id="profile">
              <img src="./static/images/ProfileImg.svg" alt="Profile" />
            </div>
            <div id="text">{post.content}</div>
          </A.Consumer>
          <A.Result isDarkMode={isDarkMode}>감정 분석 결과</A.Result>
          <PieChart
            style={{
              width: "160px",
              height: "160px",
              marginLeft: "70px",
              marginTop: "37px",
            }}
            data={pieChartData}
            reveal={100}
            lineWidth={40}
            background="#f3f3f3"
            lengthAngle={360}
            rounded
            animate
            label={({ dataEntry }) => `${post.nickname}님의 감정`}
            labelStyle={{
              fontSize: "6px",
              fill: isDarkMode ? "#fff" : "3d3a3a",
            }}
            labelPosition={0}
          />
          <A.Purple>
            <div id="purple1">
              <img src="./static/images/Purple1.svg" alt="Purple1" />
            </div>
            <div id="gray">분노 {analysis.anger}%</div>
            <div
              id="PercentPurple1"
              style={{
                width: calculateWidth(analysis.anger), // 계산된 너비 적용
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(90deg, #6F4F98 0%, #251A32 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple>
          <A.Purple2>
            <div id="purple2">
              <img src="./static/images/Purple2.svg" alt="Purple2" />
            </div>
            <div id="gray">불안 {analysis.anxiety}%</div>
            <div
              id="PercentPurple2"
              style={{
                width: calculateWidth(analysis.anxiety), // 계산된 너비 적용
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(180deg, #9D7DC7 0%, #4D3D61 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple2>
          <A.Purple3>
            <div id="purple3">
              <img src="./static/images/Purple3.svg" alt="Purple3" />
            </div>
            <div id="gray">슬픔 {analysis.sadness}%</div>
            <div
              id="PercentPurple3"
              style={{
                width: calculateWidth(analysis.sadness), // 계산된 너비 적용
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(180deg, #C9ADED 0%, #726387 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple3>
          <A.Purple4>
            <div id="purple4">
              <img src="./static/images/Purple4.svg" alt="Purple4" />
            </div>
            <div id="gray">행복 {analysis.happiness}%</div>
            <div
              id="PercentPurple4"
              style={{
                width: calculateWidth(analysis.happiness), // 계산된 너비 적용
                height: "22px",
                borderRadius: "9.919px",
                background: "linear-gradient(180deg, #EBE2F7 0%, #BAB3C4 100%)",
                boxShadow: "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                marginLeft: "70px",
                marginTop: "-22px",
              }}
            />
          </A.Purple4>
          <A.AItext isDarkMode={isDarkMode}>{analysis.analysis}</A.AItext>
          <A.NavBar>
            <A.NavBtnContainer>
              <A.NavIcon style={{ marginLeft: "25px" }}>
                <img
                  src="./static/images/SearchIcon.svg"
                  alt="Search"
                  onClick={goSearch}
                />
              </A.NavIcon>
              <A.NavText style={{ marginLeft: "28px" }}>검색</A.NavText>
            </A.NavBtnContainer>
            <A.NavBtnContainer>
              <A.NavIcon>
                <img
                  src="./static/images/AIIcon.svg"
                  alt="AI Analysis"
                  onClick={goAI}
                />
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
              </A.NavText>
            </A.NavBtnContainer>
            <A.NavBtnContainer>
              <A.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img
                  src="./static/images/HomeIcon.svg"
                  alt="Home"
                  onClick={goHome}
                />
              </A.NavIcon>
            </A.NavBtnContainer>
            <A.NavBtnContainer>
              <A.NavIcon style={{ marginLeft: "63px" }}>
                <img
                  src="./static/images/RecordIcon.svg"
                  alt="Record"
                  onClick={goRecord}
                />
              </A.NavIcon>
              <A.NavText style={{ marginLeft: "60px" }}>내 기록</A.NavText>
            </A.NavBtnContainer>
            <A.NavBtnContainer>
              <A.NavIcon style={{ marginLeft: "45px" }}>
                <img
                  src="./static/images/MyPageIcon.svg"
                  alt="My Page"
                  onClick={goMyPage}
                />
              </A.NavIcon>
              <A.NavText>마이페이지</A.NavText>
            </A.NavBtnContainer>
          </A.NavBar>
        </A.Item>
      </A.Container>
    </>
  );
}
