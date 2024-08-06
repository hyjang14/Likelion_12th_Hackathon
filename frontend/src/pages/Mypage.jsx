import React from "react";
import * as MP from "../styles/styledMypage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function Mypage() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState("");
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // 전체 데이터 수

  const [page, setPage] = useState(1); // 현재 페이지

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
          `http://52.79.34.113/api/scraps/all/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        const allData = response.data;
        setContent(response.data);

        setContent(allData); //현재 페이지 데이터 설정
      } catch (error) {
        console.error("스크랩한 전시 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [page]);

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
      } catch (error) {
        console.error("프로필 실패 :", error);
      }
    };
    fetchData();
  }, []);

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.post(
        "http://52.79.34.113/api/logout/",
        {},
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      // 로그아웃 성공 시 로컬 스토리지에서 토큰 삭제하고 로그인 페이지로 이동
      localStorage.removeItem("token");
      localStorage.removeItem("usercode");
      navigate("/login");
      console.log("로그아웃 성공");
      console.log("");
    } catch (error) {
      console.error("로그아웃 실패 :", error);
    }
  };

  //전시 상세 조회
  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goMypageRevise = () => {
    navigate(`/mypagerevise`);
  };

  const goContentIntro = (id) => {
    navigate(`/contentintro?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goLogin = () => {
    navigate(`/login`);
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
      <MP.Container isDarkMode={isDarkMode}>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <MP.BackBtn onClick={goBack}></MP.BackBtn>
          <MP.PageTitle isDarkMode={isDarkMode}>마이페이지</MP.PageTitle>
          <MP.Item>
            <MP.profile>
              <div
                id="background"
                style={{
                  width: "75px",
                  height: "75px",
                  fill: "#3D3A3A",
                }}
              />
              <img src={profileImg} alt="profile"></img>
            </MP.profile>
            <MP.name isDarkMode={isDarkMode}>{nickname}</MP.name>
            <MP.edit onClick={goMypageRevise}>
              <div id="text1">프로필 편집</div>
            </MP.edit>
            <MP.logout onClick={handleLogout}>
              <div id="text2">로그아웃</div>
            </MP.logout>
            <MP.scrap isDarkMode={isDarkMode}>
              <div id="ScrapText">스크랩한 전시</div>
            </MP.scrap>
            {content.length === 0 ? (
              <MP.InfoText>
                스크랩한 전시가 없습니다.
                <br />
                마음에 드는 전시를 저장해보세요!
              </MP.InfoText>
            ) : (
              content.map((e) => (
                <MP.ScrapContainer key={e.id}>
                  <MP.ImgBox onClick={() => goContentIntro(e.data)}>
                    <img src={e.image} alt="ExhibitPoster"></img>
                  </MP.ImgBox>
                  <MP.ExhibitionIntroduce
                    onClick={() => goContentIntro(e.data)}
                    isDarkMode={isDarkMode}
                  >
                    <div id="Title">{e.title}</div>
                    <div id="Date">{e.period}</div>
                  </MP.ExhibitionIntroduce>
                </MP.ScrapContainer>
              ))
            )}
          </MP.Item>
        </motion.div>

        {/*하단바*/}
        <MP.NavBar>
          {/*검색*/}
          <MP.NavBtnContainer>
            <MP.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </MP.NavIcon>
            <MP.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </MP.NavText>
          </MP.NavBtnContainer>
          {/*AI 심리 분석*/}
          <MP.NavBtnContainer>
            <MP.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </MP.NavIcon>
            <MP.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </MP.NavText>
          </MP.NavBtnContainer>
          {/*홈*/}
          <MP.NavBtnContainer>
            <MP.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </MP.NavIcon>
          </MP.NavBtnContainer>
          {/*내 기록*/}
          <MP.NavBtnContainer>
            <MP.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </MP.NavIcon>
            <MP.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </MP.NavText>
          </MP.NavBtnContainer>
          {/*마이페이지*/}
          <MP.NavBtnContainer>
            <MP.NavIcon
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
            </MP.NavIcon>
            <MP.NavText
              style={{
                color: "#A259FF",
              }}
            >
              마이페이지
            </MP.NavText>
          </MP.NavBtnContainer>
        </MP.NavBar>
        {/*하단바*/}
      </MP.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};

export default Mypage;
