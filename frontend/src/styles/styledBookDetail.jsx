import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 969px;
  background: ${(props) =>
    props.isDarkMode
      ? "#121212"
      : "linear-gradient(0deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 100%), linear-gradient(180deg, #e2d5f3 8.5%, #dcd3e8 17%, #d9d2e2 21.25%, #e8e8e8 67%, #fff 100%)"};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
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

export const ProfileImgBlack = styled.div`
  img {
    width: 50px;
    height: 50px;
    margin-left: 44%;
    margin-top: 5%;
    border-radius: 30px;
    margin-bottom: 5px;
  }
`;

export const InfoText = styled.div`
  width: 500px;
  height: 50px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  overflow: hidden;
  margin-left: -14%;
`;

export const PostDate = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
  text-align: center;
  margin-top: -25px;
  margin-left: 1%;
  margin-bottom: 10px;
`;

export const AlbumCover = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  margin-left: 24%;
  margin-top: 5%;
  border-radius: 10px;
`;

export const MusicInfo = styled.div`
  #songTitle {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }

  #artist {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-top: -10.5%;
    text-align: center;
  }
`;

export const UserText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-left: 15%;
  padding-right: 15%;
  text-align: justify;
`;

export const modify = styled.div`
  width: 43px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => (props.isDarkMode ? "#a259ff" : "#dec5fb")};
  margin-left: 38%;
  cursor: pointer;
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
  margin-left: 51%;
  cursor: pointer;
  margin-top: -6.2%;
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

export const Item = styled.div``;
