import React from "react";
import * as IA from "../styles/styledIntroduceApp";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function IntroduceApp() {
  const navigate = useNavigate();

  const goIntroduceContent = () => {
    navigate(`/introducecontent`);
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
            <IA.artheal>아트힐</IA.artheal>
            <IA.text1>은</IA.text1>
            <IA.text2>예술과 전시를 통해</IA.text2>
            <IA.artheal2>마음을 치유</IA.artheal2>
            <IA.text3>하고</IA.text3>
            <IA.artheal3>영감</IA.artheal3>
            <IA.text4>을 얻는 서비스입니다.</IA.text4>
            <IA.img>
              <img src="./static/images/IntroduceAppImg.svg" alt="img1"></img>
            </IA.img>
            <IA.button onClick={goIntroduceContent}>
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
