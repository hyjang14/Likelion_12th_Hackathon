import React, { useState, useEffect } from "react";
import * as A from "../styles/styledAIRecordList";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import Pagination from "react-js-pagination";

export function AIRecordList() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsCountPerPage = 5;
  const [totalItems, setTotalItems] = useState(0);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [review, setReview] = useState([]);
  const [checkedItemId, setCheckedItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const response = await axios.get(`http://52.79.34.113/api/myposts/`, {
          headers: { Authorization: `Token ${token}` },
        });

        const allData = response.data;
        setReview(allData);

        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setReview(paginatedData);
        setTotalItems(totalItems);
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData();
  }, [page]);

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goAIResult = () => {
    if (checkedItemId !== null) {
      navigate(`/airesult?id=${checkedItemId}`);
    } else {
      alert("분석할 기록을 선택하세요.");
    }
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

  const goRecord = (id) => {
    navigate(`/record?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goMyPage = () => {
    navigate(`/mypage`);
    window.scrollTo(0, 0);
  };

  const handleImageClick = (index) => {
    if (checkedItemId !== null && checkedItemId !== review[index].id) {
      alert("분석은 한 개씩 할 수 있습니다.");
      return;
    }
    setCheckedItemId((prev) =>
      prev === review[index].id ? null : review[index].id
    );
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <A.Container isDarkMode={isDarkMode}>
        <A.BackBtn onClick={goBack}></A.BackBtn>
        <A.PageTitle isDarkMode={isDarkMode}>나의 기록</A.PageTitle>{" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <A.Item>
            <A.Choice isDarkMode={isDarkMode}>
              분석하고 싶은 기록을 선택하세요.
            </A.Choice>
            <A.Comment isDarkMode={isDarkMode}>
              AI 상담사가 기록을 통해 당신의 감정과 심리를 분석합니다.
            </A.Comment>{" "}
            {review.length === 0 ? (
              <A.InfoText>
                기록이 없습니다.
                <br />내 기록 메뉴에서 글을 작성해보세요.
              </A.InfoText>
            ) : (
              review.map((e, index) => (
                <A.RecordContainer key={index}>
                  <A.ImgBox isDarkMode={isDarkMode}>
                    <img src={e.img} alt="Review Image"></img>
                  </A.ImgBox>
                  <A.ExhibitionIntroduce isDarkMode={isDarkMode}>
                    <div id="Title">{e.title}</div>
                    <div id="Date">{e.createdAt}</div>
                    <A.CheckBox
                      id="NotCheck"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={
                          checkedItemId === e.id
                            ? "./static/images/Check.svg"
                            : "./static/images/NotCheck.svg"
                        }
                        alt="CheckStatus"
                      ></img>
                    </A.CheckBox>
                  </A.ExhibitionIntroduce>
                </A.RecordContainer>
              ))
            )}
            <A.PaginationContainer isDarkMode={isDarkMode}>
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
            </A.PaginationContainer>
            <A.Analysis onClick={goAIResult}>
              <div id="choice">
                <img src="./static/images/WhiteCheck.svg" />
              </div>
              <div id="text">선택한 기록 분석</div>
            </A.Analysis>{" "}
            <A.PinkBlur />
          </A.Item>{" "}
        </motion.div>
        <A.NavBar>
          {/* Navigation Buttons */}
          <A.NavBtnContainer>
            <A.NavIcon style={{ marginLeft: "25px" }}>
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </A.NavIcon>
            <A.NavText style={{ marginLeft: "28px" }}>검색</A.NavText>
          </A.NavBtnContainer>
          <A.NavBtnContainer>
            <A.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
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
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </A.NavIcon>
          </A.NavBtnContainer>
          <A.NavBtnContainer>
            <A.NavIcon style={{ marginLeft: "63px" }}>
              <img
                src="./static/images/RecordIcon.svg"
                onClick={() => goRecord(id)}
              />
            </A.NavIcon>
            <A.NavText style={{ marginLeft: "60px" }}>내 기록</A.NavText>
          </A.NavBtnContainer>
          <A.NavBtnContainer>
            <A.NavIcon style={{ marginLeft: "45px" }}>
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </A.NavIcon>
            <A.NavText>마이페이지</A.NavText>
          </A.NavBtnContainer>
        </A.NavBar>
      </A.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};

export default AIRecordList;
