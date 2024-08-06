import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-image: url("./static/images/DarkLanding.svg");
  background-size: cover; /* 추가: 이미지를 컨테이너 크기에 맞추기 위해 */
  background-repeat: no-repeat; /* 추가: 이미지 반복 방지 */
  justify-content: center;
  align-items: center;
  display: flex; /* 추가: flexbox 속성 적용 */
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

// 전시와 관련된
export const text1 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 25px;
  margin-top: 95px;
`;

// 콘텐츠를 공유
export const purple1 = styled.div`
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(
    180deg,
    #ac88d9 0%,
    #7656a0 25%,
    #5c3d83 37.5%,
    #412466 50%,
    #311b4d 75%,
    #291640 87.5%,
    #241439 93.75%,
    #221336 96.87%,
    #211235 98.44%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 25px;
`;

// 하고
export const text2 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 190px;
  margin-top: -29px;
`;

// 영감
export const purple2 = styled.div`
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(
    180deg,
    #ac88d9 0%,
    #7656a0 25%,
    #5c3d83 37.5%,
    #412466 50%,
    #311b4d 75%,
    #291640 87.5%,
    #241439 93.75%,
    #221336 96.87%,
    #211235 98.44%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 25px;
`;

// 을 찾아보아요
export const text3 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 80px;
  margin-top: -30px;
`;

export const img = styled.div`
  img {
    width: 247.452px;
    height: 500px;
    flex-shrink: 0;
    margin-top: 40px;
    margin-left: 25px;
  }
`;

// 버튼
export const button = styled.button`
  width: 68px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #eae3f2;
  background: #eae3f2;
  cursor: pointer;
  margin-top: 794px;
  margin-left: 250px;

  &:hover {
    #text {
      font-weight: 800;
    }
  }
  #text {
    color: #6f4f98;
    font-family: "Pretendard Variable";
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: -10px;
    margin-top: -3px;
  }

  #img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-left: 42px;
    margin-top: -16px;
  }
`;
