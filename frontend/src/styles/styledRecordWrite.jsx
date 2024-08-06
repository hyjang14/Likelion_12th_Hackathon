import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 881px;
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
  padding: 0;
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

// 공유하기 버튼
export const record = styled.button`
  width: 70px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #9747ff;
  cursor: pointer;
  border: 2px solid #9747ff;
  margin-top: 20px;
  margin-left: 255px;
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

// 이미지 선택 버튼
export const imgButton = styled.button`
  width: 87px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #dec5fb;
  cursor: pointer;
  margin-left: 43px;
  margin-top: 17px;
  #image {
    width: 13px;
    height: 9.053px;
    flex-shrink: 0;
    margin-top: 2px;
    margin-left: 4px;
  }
  #text {
    flex-direction: row;
    width: 47px;
    height: 16px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%; /* 16.05px */
    margin-left: 23px;
    margin-top: -11px;
  }
`;

// 이미지 추가 박스
export const img = styled.div`
  width: 199px;
  height: 199px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px dashed #eae3f2;
  margin-top: 14px;
  margin-left: 45px;
  background: linear-gradient(
    270deg,
    #dbbefc 0%,
    #eadbfc 36.5%,
    #faf8fc 78%,
    #fff 100%
  );

  #photo {
    width: 62px;
    height: 46.159px;
    flex-shrink: 0;
    fill: #9c9c9c;
    margin-top: 70px;
    margin-left: 68px;
  }

  #text {
    color: #9c9c9c;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 22.47px */
    text-align: center;
    margin-top: 5px;
  }
`;

// 날짜
export const date = styled.input`
  width: 196px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #a259ff;
  margin-left: 45px;
  margin-top: 17px;
  padding-left: 5px;
  padding-right: 5px;
  color: #a259ff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%; /* 19.26px */
`;

export const PinkBlur = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-top: -150px;
  margin-left: -120px;
`;

// 전시 제목
export const title = styled.input`
  width: 325px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.isDarkMode ? "transparent" : "#dbbefc")};
  background: ${(props) =>
    props.isDarkMode
      ? "#281D36"
      : "linear-gradient(270deg, #dbbefc 0%, #f6effe 75%, #fff 100%)"};
  margin-top: -83px;
  position: absolute;
  margin-left: -25px;
  color: #9c9c9c;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%; /* 22.47px */
  padding-left: 15px;
`;

// 내용
export const content = styled.textarea`
  width: 318px;
  height: 225px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.isDarkMode ? "transparent" : "#dbbefc")};
  background: ${(props) =>
    props.isDarkMode
      ? "#281D36"
      : "linear-gradient(270deg, #dbbefc 0%, #f6effe 75%, #fff 100%)"};
  margin-left: -25px;
  color: #9c9c9c;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%; /* 22.47px */
  margin-top: -25px;
  padding-left: 15px;
  padding-top: 10px;
  resize: none;
  padding-right: 10px;
`;

export const ContentLength = styled.div`
  width: 100px;
  height: 15px;
  #text {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 160.5%; /* 22.47px */
    margin-left: 275px;
  }
`;

export const PinkBlur2 = styled.div`
  width: 223px;
  height: 251.393px;
  background-color: #c47dd7;
  filter: blur(140px);
  position: relative;
  z-index: -3;
  margin-left: 100px;
  margin-top: 50px;
`;

export const PostImgInput = styled.input`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: none;
`;

export const PostImgLabel = styled.label`
  width: 134px;
  height: 31px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  margin-left: 40px;
`;

export const PostedImg = styled.div`
  img {
    height: 200px;
    width: 216px;
    margin-left: 40px;
    border-radius: 10px;
  }
`;
