import React from "react";
import * as B from "../styles/styledBookCommunity";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";
import Pagination from "react-js-pagination";

export function BookCommunity() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();

  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsCountPerPage = 5; // 페이지당 항목 수
  const [totalItems, setTotalItems] = useState(0); // 전체 데이터 수

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

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
          `http://52.79.34.113/api/datas/${id}/books/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        const allData = response.data;
        setContent(response.data);

        //총 데이터 개수 추정
        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setContent(paginatedData); //현재 페이지 데이터 설정
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

  const goBookCommunity = () => {
    navigate(`/bookcommunity?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goBookDetail = (bookId) => {
    navigate(`/bookdetail?id=${id}&book_id=${bookId}`);
    window.scrollTo(0, 0);
  };

  const goBookWrite = () => {
    navigate(`/bookwrite?id=${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <B.Container isDarkMode={isDarkMode}>
        <B.BackBtn onClick={goBack}></B.BackBtn>
        <B.PageTitle isDarkMode={isDarkMode}>추천 콘텐츠</B.PageTitle>
        <B.TapContainer>
          <B.TapOff onClick={goMusicCommunity}>
            <h1>음악</h1>
          </B.TapOff>
          <B.TapOn onClick={goBookCommunity}>
            <h1>도서</h1>
          </B.TapOn>
        </B.TapContainer>
        <B.Item>
          <B.RecBtn isDarkMode={isDarkMode} onClick={goBookWrite}></B.RecBtn>
          {content.length === 0 ? (
            <B.InfoText isDarkMode={isDarkMode} style={{ marginTop: "100px" }}>
              등록된 글이 없습니다.
            </B.InfoText>
          ) : (
            content.map((e) => (
              <B.BookContainer key={e.id}>
                <B.ProfileImg>
                  <img src={`http://52.79.34.113${e.profile}`} />
                </B.ProfileImg>
                <B.PostNickname isDarkMode={isDarkMode}>
                  {e.nickname}
                </B.PostNickname>
                <B.PostDate isDarkMode={isDarkMode}>{e.createdAt}</B.PostDate>
                <B.BookCommunityBox
                  isDarkMode={isDarkMode}
                  onClick={() => goBookDetail(e.id)}
                >
                  <B.BookPhoto onClick={() => goBookDetail(e.id)}>
                    <img src={e.image} />
                  </B.BookPhoto>
                  <B.BookIcon onClick={() => goBookDetail(e.id)}></B.BookIcon>
                  <B.BookTitle
                    onClick={() => goBookDetail(e.id)}
                    isDarkMode={isDarkMode}
                  >
                    {e.title}
                  </B.BookTitle>
                  <B.BookArtist
                    onClick={() => goBookDetail(e.id)}
                    isDarkMode={isDarkMode}
                  >
                    {e.author}
                  </B.BookArtist>
                  <B.BookContent
                    isDarkMode={isDarkMode}
                    onClick={() => goBookDetail(e.id)}
                  >
                    {e.content}
                  </B.BookContent>
                </B.BookCommunityBox>
              </B.BookContainer>
            ))
          )}
          <B.PurpleBlur></B.PurpleBlur>{" "}
          <B.PaginationContainer isDarkMode={isDarkMode}>
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
          </B.PaginationContainer>
          <B.InfoText isDarkMode={isDarkMode}>
            관람에 도움이 되었나요?
            <p>더욱 다양한 경험을 위한 추천글을 직접 작성해보세요!</p>
          </B.InfoText>
        </B.Item>
        {/*하단바*/}
        <B.NavBar>
          {/*검색*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
            </B.NavIcon>
            <B.NavText
              style={{
                marginLeft: "28px",
              }}
            >
              검색
            </B.NavText>
          </B.NavBtnContainer>
          {/*AI 심리 분석*/}
          <B.NavBtnContainer>
            <B.NavIcon>
              <img src="./static/images/AIIcon.svg" onClick={goAI} />
            </B.NavIcon>
            <B.NavText
              style={{
                fontSize: "11px",
                marginLeft: "20px",
                marginTop: "-3px",
              }}
            >
              AI 심리 분석
            </B.NavText>{" "}
          </B.NavBtnContainer>
          {/*홈*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                marginTop: "-25px",
              }}
            >
              <img src="./static/images/HomeIcon.svg" onClick={goHome} />
            </B.NavIcon>
          </B.NavBtnContainer>
          {/*내 기록*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                marginLeft: "63px",
              }}
            >
              <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
            </B.NavIcon>
            <B.NavText
              style={{
                marginLeft: "60px",
              }}
            >
              내 기록
            </B.NavText>
          </B.NavBtnContainer>
          {/*마이페이지*/}
          <B.NavBtnContainer>
            <B.NavIcon
              style={{
                marginLeft: "45px",
              }}
            >
              <img src="./static/images/MyPageIcon.svg" onClick={goMyPage} />
            </B.NavIcon>
            <B.NavText>마이페이지</B.NavText>
          </B.NavBtnContainer>
        </B.NavBar>
        {/*하단바*/}
      </B.Container>
    </>
  );
}
