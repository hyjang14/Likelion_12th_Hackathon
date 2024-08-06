import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1089px;
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

// 프로필 이미지
export const profile = styled.div`
  img {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    margin-left: 116px;
    margin-top: 8px;
    position: relative;
    border-radius: 30px;
  }
`;

// 사용자 이름
export const name = styled.div`
  height: 20px;
  flex-shrink: 0;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%; /* 22.47px */
  text-align: center;
  margin-left: -12%;
`;

// 정보
export const informationText = styled.div`
  width: 73px;
  height: 20px;
  flex-shrink: 0;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 160.5%; /* 27.285px */

  img {
    position: absolute;
    margin-top: 2px;
  }
`;

export const InputContainer = styled.div`
  width: 370px;
  position: relative;
  margin-top: 26px;
  margin-left: -5px;
`;

export const InputLabel = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  margin: 7px;
`;

export const UserInput = styled.input`
  border-radius: 8px;
  border: 1px solid #9747ff;
  background: #2e2e2e;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  padding-left: 10px;
`;

export const UserInfo = styled.div`
  border-radius: 8px;
  background: ${(props) => (props.isDarkMode ? "#2e2e2e" : "#fff")};
  color: #9c9c9c;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 240.5%;
  padding-left: 10px;
`;

export const UserInputShort = styled(UserInput)`
  width: 270px;
  height: 30px;
`;

export const UserInfoShort = styled(UserInfo)`
  width: 270px;
  height: 30px;
`;

export const Name = styled(UserInfo)`
  width: 270px;
  height: 30px;
`;

export const SelectBirth = styled(UserInfoShort)`
  width: 116px;
  height: 30px;
`;

export const Email = styled(UserInfo)`
  width: 156px;
  height: 30px;
`;

// 변경
export const changeText = styled.div`
  width: 73px;
  height: 20px;
  flex-shrink: 0;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 160.5%; /* 27.285px */
  margin-top: 50px;

  img {
    position: absolute;
    margin-top: 2px;
  }

  #background {
    width: 206px;
    height: 205px;
    flex-shrink: 0;
    background: #a259ff;
    filter: blur(160px);
    margin-left: 60px;
    margin-top: 15px;
  }
`;

export const NickName = styled(UserInputShort)`
  width: 300px;
  height: 30px;
  background: ${(props) => (props.isDarkMode ? "#121212" : "#fff")};
`;

export const PhoneNumber = styled(UserInput)`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  background: ${(props) => (props.isDarkMode ? "#121212" : "#fff")};
`;

// 저장하기 버튼
export const Complete = styled.button`
  width: 314px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #a259ff;
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  cursor: pointer;
  margin-top: 100px;
`;

//이미지 삽입
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
  cursor: pointer;
`;
export const ErrorMessage = styled.div`
  color: #ff4d4d;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  margin-top: 8px;
`;
