import React from "react";
import * as C from "../styles/styledCommunityProfile";
import { useNavigate } from "react-router-dom";

export function CommunityProfile() {
  const navigate = useNavigate();

  const goMyPage = () => {
    navigate(`/mypage`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <C.Container>
        <C.TopBar>
          <C.BackBtn onClick={goBack} />
          <C.GroupSmall>
            <img src="./static/images/GroupSmall.svg" alt="GroupSmall" />
          </C.GroupSmall>
          <C.MyPage onClick={goMyPage} />
        </C.TopBar>
        <C.ProfileContainer>
          <C.BlackCirclePurple>
            <img
              id="photo"
              src="./static/images/BlackCirclePurple.svg"
              alt="Circle"
            />
          </C.BlackCirclePurple>
        </C.ProfileContainer>
        <C.UserInput type="text" placeholder="닉네임"></C.UserInput>
        <C.BigContainer>
          <C.SmallContainer></C.SmallContainer>
          {""}
          <C.SmallContainer></C.SmallContainer>
          {""}
          <C.SmallContainer></C.SmallContainer>
          {""}
        </C.BigContainer>
      </C.Container>
    </>
  );
}
