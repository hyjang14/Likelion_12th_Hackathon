import styled from "styled-components";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

// 스타일링된 Slider 컴포넌트

const StyledSliderContainer = styled.div`
  width: 290px;
  height: 360px;
  position: relative;
  margin-left: 1.5%;
`;

const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
    color: #9c9c9c;
  }

  .slick-dots li.slick-active button:before {
    color: #a259ff;
  }

  .slick-dots li {
    margin: 0 1px; /* 도트 간의 수평 간격 조정 */
  }
`;

const SimpleSlider = ({ newContent }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goContentIntro = (id) => {
    navigate(`/contentintro?id=${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <StyledSliderContainer>
        <StyledSlider {...settings}>
          {newContent.length > 0 ? (
            newContent.map((item) => (
              <div key={item.id} onClick={() => goContentIntro(item.id)}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))
          ) : (
            <p>최신 전시가 없습니다.</p>
          )}
        </StyledSlider>{" "}
      </StyledSliderContainer>
    </div>
  );
};

export default SimpleSlider;
