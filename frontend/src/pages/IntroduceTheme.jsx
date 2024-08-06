import React from "react";
import * as IC from "../styles/styledIntroduceTheme";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function IntroduceTheme() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/home`);
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
            <IC.button onClick={goHome}>
              <div id="text">Start</div>
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
