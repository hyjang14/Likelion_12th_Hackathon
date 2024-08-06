import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1809px;
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

//고정
export const Item = styled.div`
  position: relative;
  margin-left: 5%;
  margin-top: 8%;
  z-index: 0;
`;

//하단바 시작

export const NavBar = styled.div`
  width: 390px;
  height: 74px;
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

//보라색 블러 배경
export const PurpleBlur = styled.div`
  width: 223px;
  height: 208px;
  margin-left: 220px;
  background-color: #a259ff;
  filter: blur(160px);
  position: relative;
  z-index: -1;
  margin-top: 30px;
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
  }
`;

//뒤로가기
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

export const TapContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const TapOn = styled.button`
  display: flex;
  width: 195px;
  height: 36px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-image: url("./static/images/TapOn.svg");
  h1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    padding-left: 75px;
    margin-top: 5px;
  }
`;

export const TapOff = styled(TapOn)`
  background-image: url("./static/images/TapOff.svg");
  h1 {
    color: #9c9c9c;
  }
`;

export const ProfileImg = styled.div`
  img {
    width: 39px;
    height: 39px;
    border-radius: 30px;
  }
`;

export const PostNickname = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-left: 50px;
  margin-top: -45px;
`;

export const PostDate = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-left: 50px;
`;

export const MusicCommunityBox = styled.div`
  width: 360px;
  height: 130px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(180deg, rgba(52, 52, 52, 0.50) -3.56%, rgba(78, 78, 78, 0.50) 21.44%, rgba(103, 103, 103, 0.50) 46.44%, rgba(154, 154, 154, 0.50) 96.44%)"
      : "#fff"};
  border-radius: 15px;
  margin-left: -5px;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const MusicIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("./static/images/MusicIcon.svg");
  margin-top: -65px;
  margin-left: 15px;
  cursor: pointer;
`;

export const MusicTitle = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -22px;
  margin-left: 45px;
  cursor: pointer;
`;

export const MusicArtist = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 45px;
  margin-top: -3px;
  margin-bottom: 6px;
  cursor: pointer;
`;

export const MusicContent = styled.div`
  width: 250px;
  height: 40px;
  overflow: hidden;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-left: 15px;
  cursor: pointer;
`;

export const MusicPhoto = styled.div`
  margin-left: 280px;
  cursor: pointer;

  img {
    margin-top: 20px;
    width: 61px;
    height: 61px;
    border-radius: 5px;
  }
`;

export const InfoText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 15px;
  margin-left: -10px;
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

export const RecBtn = styled.button`
  width: 172px;
  height: 25px;
  background-image: url(${(props) =>
    props.isDarkMode
      ? "./static/images/RecBtn.svg"
      : "./static/images/lightRecBtn.svg"});
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  margin-left: 55%;
  margin-top: -30px;
  cursor: pointer;
  &:hover {
    background-image: url("./static/images/RecBtnH.svg");
  }
`;

export const RecContainer = styled.div``;

export const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    cursor: pointer;
    margin-left: -30px;
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
