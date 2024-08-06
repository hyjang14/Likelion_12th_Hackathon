import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 825px;
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

//하단바 끝

export const ShareBtn = styled.button`
  width: 80px;
  height: 39px;
  border-radius: 30px;
  background: #a259ff;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: none;
  cursor: pointer;
  margin-left: 68%;
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
    margin-bottom: 10px;
    border: 1px solid #535353;
    border-radius: 10px;
  }
`;

export const PostTitle = styled.input`
  width: 163px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #535353;
  background: ${(props) => (props.isDarkMode ? "#281d36" : "#fff")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-left: -25px;
  margin-bottom: 20px;
`;

export const PostArtist = styled(PostTitle)`
  margin-left: 10px;
`;

export const PostContent = styled.textarea`
  width: 323px;
  height: 330px;
  border-radius: 10px;
  border: 1px solid #535353;
  background: ${(props) => (props.isDarkMode ? "#281d36" : "#fff")};
  margin-left: -25px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  resize: none;
  padding: 10px;
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
    margin-left: 270px;
  }
`;
