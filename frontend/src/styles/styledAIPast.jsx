import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: ${(props) =>
    props.isDarkMode
      ? "#121212"
      : "linear-gradient(0deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 100%), linear-gradient(180deg, #e2d5f3 8.5%, #dcd3e8 17%, #d9d2e2 21.25%, #e8e8e8 67%, #fff 100%)"};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

//고정
export const Item = styled.div`
  margin-left: 12%;
  position: relative;
  z-index: 0;
`;

//뒤로가기 버튼
export const BackBtn = styled.button`
  width: 11px;
  height: 19px;
  background-image: url("./static/images/BackBtn.svg");
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  margin-top: 10px;
`;

//하단바 시작

export const NavBar = styled.div`
  width: 390px;
  height: 74px;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  border: 1px solid gray;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: flex;
  margin-left: -1px;
`;

export const NavBtnContainer = styled.div`
  display: column;
`;

export const NavIcon = styled.button`
  width: 21px;
  height: 39px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  margin-left: 30px;
  margin-top: 11px;
  cursor: pointer;
  margin-right: 15px;
`;

export const NavText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.715px;
  margin-left: 33px;
  margin-top: -5px;
`;
// 하단바 끝

//페이지 제목
export const PageTitle = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-top: -23px;
`;

//보라색 백그라운드
export const PurpleBox = styled.div`
  width: 81px;
  height: 96px;
  flex-shrink: 0;
`;

//보라색 안 그레이 백그라운드 요소들
export const GrayBox = styled.div`
  width: 61px;
  height: 78px;
  flex-shrink: 0;

  #greencheck {
    width: 7px;
    height: 6px;
    flex-shrink: 0;
    margin-top: -86px;
    margin-left: 6px;
  }

  #text {
    width: 30px;
    height: 9.941px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 12.84px */
    margin-left: 15px;
    margin-top: 2px;
  }
`;

// 이미지 박스
export const ImgBox = styled.div`
  width: 61px;
  height: 61px;
  flex-shrink: 0;

  margin-top: 12px;
  margin-left: -20px;
  img {
    width: 62px;
    height: 62px;
    flex-shrink: 0;
    margin-left: 4px;
    margin-top: -9px;
    border-radius: 8px;
  }
`;

// 전시작품 설명
export const ExhibitionIntroduce = styled.div`
  width: 262px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 0px 10px 10px 0px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(180deg, rgba(40, 29, 54, 0.67) 0%, rgba(57, 42, 77, 0.68) 50%, rgba(78, 57, 104, 1) 100%)"
      : "#fff"};
  margin-left: 56px;
  margin-top: -96px;
  cursor: pointer;

  #Title {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 20.865px */
    position: absolute;
    margin-left: 10px;
    margin-top: 15px;
  }

  #Date {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 16.05px */
    position: absolute;
    margin-left: 10px;
    margin-top: 43px;
    width: 240px;
  }
`;

export const RecordContainer = styled.div`
  margin-bottom: -15px;
`;

export const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-left: -70px;
    margin-top: -100px;
  }

  ul {
    list-style: none;
  }

  ul.pagination li {
    width: 30px;
    height: 30px;
    font-family: "Pretendard Variable";
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  }

  ul.pagination li.active a {
    color: #a259ff;
    font-weight: 500;
  }

  ul.pagination li.active a:hover {
    color: white;
  }

  ul.pagination li a:hover {
    background-color: #a259ff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
  }
`;

export const InfoText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#9c9c9c")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 145px;
  margin-bottom: 145px;
  margin-left: -50px;
  p {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: -2px;
  }
`;

export const PinkBlur = styled.div`
  width: 185px;
  height: 184px;
  background-color: #fe3796;
  filter: blur(160px);
  position: relative;
  z-index: -1;
  margin-top: -50px;
  margin-left: 50px;
`;
