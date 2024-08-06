import React from "react";
import * as IA from "../styles/styledIntroduceAI";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function IntroduceAI() {
  const navigate = useNavigate();

  const goIntroduceCommunity = () => {
    navigate(`/introducecommunity`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <IA.Container>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }} // 컨테이너 전체를 사용하는 애니메이션
        >
          <IA.Item>
            <IA.purple1>AI 감정 분석</IA.purple1>
            <IA.text1>을 통해</IA.text1>
            <IA.text2>자신의 감정을 파악하고</IA.text2>
            <IA.purple2>솔루션</IA.purple2>
            <IA.text3>을 제공받아 보세요!</IA.text3>
            <IA.img>
              <img src="./static/images/IntroduceAIImg.svg" alt="img1"></img>
            </IA.img>
            <IA.button onClick={goIntroduceCommunity}>
              <div id="text">Next</div>
              <div id="img">
                <img src="./static/images/PurpleArrow.svg" />
              </div>
            </IA.button>
          </IA.Item>{" "}
        </motion.div>
      </IA.Container>
    </>
  );
}

const pageTransition = {
  initial: { x: "100%" }, // 오른쪽에서 시작
  animate: { x: "0%" }, // 가운데로 이동
  exit: { x: "-100%" }, // 왼쪽으로 이동
};
