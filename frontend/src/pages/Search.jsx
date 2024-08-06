import React from "react";
import * as S from "../styles/styledSearch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export const Search = () => {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const itemsCountPerPage = 10;

  const [searchValue, setSearchValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleKeyword = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setKeyword(searchValue);
    setPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goContentIntro = (id) => {
    navigate(`/contentintro?id=${id}`);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = keyword
          ? `http://52.79.34.113/api/data/?search=${keyword}`
          : `http://52.79.34.113/api/data/`;
        const response = await axios.get(apiUrl);
        const allData = response.data;

        //총 데이터 개수 추정
        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setContent(paginatedData); //현재 페이지 데이터 설정
        setTotalItems(totalItems); //총 데이터 개수 설정
      } catch (error) {
        console.error("전시 검색 실패 :", error);
      }
    };
    fetchData();
  }, [keyword, page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <S.Container isDarkMode={isDarkMode}>
        <S.BackBtn onClick={goBack}></S.BackBtn>
        <S.PageTitle isDarkMode={isDarkMode}>전시 검색</S.PageTitle>{" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <S.Item>
            <S.SearchInput
              placeholder="관심 있는 전시를 검색해보세요."
              value={searchValue}
              onChange={handleKeyword}
              onKeyDown={handleKeyPress}
              isDarkMode={isDarkMode}
            />
            <S.SearchIcon onClick={handleSearch} />
            <br />
            {content.map((e, index) => (
              <S.ExhibitContainer
                key={index}
                onClick={() => goContentIntro(e.id)}
              >
                <S.ExhibitImg>
                  <img src={e.image} alt={e.title} />
                </S.ExhibitImg>
                <S.ExhibitInfoBox isDarkMode={isDarkMode}>
                  <S.ExhibitTitle isDarkMode={isDarkMode}>
                    {e.title}
                  </S.ExhibitTitle>
                  <S.ExhibitDetail isDarkMode={isDarkMode}>
                    {e.period}
                    <br />
                    {e.place}
                  </S.ExhibitDetail>
                </S.ExhibitInfoBox>
              </S.ExhibitContainer>
            ))}
            <S.PaginationContainer isDarkMode={isDarkMode}>
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
            </S.PaginationContainer>
          </S.Item>{" "}
        </motion.div>
        {/* 하단바 */}
        <S.NavBar>
          {/* 검색 */}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </S.NavIcon>
            <S.NavText
              style={{
                marginLeft: "28px",
                color: "#A259FF",
              }}
            >
              검색
            </S.NavText>
          </S.NavBtnContainer>
          {/* AI 심리 분석 */}
          <S.NavBtnContainer>
            <S.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </S.NavIcon>
            <S.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </S.NavText>{" "}
          </S.NavBtnContainer>
          {/* 홈 */}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </S.NavIcon>
          </S.NavBtnContainer>
          {/* 내 기록 */}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </S.NavIcon>
            <S.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </S.NavText>
          </S.NavBtnContainer>
          {/* 마이페이지 */}
          <S.NavBtnContainer>
            <S.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </S.NavIcon>
            <S.NavText>마이페이지</S.NavText>
          </S.NavBtnContainer>
        </S.NavBar>
        {/* 하단바 */}
      </S.Container>
    </>
  );
};
const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
