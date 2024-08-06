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
  overflow: hidden;
`;

export const Group = styled.div`
  width: 157px;
  height: 118px;
  margin-bottom: -100px;
`;

export const Ellipse549 = styled.div`
  width: 206px;
  height: 205px;
  background-color: #a259ff;
  filter: blur(159.68670654296875px);
  margin-top: -120px;
`;

export const StartBtn = styled.button`
  width: 143px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: var(--Primary-color, #a259ff);
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%;
  cursor: pointer;
`;

export const InfoText = styled.div`
  color: #3d3a3a;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160.5%;
  margin-bottom: 20px;
`;
