import React, { useState, useEffect } from "react";
import * as A from "../styles/styledAIResult";
import { useNavigate, useLocation } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import { useTheme } from "../contexts/ThemeContext";

export function AIResult() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [viewAt, setViewAt] = useState("");
  const [post, setPost] = useState({});
  const [nickname, setNickName] = useState("");
  const [analysis, setAnalysis] = useState({
    analysis: "",
    happiness: 0,
    sadness: 0,
    anger: 0,
    anxiety: 0,
  });

  const [loading, setLoading] = useState(true);

  const goAIRecordList = () => {
    navigate(`/airecordlist`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(
          `http://52.79.34.113/api/analyze-post/${id}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        const { post, analysisResult } = response.data;

        setPost({
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          img: post.img,
          viewAt: post.viewAt,
          nickname: post.nickname,
        });

        setAnalysis({
          analysis: analysisResult.analysis,
          happiness: analysisResult.happiness,
          sadness: analysisResult.sadness,
          anger: analysisResult.anger,
          anxiety: analysisResult.anxiety,
        });

        setLoading(false);
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIPast = () => {
    navigate(`/aipast`);
  };

  const pieChartData = [
    { value: analysis.anger, color: "#261042", name: "분노" },
    { value: analysis.anxiety, color: "#512984", name: "불안" },
    { value: analysis.sadness, color: "#8241D8", name: "슬픔" },
    { value: analysis.happiness, color: "#DBBEFC", name: "행복" },
  ];

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

  const textLengthInPx = analysis.analysis.length * 3.3;

  const consumerHeight =
    (post.content || "").length <= 150
      ? `${Math.max((post.content || "").length * 1, 120)}px`
      : `${(post.content || "").length * 1.35}px`;

  const maxWidth = 170; // 기준 너비

  // 퍼센테이지 값을 기준으로 계산된 너비를 반환하는 함수
  const calculateWidth = (percentage) => {
    return `${Math.min((percentage / 100) * maxWidth, maxWidth)}px`;
  };

  return (
    <A.Container isDarkMode={isDarkMode}>
      <A.BackBtn onClick={goBack}></A.BackBtn>
      <A.PageTitle isDarkMode={isDarkMode}>분석 결과</A.PageTitle>
      <A.Item>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              marginTop: "-100px",
              marginLeft: "-7%",
            }}
          >
            <PuffLoader color="#B880FF" size={85} />
            <h1
              style={{
                fontFamily: "Pretendard Variable",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "160.5%",
                color: "#696969",
                marginLeft: "-110px",
                marginTop: "190px",
              }}
            >
              분석이 진행중입니다.
            </h1>
          </div>
        ) : (
          <>
            <A.Introduce isDarkMode={isDarkMode} />
            <A.Content isDarkMode={isDarkMode}>
              <div id="Title">{post.title}</div>
              <div id="Date">{post.createdAt}</div>
            </A.Content>
            <A.PurpleBlur />
            <A.Consumer
              isDarkMode={isDarkMode}
              style={{
                flexGrow: "1",
                height: consumerHeight,
                maxWidth: "100%",
              }}
            >
              <div id="review">{post.content}</div>
            </A.Consumer>
            <A.AIAnalysis
              isDarkMode={isDarkMode}
              style={{
                flexGrow: "1",
                height: `${textLengthInPx}px`,
                maxWidth: "100%",
              }}
            >
              <div id="text">감정 분석 결과</div>
              <PieChart
                style={{
                  width: "160px",
                  height: "160px",
                  marginLeft: "80px",
                  marginTop: "70px",
                  borderRadius: "0px",
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
                  fontFamily: "Pretendard Variable",
                  fontWeight: "400",
                  fontSize: "6px",
                  fill: isDarkMode ? "#fff" : "3d3a3a",
                }}
                labelPosition={0}
              />
              <div id="purple1">
                <img src="./static/images/Purple1.svg" alt="분노"></img>
              </div>
              <div id="gray1">분노 {analysis.anger}%</div>
              <div
                id="PercentPurple1"
                style={{
                  width: calculateWidth(analysis.anger), // 퍼센테이지에 맞게 계산된 너비
                  height: "14px",
                  borderRadius: "9.919px",
                  background:
                    "linear-gradient(90deg, #6F4F98 0%, #251A32 100%)",
                  boxShadow:
                    "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                  marginLeft: "70px",
                  marginTop: "-14px",
                }}
              />
              {/* 반복되는 부분도 동일하게 처리 */}
              <div id="purple2">
                <img src="./static/images/Purple2.svg" alt="불안"></img>
              </div>
              <div id="gray2">불안 {analysis.anxiety}%</div>
              <div
                id="PercentPurple2"
                style={{
                  width: calculateWidth(analysis.anxiety),
                  height: "14px",
                  borderRadius: "9.919px",
                  background:
                    "linear-gradient(180deg, #9D7DC7 0%, #4D3D61 100%)",
                  boxShadow:
                    "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                  marginLeft: "70px",
                  marginTop: "-14px",
                }}
              />
              <div id="purple3">
                <img src="./static/images/Purple3.svg" alt="슬픔"></img>
              </div>
              <div id="gray3">슬픔 {analysis.sadness}%</div>
              <div
                id="PercentPurple3"
                style={{
                  width: calculateWidth(analysis.sadness),
                  height: "14px",
                  borderRadius: "9.919px",
                  background:
                    "linear-gradient(180deg, #C9ADED 0%, #726387 100%)",
                  boxShadow:
                    "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                  marginLeft: "70px",
                  marginTop: "-14px",
                }}
              />
              <div id="purple4">
                <img src="./static/images/Purple4.svg" alt="행복"></img>
              </div>
              <div id="gray4">행복 {analysis.happiness}%</div>
              <div
                id="PercentPurple4"
                style={{
                  width: calculateWidth(analysis.happiness),
                  height: "14px",
                  borderRadius: "9.919px",
                  background:
                    "linear-gradient(180deg, #EBE2F7 0%, #BAB3C4 100%)",
                  boxShadow:
                    "0px 3.968px 3.968px 0px rgba(0, 0, 0, 0.25) inset",
                  marginLeft: "70px",
                  marginTop: "-14px",
                }}
              />
              <div
                id="AItext"
                style={{
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                {analysis.analysis}
              </div>
            </A.AIAnalysis>
            <A.Analysis onClick={goAIRecordList}>
              <div id="folder">
                <img src="./static/images/Folder.svg" />
              </div>
              <div id="text">다른 기록 분석하기</div>
            </A.Analysis>
            <A.Replay onClick={goAIPast}>
              <div id="past">
                <img src="./static/images/Past.svg" alt="지난 분석"></img>
              </div>
              <div id="text2">지난 분석 다시 보기</div>
            </A.Replay>
            {/* 하단바 */}
            <A.NavBar>
              {/* 검색 */}
              <A.NavBtnContainer>
                <A.NavIcon style={{ marginLeft: "25px" }}>
                  <img
                    src="./static/images/SearchIcon.svg"
                    onClick={goSearch}
                    alt="검색"
                  />
                </A.NavIcon>
                <A.NavText style={{ marginLeft: "28px" }}>검색</A.NavText>
              </A.NavBtnContainer>
              {/* AI 심리 분석 */}
              <A.NavBtnContainer>
                <A.NavIcon>
                  <img
                    src="./static/images/AIIcon.svg"
                    onClick={goAI}
                    alt="AI 심리 분석"
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
              {/* 홈 */}
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
                    onClick={goHome}
                    alt="홈"
                  />
                </A.NavIcon>
              </A.NavBtnContainer>
              {/* 내 기록 */}
              <A.NavBtnContainer>
                <A.NavIcon style={{ marginLeft: "63px" }}>
                  <img
                    src="./static/images/RecordIcon.svg"
                    onClick={goRecord}
                    alt="내 기록"
                  />
                </A.NavIcon>
                <A.NavText style={{ marginLeft: "60px" }}>내 기록</A.NavText>
              </A.NavBtnContainer>
              {/* 마이페이지 */}
              <A.NavBtnContainer>
                <A.NavIcon style={{ marginLeft: "45px" }}>
                  <img
                    src="./static/images/MyPageIcon.svg"
                    onClick={goMyPage}
                    alt="마이페이지"
                  />
                </A.NavIcon>
                <A.NavText>마이페이지</A.NavText>
              </A.NavBtnContainer>
            </A.NavBar>
          </>
        )}
      </A.Item>
    </A.Container>
  );
}
