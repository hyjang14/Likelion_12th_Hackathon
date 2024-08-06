import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1058px;
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
  }
`;

// 기록하기 버튼
export const record = styled.button`
  width: 70px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #9747ff;
  cursor: pointer;
  border: 2px solid #9747ff;
  margin-top: 20px;
  margin-left: 248px;

  #text {
    width: 66.661px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-left: -5px;
  }
`;

// 포스터 첨부 박스
export const ImgBox = styled.div`
  width: 81px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => (props.isDarkMode ? "#281d36" : "#fff")};
  margin-top: 15px;
  margin-left: -24px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    width: 61px;
    height: 61px;
    flex-shrink: 0;
    margin-left: 11px;
    margin-top: 10px;
    border-radius: 5px;
  }
`;

// 기록 박스
export const ExhibitionIntroduce = styled.div`
  width: 256px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => (props.isDarkMode ? "#281d36" : "#fff")};
  margin-left: 62px;
  margin-top: -81px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  #Title {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 20.865px */
    margin-left: 18px;
    margin-top: 20px;
    position: absolute;
  }
  #Date {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 160.5%; /* 16.05px */
    margin-left: 18px;
    margin-top: 41px;
    position: absolute;
  }
`;

// 쓰레기통
export const Trash = styled.div`
  width: 13px;
  height: 15px;
  flex-shrink: 0;
  margin-left: 221px;
  margin-top: 29px;
  position: absolute;
  cursor: pointer;
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/Trash.svg"
      : "./static/images/lightTrash.svg"});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 234px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: 330px;
  margin-left: -30px;
`;

export const ReviewContainer = styled.div`
  cursor: pointer;
`;

export const InfoText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#9c9c9c")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 185px;
  margin-bottom: 185px;
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

export const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    cursor: pointer;
    margin-left: -70px;
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

// 도움말
export const help = styled.div`
  width: 153px;
  height: 49px;
  margin-top: 43px;
  margin-left: 71px;
  position: relative;
  z-index: 999;

  #text1 {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 184.615% */
    text-align: center;
  }

  #text2 {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
`;

// 아이데이션 이미지
export const idea = styled.div`
  img {
    position: relative;
    z-index: 999;
    width: 55px;
    height: 56.833px;
    flex-shrink: 0;
    margin-left: 118px;
    margin-top: 3px;
  }
`;

// 아이데이션 버튼
export const ideation = styled.div`
  width: 102px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #a259ff;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 92px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 999;

  #text {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 19.26px */
    margin-left: 18px;
    margin-top: 5px;
  }

  #arrow {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    margin-left: 3px;
    margin-top: 3.5px;
  }
`;
