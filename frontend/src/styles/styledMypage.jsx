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

// 프로필 이미지
export const profile = styled.div`
  img {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    margin-left: 120px;
    margin-top: 8px;
    border-radius: 30px;
  }
`;

// 사용자 이름
export const name = styled.div`
  flex-shrink: 0;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%; /* 22.47px */
  text-align: center;
  margin-left: -12%;
`;

// 프로필 편집 버튼
export const edit = styled.button`
  width: 78px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #9747ff;
  cursor: pointer;
  border: 2px solid #9747ff;
  margin-top: 9px;
  margin-left: 67px;

  #text1 {
    width: 66.661px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-top: -3px;
    margin-left: -2px;
  }
`;

// 로그아웃 버튼
export const logout = styled.button`
  width: 78px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #9747ff;
  cursor: pointer;
  border: 2px solid #9747ff;
  margin-top: 9px;
  margin-left: 10px;
  #text2 {
    width: 66.661px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-top: -3px;
    margin-left: -2px;
  }
`;

// 스크랩 이미지, 텍스트
export const scrap = styled.div`
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/Scrap.svg"
      : "./static/images/lightScrapIcon.svg"});
  background-repeat: no-repeat;
  width: 100px;
  height: 12px;
  flex-shrink: 0;
  margin-top: 25px;
  margin-left: -20px;

  #ScrapText {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 19.26px */
    margin-left: 15px;
    margin-top: -3.5px;
    position: absolute;
  }
`;

// 포스터 첨부 박스
export const ImgBox = styled.div`
  width: 81px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 10px 0px 0px 10px;
  background: ${(props) =>
    props.isDarkMode
      ? "#2b1e3c"
      : "linear-gradient(90deg, #6F4F98 0%, #251A32 100%)"};
  margin-top: 12px;
  margin-left: -24px;
  cursor: pointer;
  img {
    width: 61px;
    height: 61px;
    flex-shrink: 0;
    margin-left: 11px;
    margin-top: 10px;
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

// 전시 설명
export const ExhibitionIntroduce = styled.div`
  width: 262px;
  height: 79px;
  flex-shrink: 0;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid;
  border-color: ${(props) => (props.isDarkMode ? "#717171" : "white")};
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(90deg, #895ebf 0%, #402c59 100%)"
      : "linear-gradient(90deg, #FFF 0%, #F5F1F9 72%, #EAE3F2 98%)"};
  margin-left: 56px;
  margin-top: -81px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  #Title {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
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
    font-weight: 400;
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
  margin-left: 226px;
  margin-top: 31px;
  position: absolute;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ScrapContainer = styled.div``;

export const InfoText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#9c9c9c")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 85px;
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
