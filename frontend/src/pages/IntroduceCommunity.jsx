import React from "react";
import * as IC from "../styles/styledIntroduceCommunity";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function IntroduceCommunity() {
  const navigate = useNavigate();

  const goIntroduceTheme = () => {
    navigate(`/introducetheme`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <IC.Container>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <IC.Item>
            <IC.text1>전시를 기록하고</IC.text1>
            <IC.text2>타인과</IC.text2>
            <IC.purple1>공유</IC.purple1>
            <IC.text3>하며</IC.text3>
            <IC.purple2>감상</IC.purple2>
            <IC.text4>을 키워보세요!</IC.text4>
            <IC.img>
              <img
                src="./static/images/IntroduceCommunityImg.svg"
                alt="img1"
              ></img>
            </IC.img>
            <IC.button onClick={goIntroduceTheme}>
              <div id="text">Next</div>
              <div id="img">
                <img src="./static/images/PurpleArrow.svg" />
              </div>
            </IC.button>
          </IC.Item>{" "}
        </motion.div>
      </IC.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
