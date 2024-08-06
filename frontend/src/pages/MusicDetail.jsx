import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as M from "../styles/styledBookDetail";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function MusicDetail() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const musicId = queryParams.get("music_id");

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const [profile, setProfile] = useState("");
  const [content, setContent] = useState("");
  const [nickname, setNickName] = useState("");
  const [author, setAuthor] = useState("");

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
          `http://52.79.34.113/api/datas/${id}/musics/${musicId}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setTitle(response.data.title);
        setNickName(response.data.nickname);
        setContent(response.data.content);
        setCreatedAt(response.data.createdAt);
        setProfile(response.data.profile);
        setImage(response.data.image);
        setAuthor(response.data.author);
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [id, musicId]);

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

  const goMusicCommunity = () => {
    navigate(`/musiccommunity?id=${id}`);
    window.scrollTo(0, 0);
  };

  //삭제 버튼
  const deletePost = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.delete(
        `http://52.79.34.113/api/datas/${id}/musics/${musicId}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      alert("게시글이 삭제되었습니다.");
      goMusicCommunity();
      window.scrollTo(0, 0);
    } catch (error) {
      alert("자신의 게시글만 삭제할 수 있습니다.");
      console.error("삭제 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  //수정 페이지로 이동
  const modifyPost = () => {
    navigate(`/musicwrite?id=${id}&music_id=${musicId}`);
  };

  return (
    <>
      <M.Container isDarkMode={isDarkMode}>
        {" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <M.BackBtn onClick={goBack}></M.BackBtn>
          <M.ProfileImgBlack>
            <img src={`http://52.79.34.113/${profile}`} />
          </M.ProfileImgBlack>
          <M.InfoText isDarkMode={isDarkMode}>{nickname}</M.InfoText>
          <M.PostDate isDarkMode={isDarkMode}>{createdAt}</M.PostDate>
          <M.modify isDarkMode={isDarkMode} onClick={modifyPost}>
            <div id="text">수정</div>
          </M.modify>
          <M.remove isDarkMode={isDarkMode} onClick={deletePost}>
            <div id="text">삭제</div>
          </M.remove>
          <M.AlbumCover>
            <img src={image} alt="Music Image" />
          </M.AlbumCover>
          <M.MusicInfo isDarkMode={isDarkMode}>
            <p id={"songTitle"}>{title}</p>
            <br></br>
            <p id={"artist"}>{author}</p>
          </M.MusicInfo>
          <br />
          <M.UserText isDarkMode={isDarkMode}>{content}</M.UserText>{" "}
        </motion.div>
        {/*하단바*/}
        <M.NavBar>
          {/*검색*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src={"./static/images/SearchIcon.svg"} onClick={goSearch} />
            </M.NavIcon>
            <M.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </M.NavText>
          </M.NavBtnContainer>
          {/*AI 심리 분석*/}
          <M.NavBtnContainer>
            <M.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </M.NavIcon>
            <M.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </M.NavText>{" "}
          </M.NavBtnContainer>
          {/*홈*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </M.NavIcon>
          </M.NavBtnContainer>
          {/*내 기록*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </M.NavIcon>
            <M.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </M.NavText>
          </M.NavBtnContainer>
          {/*마이페이지*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </M.NavIcon>
            <M.NavText>마이페이지</M.NavText>
          </M.NavBtnContainer>
        </M.NavBar>
        {/*하단바*/}
      </M.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
