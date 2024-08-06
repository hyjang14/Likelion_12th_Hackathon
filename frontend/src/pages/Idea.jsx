import React, { useEffect } from "react";
import * as I from "../styles/styledIdea";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Idea = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);

  const goMypage = () => {
    navigate(`/mypage`);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const response = await axios.get("http://52.79.34.113/api/posts/");
        setContent(response.data); // API 응답으로 받은 데이터를 state에 저장
      } catch (error) {
        console.error("후기글 조회 실패 :", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  return (
    <I.Container>
      <I.Bar>
        <I.BackBtn onClick={goBack} />
        <I.GroupSmall>
          <img src="./static/images/GroupSmall.svg" alt="GroupSmall" />
        </I.GroupSmall>
        <I.MyPage onClick={goMypage} />
      </I.Bar>
      <I.UserInput>포에버리즘: 우리의 세상의 끝으로</I.UserInput>
      {content.map((e) => (
        <I.Girl key={e.id}>
          <I.Info1>
            <img
              id="blackcircle"
              src="./static/images/BlackCirclePurple.svg"
              alt="photo"
            />
            <div id="name">{e.author || "Author"}</div>
            <div id="date">{e.createdAt}</div>
          </I.Info1>
          <I.Book1>
            <I.Number1 key={e.id}>
              <div id="detail">{e.title}</div>
            </I.Number1>
            <div id="detail">{e.content}</div>
          </I.Book1>
        </I.Girl>
      ))}
      {/* <I.Artist>
        <I.Info2>
          <img
            id="blackcircle"
            src="./static/images/BlackCirclePurple.svg"
            alt="photo"
          />
          <div id="name">고독한 예술가</div>
          <div id="date">1시간 전</div>
        </I.Info2>
        <I.Book2>
          <I.Number2>
            <div id="detail">{content}</div>
          </I.Number2>
        </I.Book2>
      </I.Artist> */}
    </I.Container>
  );
};

export default Idea;
