import React from "react";
import * as RC from "../styles/styledReviewCommunity";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { useTheme } from "../contexts/ThemeContext";

export function ReviewCommunity() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsCountPerPage = 5; // 페이지당 항목 수
  const [totalItems, setTotalItems] = useState(0); // 전체 데이터 수

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const goReviewDetail = (id) => {
    navigate(`/reviewdetail?id=${id}`);
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

  //후기글 전체 조회
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

        const response = await axios.get(`http://52.79.34.113/api/posts/`, {
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

  //검색 기능

  const [searchValue, setSearchValue] = useState(""); // 검색어
  const [keyword, setKeyword] = useState(""); // 검색어

  const handleKeyword = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("로그인 후 이용하세요.");
          return;
        }

        const apiUrl = keyword
          ? `http://52.79.34.113/api/posts/?search=${keyword}`
          : `http://52.79.34.113/api/posts/`;

        const response = await axios.get(apiUrl, {
          headers: { Authorization: `Token ${token}` },
        });

        const allData = response.data;

        //총 데이터 개수 추정
        const totalItems = allData.length;
        const startIndex = (page - 1) * itemsCountPerPage;
        const endIndex = startIndex + itemsCountPerPage;
        const paginatedData = allData.slice(startIndex, endIndex);

        setReview(paginatedData); //현재 페이지 데이터 설정
        setTotalItems(totalItems); //총 데이터 개수 설정
      } catch (error) {
        console.error("전시 검색 실패 :", error);
      }
    };
    fetchData();
  }, [keyword, page]);

  const handleSearch = () => {
    setKeyword(searchValue);
    setPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <RC.Container isDarkMode={isDarkMode}>
        <RC.BackBtn onClick={goBack}></RC.BackBtn>{" "}
        <RC.PageTitle isDarkMode={isDarkMode}>커뮤니티</RC.PageTitle>
        <RC.Item>
          <RC.searchBox>
            <RC.search
              isDarkMode={isDarkMode}
              type="text"
              placeholder="후기가 궁금한 전시를 입력해보세요."
              value={searchValue}
              onChange={handleKeyword}
              onKeyDown={handleKeyPress}
            ></RC.search>
            <RC.searchImg onClick={handleSearch}>
              <img
                src="./static/images/SearchIconPurple.svg"
                alt="search"
              ></img>
            </RC.searchImg>
          </RC.searchBox>
          {review.map((e) => (
            <RC.ticket key={e.id} isDarkMode={isDarkMode}>
              <img
                src={
                  isDarkMode
                    ? "./static/images/Ticket.svg"
                    : "./static/images/lightTicket.svg"
                }
                alt="ticket"
              ></img>
              <RC.profileContainer isDarkMode={isDarkMode}>
                <img
                  src={`http://52.79.34.113${e.profile}`}
                  alt="profile"
                ></img>
                <div id="name">{e.nickname}</div>
                <div id="time">{e.createdAt}</div>
              </RC.profileContainer>
              <RC.contentContainer
                isDarkMode={isDarkMode}
                onClick={() => goReviewDetail(e.id)}
              >
                <div id="title">{e.title}</div>
                <div id="content">{e.content}</div>
                <RC.ReviewImg>
                  <img src={e.img} alt="Review Image" />
                </RC.ReviewImg>
                <img src="./static/images/LikeIcon.svg" alt="like"></img>
                <div id="count">{e.likeCount}</div>
              </RC.contentContainer>
            </RC.ticket>
          ))}
          <RC.PaginationContainer isDarkMode={isDarkMode}>
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
          </RC.PaginationContainer>
          <RC.PinkBlur></RC.PinkBlur>
          {/*하단바*/}
          <RC.NavBar>
            {/*검색*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  marginLeft: "25px",
                }}
              >
                <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
              </RC.NavIcon>
              <RC.NavText
                style={{
                  marginLeft: "28px",
                }}
              >
                검색
              </RC.NavText>
            </RC.NavBtnContainer>
            {/*AI 심리 분석*/}
            <RC.NavBtnContainer>
              <RC.NavIcon>
                <img src="./static/images/AIIcon.svg" onClick={goAI} />
              </RC.NavIcon>
              <RC.NavText
                style={{
                  fontSize: "11px",
                  marginLeft: "20px",
                  marginTop: "-3px",
                }}
              >
                AI 심리 분석
              </RC.NavText>{" "}
            </RC.NavBtnContainer>
            {/*홈*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  fontSize: "11px",
                  marginLeft: "10px",
                  marginTop: "-25px",
                }}
              >
                <img src="./static/images/HomeIcon.svg" onClick={goHome} />
              </RC.NavIcon>
            </RC.NavBtnContainer>
            {/*내 기록*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  marginLeft: "63px",
                  color: "#A259FF",
                }}
              >
                <img src="./static/images/RecordIcon.svg" onClick={goRecord} />
              </RC.NavIcon>
              <RC.NavText
                style={{
                  marginLeft: "60px",
                  color: "#A259FF",
                }}
              >
                내 기록
              </RC.NavText>
            </RC.NavBtnContainer>
            {/*마이페이지*/}
            <RC.NavBtnContainer>
              <RC.NavIcon
                style={{
                  marginLeft: "45px",
                }}
              >
                <img
                  src="./static/images/MyPageIcon.svg"
                  onClick={goMyPage}
                  style={{}}
                />
              </RC.NavIcon>
              <RC.NavText style={{}}>마이페이지</RC.NavText>
            </RC.NavBtnContainer>
          </RC.NavBar>
          {/*하단바*/}
        </RC.Item>
      </RC.Container>
    </>
  );
}
