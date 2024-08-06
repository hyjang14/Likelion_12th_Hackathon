import React from "react";
import * as IC from "../styles/styledIntroduceContent";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function IntroduceContent() {
  const navigate = useNavigate();

  const goIntroduceAI = () => {
    navigate(`/introduceai`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <IC.Container>
        {" "}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <IC.Item>
            <IC.text1>전시와 관련된</IC.text1>
            <IC.purple1>콘텐츠를 공유</IC.purple1>
            <IC.text2>하고</IC.text2>
            <IC.purple2>영감</IC.purple2>
            <IC.text3>을 찾아보아요!</IC.text3>
            <IC.img>
              <img
                src="./static/images/IntroduceContentImg.svg"
                alt="img1"
              ></img>
            </IC.img>
            <IC.button onClick={goIntroduceAI}>
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
