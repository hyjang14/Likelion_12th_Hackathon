import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1156px;
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
  z-index: 999;
  position: relative;
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

// 프로필
export const profile = styled.div`
  position: relative;

  img {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    margin-top: 50px;
    margin-left: 121px;
    border-radius: 30px;
  }

  #name {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 22.47px */
    margin-left: -12%;
    text-align: center;
  }

  #time {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 240% */
    margin-left: -12%;
    text-align: center;
    margin-top: -4px;
  }
`;

// 날짜, 스크랩 묶은 박스
export const firstBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 385px;
  height: 30px;
  margin-top: 12px;
  margin-left: -17px;
`;

// 날짜
export const date = styled.div`
  display: flex;
  flex-direction: row;
  width: 96px;
  height: 23px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #a259ff;
  #text {
    flex-direction: row;
    height: 15px;
    flex-shrink: 0;
    color: #a259ff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 19.26px */
    margin-left: 15px;
    margin-top: 2px;
  }
`;

// 스크랩
export const like = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  img {
    width: 76px;
    height: 24px;
    flex-shrink: 0;
    position: absolute;
    margin-top: 4px;
    margin-left: 157px;
  }

  #count {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    position: absolute;
    margin-top: 4.5px;
    margin-left: 215px;
  }
`;

export const PinkBlur = styled.div`
  width: 206px;
  height: 205px;
  background: #a259ff;
  filter: blur(159.68670654296875px);
  position: relative;
  z-index: -3;
  margin-top: -53px;
  margin-left: -35px;
`;

// 제목
export const title = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 15px;
  text-align: center;
  margin-left: -12%;
`;

// 전시 이미지
export const img = styled.div`
  img {
    width: 236px;
    height: 214px;
    flex-shrink: 0;
    border-radius: 10px;
    margin-left: 32px;
    margin-top: 16px;
  }
`;

// 내용
export const contentContainer = styled.div`
  width: 343px;
  height: 335px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(90deg, #6f4f98 0%, #251a32 100%);"
      : "#fff"};
  margin-left: -25px;
  margin-top: 24px;
  #content {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 22.47px */
    position: absolute;
    margin-left: 23px;
    margin-top: 19px;
    width: 300px;
    -webkit-line-clamp: 2;
  }
`;

export const PinkBlur2 = styled.div`
  width: 223px;
  height: 234px;
  background: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: 100px;
  margin-left: 20px;
`;

export const ReviewContainer = styled.div``;
