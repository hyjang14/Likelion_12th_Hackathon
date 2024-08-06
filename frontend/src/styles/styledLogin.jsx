import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Group = styled.div`
  width: 157px;
  height: 118px;
  margin-left: 80px;
`;

export const Ellipse549 = styled.div`
  width: 206px;
  height: 205px;
  background-color: #a259ff;
  filter: blur(160px);
  margin-top: -150px;
  margin-left: 60px;
`;

export const InputContainer = styled.div`
  width: 328px;
  position: relative;
  margin-bottom: 16px;
`;

export const InputLabel = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  margin: 7px;
`;

export const UserInput = styled.input`
  width: 313px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: transparent;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  padding-left: 10px;
`;

export const Complete = styled.button`
  width: 328px;
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

export const InfoText = styled.div`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  text-align: left;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 160.5%; /* 19.26px */
`;

export const RegisterBtn = styled.button`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#3D3A3A")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%; /* 19.26px */
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  margin-top: -19px;
  margin-left: 90px;

  &:hover {
    color: #a259ff;
  }
`;
