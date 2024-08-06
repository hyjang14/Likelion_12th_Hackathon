import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1490px;
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

//페이지 제목
export const PageTitle = styled.div`
  color: ${(props) => (props.isDarkMode ? "#ccc" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-top: -23px;
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

export const SearchInput = styled.input`
  width: 249px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #a259ff;
  background: transparent;
  box-shadow: 0px 81px 106px 0px rgba(0, 0, 0, 0.07),
    0px 10.142px 13.273px 0px rgba(0, 0, 0, 0.03);
  color: ${(props) => (props.isDarkMode ? "#ccc" : "#3D3A3A")};
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-left: 10px;
  margin-top: 20px;
`;

export const SearchIcon = styled.button`
  background: url("./static/images/SearchIconPurple.svg");
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  margin-top: 25px;
  margin-left: 7px;
`;

export const ExhibitContainer = styled.div`
  display: block;
`;

export const ExhibitImg = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 15px;

  img {
    width: 100px;
    height: 97px;
    resizemode: "cover";
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
`;

export const ExhibitInfoBox = styled.button`
  width: 182px;
  height: 97px;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(180deg, #281d36 37.67%, #392a4d 68.17%, #4e3968 100%)"
      : "#fff"};
  position: absolute;
  cursor: pointer;
  margin-top: 16px;
  margin-left: -6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ExhibitTitle = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  text-align: left;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-left: 10px;
`;

export const ExhibitDetail = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  text-align: left;
  margin-left: 10px;
`;

export const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
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
