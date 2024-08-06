import React from "react";
import * as M from "../styles/styledMusicCommunity";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";
import Pagination from "react-js-pagination";

export function MusicCommunity() {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();

  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsCountPerPage = 5; // 페이지당 항목 수
  const [totalItems, setTotalItems] = useState(0); // 전체 데이터 수

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const musicId = queryParams.get("music_id");

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
          `http://52.79.34.113/api/datas/${id}/musics/`,
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
        console.error("음악 추천글 조회 실패 :", error);
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

  const goBookCommunity = () => {
    navigate(`/bookcommunity?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goMusicCommunity = () => {
    navigate(`/musiccommunity?id=${id}`);
    window.scrollTo(0, 0);
  };

  const goMusicDetail = (musicId) => {
    navigate(`/musicdetail?id=${id}&music_id=${musicId}`);
    window.scrollTo(0, 0);
  };

  const goMusicWrite = () => {
    navigate(`/musicwrite?id=${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <M.Container isDarkMode={isDarkMode}>
        <M.BackBtn onClick={goBack}></M.BackBtn>
        <M.PageTitle isDarkMode={isDarkMode}>추천 콘텐츠</M.PageTitle>
        <M.TapContainer>
          <M.TapOn onClick={goMusicCommunity}>
            <h1>음악</h1>
          </M.TapOn>
          <M.TapOff onClick={goBookCommunity}>
            <h1>도서</h1>
          </M.TapOff>
        </M.TapContainer>
        <M.Item>
          {" "}
          <M.RecBtn onClick={goMusicWrite} isDarkMode={isDarkMode}></M.RecBtn>
          {content.length === 0 ? (
            <M.InfoText isDarkMode={isDarkMode} style={{ marginTop: "100px" }}>
              등록된 글이 없습니다.
            </M.InfoText>
          ) : (
            content.map((e) => (
              <M.RecContainer key={e.id}>
                <M.ProfileImg>
                  <img src={`http://52.79.34.113${e.profile}`} />
                </M.ProfileImg>
                <M.PostNickname isDarkMode={isDarkMode}>
                  {e.nickname}
                </M.PostNickname>
                <M.PostDate isDarkMode={isDarkMode}>{e.createdAt}</M.PostDate>
                <M.MusicCommunityBox
                  isDarkMode={isDarkMode}
                  onClick={() => goMusicDetail(e.id)}
                >
                  <M.MusicPhoto onClick={() => goMusicDetail(e.id)}>
                    <img src={e.image} />
                  </M.MusicPhoto>
                  <M.MusicIcon onClick={() => goMusicDetail(e.id)} />
                  <M.MusicTitle
                    isDarkMode={isDarkMode}
                    onClick={() => goMusicDetail(e.id)}
                  >
                    {e.title}
                  </M.MusicTitle>
                  <M.MusicArtist
                    isDarkMode={isDarkMode}
                    onClick={() => goMusicDetail(e.id)}
                  >
                    {e.author}
                  </M.MusicArtist>
                  <M.MusicContent
                    isDarkMode={isDarkMode}
                    onClick={() => goMusicDetail(e.id)}
                  >
                    {e.content}
                  </M.MusicContent>
                </M.MusicCommunityBox>
              </M.RecContainer>
            ))
          )}
          <M.PurpleBlur></M.PurpleBlur>
          <M.PaginationContainer isDarkMode={isDarkMode}>
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
          </M.PaginationContainer>
          <M.InfoText isDarkMode={isDarkMode}>
            관람에 도움이 되었나요?
            <p>더욱 다양한 경험을 위한 추천글을 직접 작성해보세요!</p>
          </M.InfoText>
        </M.Item>
        {/*하단바*/}
        <M.NavBar>
          {/*검색*/}
          <M.NavBtnContainer>
            <M.NavIcon
              style={{
                marginLeft: "25px",
              }}
            >
              <img src="./static/images/SearchIcon.svg" onClick={goSearch} />
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
