import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1200px;
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
  background-color: black;
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

//하단바 끝

export const ExhibitPoster = styled.div`
  img {
    width: 151px;
    height: 188px;
    border-radius: 10px;
    margin-left: -10px;
  }

  cursor: pointer;
`;

export const ExhibitTitle = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-top: -23px;
  margin-left: -12%;
  margin-bottom: 8%;
`;

export const ExhibitDetail = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 20px;
  margin-left: 45%;
  width: 160px;
`;

//고정
export const PurpleBlur = styled.div`
  width: 185px;
  height: 184px;
  background-color: #a259ff;
  filter: blur(140px);
  margin-left: 16%;
  margin-top: -150px;
  position: relative;
  z-index: -1;
`;

export const ClickPoster = styled.div`
  font-family: "Pretendard Variable";
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  margin-left: -7px;
  margin-top: -5px;
`;

export const CalendarIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-bottom: 15px;
  margin-left: 45%;
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/CalendarIcon.svg"
      : "./static/images/lightCalendarIcon.svg"});
`;

export const InfoText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: -36px;
  margin-left: 52%;
`;

export const LocationIcon = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: -205px;
  margin-left: 44%;
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/LocationIcon.svg"
      : "./static/images/lightLocationIcon.svg"});
`;

export const LocationText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -64px;
  margin-left: 49%;
  margin-bottom: 30px;
  width: 140px;
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const ScrapBtn = styled.button`
  width: 70px;
  height: 22px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: -4px;
  margin-left: 43%;
  h3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%;
    text-align: right;
    position: absolute;
    margin-top: -22px;
    margin-left: 53.5px;
  }
`;

export const ShareBtn = styled.button`
  width: 70px;
  height: 22px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: -4px;
  margin-left: 7px;
`;

export const goRecBtn = styled.button`
  margin-top: 50px;
  width: 278px;
  height: 41px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/goRecBtn.svg"
      : "./static/images/lightgoRecBtn.svg"});
  margin-left: 7px;
  margin-bottom: 30px;

  &:hover {
    background-image: url("./static/images/goRecBtnH.svg");
  }
`;

export const CommentIcon = styled.div`
  width: 18px;
  height: 17px;
  flex-shrink: 0;
  margin: 230px 0 0 -15px;
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/CommentIcon.svg"
      : "./static/images/lightCommentIcon.svg"});
`;

export const CommentInputContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 5px;
  margin-bottom: 30px;
`;

export const ProfileImg = styled.div`
  img {
    width: 27px;
    height: 27px;
    border-radius: 20px;
  }
`;

export const CommentInput = styled.input`
  width: 240px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${(props) => (props.isDarkMode ? "#000" : "#fff")};
  color: #9c9c9c;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: none;
  padding-left: 10px;
`;

export const CommentBtn = styled.button`
  width: 48px;
  height: 29px;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: -61px;
`;

export const PinkBlur = styled.div`
  width: 185px;
  height: 184px;
  background-color: #fe3796;
  filter: blur(160px);
  position: relative;
  z-index: -1;
  margin-top: -40px;
  margin-left: -60px;
`;

export const CommentContent = styled.div`
  width: 200px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const CommentNickname = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 100px;
`;

export const CommentProfile = styled.div`
  img {
    width: 11px;
    height: 11px;
    border-radius: 10px;
  }
  margin-left: -70px;
`;

export const CommentDate = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 8.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 72%;
  position: absolute;
  margin-top: -25px;
`;

export const CommentLine = styled.div`
  width: 300px;
  height: 0px;
  flex-shrink: 0;
  border: 1px solid;
  margin-top: 10px;
  margin-left: -5px;
  margin-bottom: 10px;
  border-color: ${(props) => (props.isDarkMode ? "#281d36" : "#fff")};
`;

export const ExhibitContainer = styled.div``;

export const DeleteBtn = styled.button`
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/DeleteBtn.svg"
      : "./static/images/lightDeleteBtn.svg"});
  background-color: transparent;
  background-repeat: no-repeat;
  width: 6.5px;
  height: 6.5px;
  border: none;
  position: absolute;
  margin-left: 80%;
  margin-top: -16px;
  cursor: pointer;
`;

export const CommentContainer = styled.div``;

export const ScoreMean = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const ScorePeople = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 240% */
  margin-left: -59%;
  margin-top: -23px;
  margin-bottom: 10px;
`;

export const CommentRec = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  position: absolute;
  margin-top: 120px;
  margin-left: 40px;
`;

export const CMT = styled.div`
  display: flex;
`;
