import React, { useState, useEffect } from "react";
import * as C from "../styles/styledContentIntro";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { motion, px, resolveMotionValue } from "framer-motion";
import StarInput from "./StarInput";
import styled from "@emotion/styled";
import { useTheme } from "../contexts/ThemeContext";

const StyledSpan = styled.span`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  margin-top: 30%;
  position: absolute;
  margin-left: -85px;
`;

export function ContentIntro() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const [scrapBtn, setScrapBtn] = useState("./static/images/ScrapBtnOff.svg");
  const [scrapCount, setScrapCount] = useState(0);
  const [data, setData] = useState();
  const [isScrapped, setIsScrapped] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const usercode = localStorage.getItem("usercode");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(
          `http://52.79.34.113/api/data/${id}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        const fetchedData = response.data;
        setContent([fetchedData]);
        setData(fetchedData.id);
        setScrapCount(fetchedData.scrapCount);

        // 로컬 스토리지에서 스크랩 상태 불러오기
        const storedIsScrapped = localStorage.getItem(
          "isScrapped_" + fetchedData.id
        );
        setIsScrapped(storedIsScrapped === "true");

        setScrapBtn(
          storedIsScrapped === "true" || fetchedData.isScrapped
            ? "./static/images/ScrapBtnOn.svg"
            : "./static/images/ScrapBtnOff.svg"
        );

        const commentsResponse = await axios.get(
          `http://52.79.34.113/api/datas/${id}/comments`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setComments(commentsResponse.data);

        const userResponse = await axios.get(
          `http://52.79.34.113/api/user/${usercode}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        console.log("프로필 사진:", userResponse.data.profile);
        setProfileImg(userResponse.data.profile);
      } catch (error) {
        console.error("프로필 실패 :", error);
      }
    };
    fetchData();
  }, [id]);

  const handleScrap = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const url = isScrapped
        ? `http://52.79.34.113/api/scraps/${data}/delete/`
        : `http://52.79.34.113/api/scraps/${data}/`;

      const method = isScrapped ? "delete" : "post";

      const response = await axios({
        method,
        url,
        headers: { Authorization: `Token ${token}` },
      });

      console.log("스크랩 성공:", response.data);
      setIsScrapped((prev) => {
        const newState = !prev;
        localStorage.setItem("isScrapped_" + data, newState); // 상태를 로컬 스토리지에 저장
        return newState;
      });
      setScrapCount((prevCount) =>
        isScrapped ? prevCount - 1 : prevCount + 1
      );
      setScrapBtn(
        isScrapped
          ? "./static/images/ScrapBtnOff.svg"
          : "./static/images/ScrapBtnOn.svg"
      );

      alert(
        isScrapped
          ? "스크랩이 취소되었습니다."
          : "스크랩되었습니다. 마이페이지에서 확인하세요."
      );
    } catch (error) {
      console.error("스크랩 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  //댓글 생성
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const response = await axios.post(
        `http://52.79.34.113/api/datas/${id}/comments`,
        { comment: commentText },
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      setComments((prevComments) => [response.data, ...prevComments]);
      setCommentText("");
    } catch (error) {
      console.error("댓글 등록 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  //댓글 삭제
  const handleCommentDelete = async (commentId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.delete(
        `http://52.79.34.113/api/datas/${id}/comments/${commentId}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
      alert("댓글이 삭제되었습니다.");

      // 페이지 새로고침
      window.location.reload();
    } catch (error) {
      alert("자신의 댓글만 삭제할 수 있습니다.");
      console.error("댓글 삭제 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const goMusicCommunity = (id) => {
    navigate(`/musiccommunity?id=${id}`);
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

  //공유하기
  const handleCopyClipBoard = (text) => {
    try {
      // 임시 텍스트 영역을 만듭니다.
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = text;
      document.body.appendChild(tempTextArea);

      // 텍스트 영역을 선택합니다.
      tempTextArea.select();
      tempTextArea.setSelectionRange(0, 99999); // 모바일 기기 호환

      // 복사 명령을 실행합니다.
      document.execCommand("copy");

      // 임시 텍스트 영역을 제거합니다.
      document.body.removeChild(tempTextArea);

      alert("클립보드에 링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageUrl = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  //별점

  const RatingField = styled.fieldset`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    border: none;
    transform: translateY(2px);
    margin-top: 10px;
    margin-left: 55px;
    gap: 6px;

    input:checked ~ label,
    labeL:hover,
    labeL:hover ~ label {
      transition: 0.2s;
      color: orange;
    }
  `;

  const [score, setScore] = useState(0);

  const handleClickRating = (value) => {
    setScore(value);
    handleRatingSubmit(value);
  };

  const handleRatingSubmit = async (value) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      const response = await axios.post(
        `http://52.79.34.113/api/datas/${id}/rate/`,
        { score: value },
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      console.log("별점 등록 성공:", response.data);
    } catch (error) {
      console.error("별점 등록 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        alert("별점 등록에 실패했습니다. 유효한 값을 입력했는지 확인하세요.");
      }
    }
  };

  //별점 문구
  const ratingTexts = {
    0.5: `"   최악이에요..   "`,
    1: `"   별로에요   "`,
    1.5: `"   그럭저럭이에요   "`,
    2: `"   조금 아쉬워요   "`,
    2.5: `"   괜찮아요   "`,
    3: `"   괜찮아요   "`,
    3.5: `"   아주 좋아요!   "`,
    4: `"   아주 좋아요!   "`,
    4.5: `"   최고예요!   "`,
    5: `"   최고예요!   "`,
  };

  const ratingTexts2 = {
    0.5: "별점이 등록되었습니다.",
    1: "별점이 등록되었습니다.",
    1.5: "별점이 등록되었습니다.",
    2: "별점이 등록되었습니다.",
    2.5: "별점이 등록되었습니다.",
    3: "별점이 등록되었습니다.",
    3.5: "별점이 등록되었습니다.",
    4: "별점이 등록되었습니다.",
    4.5: "별점이 등록되었습니다.",
    5: "별점이 등록되었습니다.",
  };

  const getRatingText = (value) => {
    return ratingTexts[Math.round(value * 2) / 2] || "";
  };

  const getRatingText2 = (value) => {
    return (
      ratingTexts2[Math.round(value * 2) / 2] ||
      "더블클릭하여 별점을 남겨보세요."
    );
  };

  //별점
  const [ratingCount, setRatingCount] = useState("");
  const [averageRating, setAverageRating] = useState("");

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
          `http://52.79.34.113/api/datas/${id}/ratings/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setRatingCount(response.data.ratingCount);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [id]);

  return (
    <>
      <C.Container isDarkMode={isDarkMode}>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <C.BackBtn onClick={goBack}></C.BackBtn>
          <C.Item>
            {content.map((e) => (
              <C.ExhibitContainer key={e.id}>
                <C.ExhibitTitle isDarkMode={isDarkMode}>
                  {e.title}
                </C.ExhibitTitle>
                <C.ExhibitPoster onClick={() => handlePageUrl(e.pageUrl)}>
                  <img src={e.image} alt="ExhibitPoster" />
                </C.ExhibitPoster>
                <C.ClickPoster isDarkMode={isDarkMode}>
                  포스터를 클릭하면 전시 홈페이지로 이동합니다.
                </C.ClickPoster>
                <C.LocationIcon isDarkMode={isDarkMode} />
                <br /> <br />
                <C.LocationText isDarkMode={isDarkMode}>
                  {e.place}
                </C.LocationText>
                <C.CalendarIcon isDarkMode={isDarkMode} />
                <C.InfoText isDarkMode={isDarkMode}>전시 일정</C.InfoText>
                <C.ExhibitDetail isDarkMode={isDarkMode}>
                  {e.period}
                  <br />
                  {e.time}
                </C.ExhibitDetail>
                <C.BtnContainer>
                  <C.ScrapBtn onClick={handleScrap}>
                    <img src={scrapBtn} alt="Scrap Button" />
                    <h3>{scrapCount}</h3>
                  </C.ScrapBtn>
                  <C.ShareBtn onClick={() => handleCopyClipBoard(e.pageUrl)}>
                    <img src="./static/images/ShareBtn.svg" />
                  </C.ShareBtn>
                </C.BtnContainer>
              </C.ExhibitContainer>
            ))}
            <C.goRecBtn
              onClick={() => goMusicCommunity(id)}
              isDarkMode={isDarkMode}
            />
            <C.PurpleBlur />
            <C.ScoreMean isDarkMode={isDarkMode}>{averageRating}</C.ScoreMean>
            <C.ScorePeople isDarkMode={isDarkMode}>
              ({ratingCount}명 참여)
            </C.ScorePeople>
            <RatingField>
              <StarInput
                onClickRating={(value) => setScore(value)}
                value={5}
                isHalf={false}
              />
              <StarInput
                onClickRating={handleClickRating}
                value={4.5}
                isHalf={true}
              />{" "}
              <StarInput
                onClickRating={handleClickRating}
                value={4}
                isHalf={false}
              />{" "}
              <StarInput
                onClickRating={handleClickRating}
                value={3.5}
                isHalf={true}
              />{" "}
              <StarInput
                onClickRating={handleClickRating}
                value={3}
                isHalf={false}
              />{" "}
              <StarInput
                onClickRating={handleClickRating}
                value={2.5}
                isHalf={true}
              />{" "}
              <StarInput
                onClickRating={handleClickRating}
                value={2}
                isHalf={false}
              />{" "}
              <StarInput
                onClickRating={handleClickRating}
                value={1.5}
                isHalf={true}
              />{" "}
              <StarInput
                onClickRating={handleClickRating}
                value={1}
                isHalf={false}
              />
              <StarInput
                onClickRating={handleClickRating}
                value={0.5}
                isHalf={true}
              />
            </RatingField>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <StyledSpan
                style={{
                  fontFamily: "Pretendard Variable",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "15%",
                  position: "absolute",
                  marginLeft: "-56px",
                }}
                isDarkMode={isDarkMode}
              >
                {getRatingText(score)}
              </StyledSpan>
              <StyledSpan
                style={{
                  fontFamily: "Pretendard Variable",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  marginTop: "30%",
                  position: "absolute",
                  marginLeft: "-105px",
                }}
                isDarkMode={isDarkMode}
              >
                {getRatingText2(score)}
              </StyledSpan>
            </div>
            <C.CommentRec isDarkMode={isDarkMode}>
              회원님의 관람 경험을 아래 코멘트에 작성해보세요.
            </C.CommentRec>
            <C.CommentIcon isDarkMode={isDarkMode} />
            <C.InfoText
              isDarkMode={isDarkMode}
              style={{
                marginLeft: "15px",
                marginTop: "-22px",
              }}
            >
              코멘트 ({comments.length})
            </C.InfoText>
            <C.CommentInputContainer>
              <C.ProfileImg>
                <img src={profileImg} alt="Profile Img" />
              </C.ProfileImg>
              <C.CommentInput
                isDarkMode={isDarkMode}
                placeholder="전시에 대한 코멘트를 남겨보세요."
                value={commentText}
                onChange={handleCommentChange}
              />
              <C.CommentBtn
                onClick={handleCommentSubmit}
                isDarkMode={isDarkMode}
              >
                <img src="./static/images/CommentBtn.svg" />
              </C.CommentBtn>
            </C.CommentInputContainer>
            {comments.map((e) => (
              <C.CommentContainer key={e.id}>
                <C.CommentContent isDarkMode={isDarkMode}>
                  " {e.comment} "
                </C.CommentContent>
                <C.CommentDate isDarkMode={isDarkMode}>
                  {e.createdAt}
                </C.CommentDate>
                <C.DeleteBtn
                  isDarkMode={isDarkMode}
                  onClick={() => handleCommentDelete(e.id)}
                />
                <C.CMT>
                  <C.CommentNickname isDarkMode={isDarkMode}>
                    - {e.nickname}
                  </C.CommentNickname>
                </C.CMT>
                <C.CommentLine isDarkMode={isDarkMode} />
              </C.CommentContainer>
            ))}{" "}
            <C.PinkBlur></C.PinkBlur>
          </C.Item>{" "}
        </motion.div>
        <C.PinkBlur />
        {/* 하단바 */}
        <C.NavBar>
          {/* 검색 */}
          <C.NavBtnContainer>
            <C.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </C.NavIcon>
            <C.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </C.NavText>
          </C.NavBtnContainer>
          {/* AI 심리 분석 */}
          <C.NavBtnContainer>
            <C.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </C.NavIcon>
            <C.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </C.NavText>{" "}
          </C.NavBtnContainer>
          {/* 홈 */}
          <C.NavBtnContainer>
            <C.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </C.NavIcon>
          </C.NavBtnContainer>
          {/* 내 기록 */}
          <C.NavBtnContainer>
            <C.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </C.NavIcon>
            <C.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </C.NavText>
          </C.NavBtnContainer>
          {/* 마이페이지 */}
          <C.NavBtnContainer>
            <C.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </C.NavIcon>
            <C.NavText>마이페이지</C.NavText>
          </C.NavBtnContainer>
        </C.NavBar>
        {/* 하단바 끝 */}
      </C.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
