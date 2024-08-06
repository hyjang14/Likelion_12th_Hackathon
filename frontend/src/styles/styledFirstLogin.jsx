import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: var(
    --,
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.45) 100%
    ),
    linear-gradient(
      180deg,
      #e2d5f3 8.5%,
      #dcd3e8 17%,
      #d9d2e2 21.25%,
      #e8e8e8 67%,
      #fff 100%
    )
  );
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
  filter: blur(159.68670654296875px);
  margin-top: -120px;
`;

export const InputContainer = styled.div`
  width: 328px;
  position: relative;
  margin-bottom: 16px;
`;

export const InputLabel = styled.div`
  color: #3d3a3a;
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
  color: #3d3a3a;
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
  color: #fff;
  text-align: left;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 160.5%; /* 19.26px */
  margin-top: 10px;
`;

export const RegisterBtn = styled.button`
  color: #fff;
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
