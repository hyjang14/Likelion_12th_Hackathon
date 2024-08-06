import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 900px;
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
  position: relative;
  z-index: 1000;
`;

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
  position: relative;
  z-index: 999;
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
  margin-left: -48px;
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

// 날짜, 삭제, 수정 묶은 컨테이너
export const firstBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 385px;
  height: 30px;
  margin-top: 50px;
`;

export const date = styled.button`
  display: flex;
  flex-direction: row;
  width: 126px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #a259ff;
  margin-top: -25px;

  #text {
    flex-direction: row;
    width: 100px;
    height: 15px;
    flex-shrink: 0;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 19.26px */
    margin-left: 7px;
    margin-top: 1px;
  }
`;

export const modify = styled.div`
  width: 43px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => (props.isDarkMode ? "#a259ff" : "#dec5fb")};
  margin-left: 95px;
  cursor: pointer;
  margin-top: -25px;
  border: 1px solid #a259ff;

  #text {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 16.05px */
    margin-left: 11px;
    margin-top: 2px;
  }
`;

export const remove = styled.div`
  width: 43px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => (props.isDarkMode ? "#a259ff" : "#dec5fb")};
  margin-left: 7px;
  cursor: pointer;
  margin-top: -25px;
  border: 1px solid #a259ff;

  #text {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 16.05px */
    margin-left: 11px;
    margin-top: 2px;
  }
`;

// 전시 제목
export const title = styled.div`
  width: 325px;
  height: 32px;
  flex-shrink: 0;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%; /* 32.1px */
  margin-top: -15px;
  text-align: center;
  margin-left: -5%;
`;

// 전시 이미지
export const img = styled.div`
  img {
    width: 236px;
    height: 214px;
    flex-shrink: 0;
    border-radius: 10px;
    margin-top: 13px;
    margin-left: 30px;
  }
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: -295px;
  margin-left: -70px;
`;

// 내용
export const content = styled.div`
  width: 343px;
  height: 315px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => (props.isDarkMode ? "#281D36" : "#fff")};
  margin-top: 63px;
  margin-left: -24px;
  position: absolute;

  #text {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%;
    position: absolute;
    margin-left: 10px;
    margin-top: 15px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
    width: 300px;
    padding-left: 15px;
  }
`;

export const ContentLength = styled.div`
  width: 200px;
  height: 15px;
  #text {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 22.47px */
    margin-top: 300px;
    margin-left: 295px;
  }
`;

// 도움말
export const help = styled.div`
  width: 153px;
  height: 49px;
  margin-top: 503px;
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

export const PinkBlur2 = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-left: 35px;
  margin-top: -190px;
`;
