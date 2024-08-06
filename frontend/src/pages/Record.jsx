import React from "react";
import * as R from "../styles/styledRecord";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function Record() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsCountPerPage = 5;
  const [totalItems, setTotalItems] = useState(0);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://52.79.34.113/api/myposts/`, {
          headers: { Authorization: `Token ${token}` },
        });

        const allData = response.data;
        setReview(response.data);

        //총 데이터 개수 추정
        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setReview(paginatedData); //현재 페이지 데이터 설정
        setTotalItems(totalItems); //총 데이터 개수 설정
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const goReviewCommunity = () => {
    navigate(`/reviewcommunity`);
  };

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goRecordWrite = () => {
    navigate(`/recordwrite`);
  };

  const goMyRecordDetail = (id) => {
    navigate(`/myrecorddetail?id=${id}`);
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

  //삭제 버튼
  const deletePost = async (postId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인 후 이용하세요.");
        return;
      }

      await axios.delete(`http://52.79.34.113/api/posts/${postId}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      alert("기록이 삭제되었습니다.");
      setReview(review.filter((e) => e.id !== postId));
      setTotalItems(totalItems - 1);
      goRecord();
    } catch (error) {
      console.error("삭제 실패:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <>
      <R.Container isDarkMode={isDarkMode}>
        <R.BackBtn onClick={goBack}></R.BackBtn>{" "}
        <R.PageTitle isDarkMode={isDarkMode}>나의 기록</R.PageTitle>{" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <R.Item>
            <R.record onClick={goRecordWrite}>
              <div id="text">기록하기</div>
            </R.record>
            {review.length === 0 ? (
              <R.InfoText>
                기록이 아직 없습니다. <br />
                지금 바로 나의 전시 경험을 기록해보세요.
              </R.InfoText>
            ) : (
              review.map((e) => (
                <R.ReviewContainer key={e.id}>
                  <R.ImgBox
                    onClick={() => goMyRecordDetail(e.id)}
                    isDarkMode={isDarkMode}
                  >
                    <img src={e.img} alt="ExhibitPoster"></img>
                  </R.ImgBox>
                  <R.ExhibitionIntroduce
                    isDarkMode={isDarkMode}
                    onClick={() => goMyRecordDetail(e.id)}
                  >
                    <div id="Title">{e.title}</div>
                    <div id="Date">{e.createdAt2}</div>
                    <R.Trash id="remove" onClick={() => deletePost(e.id)} />
                  </R.ExhibitionIntroduce>
                </R.ReviewContainer>
              ))
            )}{" "}
            <R.PaginationContainer isDarkMode={isDarkMode}>
              <Pagination
                clssName="pagination"
                activePage={page} // 현재 페이지
                itemsCountPerPage={itemsCountPerPage} // 한 페이지당 아이템 수
                totalItemsCount={totalItems} // 총 아이템 수
                pageRangeDisplayed={5} // paginator의 페이지 범위
                prevPageText={"‹"} // "이전"을 나타낼 텍스트
                nextPageText={"›"} // "다음"을 나타낼 텍스트
                onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
              />
            </R.PaginationContainer>
            <R.help isDarkMode={isDarkMode}>
              <div id="text1">어려우신가요?</div>
              <div id="text2">다른 사람의 기록을 둘러보세요!</div>
            </R.help>
            <R.idea>
              <img src="./static/images/PurpleIdea.svg" alt="idea"></img>
            </R.idea>
            <R.ideation onClick={goReviewCommunity}>
              <div id="text">아이데이션</div>
              <div id="arrow">
                <img src="./static/images/IdeationArrow.svg" />
              </div>
            </R.ideation>
            <R.PinkBlur></R.PinkBlur>{" "}
          </R.Item>{" "}
        </motion.div>
        {/*하단바*/}
        <R.NavBar>
          {/*검색*/}
          <R.NavBtnContainer>
            <R.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </R.NavIcon>
            <R.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </R.NavText>
          </R.NavBtnContainer>
          {/*AI 심리 분석*/}
          <R.NavBtnContainer>
            <R.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </R.NavIcon>
            <R.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </R.NavText>{" "}
          </R.NavBtnContainer>
          {/*홈*/}
          <R.NavBtnContainer>
            <R.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </R.NavIcon>
          </R.NavBtnContainer>
          {/*내 기록*/}
          <R.NavBtnContainer>
            <R.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </R.NavIcon>
            <R.NavText
              style={{
                marginLeft: "60px",
                color: "#A259FF",
              }}
            >
              내 기록
            </R.NavText>
          </R.NavBtnContainer>
          {/*마이페이지*/}
          <R.NavBtnContainer>
            <R.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </R.NavIcon>
            <R.NavText>마이페이지</R.NavText>
          </R.NavBtnContainer>
        </R.NavBar>
        {/*하단바*/}
      </R.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
