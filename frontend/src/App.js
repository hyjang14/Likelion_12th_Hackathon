import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ContentIntro } from "./pages/ContentIntro";
import { MusicCommunity } from "./pages/MusicCommunity";
import { BookCommunity } from "./pages/BookCommunity";
import { CommunityProfile } from "./pages/CommunityProfile";
import { MusicWrite } from "./pages/MusicWrite";
import { BookWrite } from "./pages/BookWrite";
import { ReviewCommunity } from "./pages/ReviewCommunity";
import Idea from "./pages/Idea";
import { Mypage } from "./pages/Mypage";
import { Welcome } from "./pages/Welcome";
import { AI } from "./pages/AI";
import { AIRecordList } from "./pages/AIRecordList";
import { BookDetail } from "./pages/BookDetail";
import { MusicDetail } from "./pages/MusicDetail";
import { Search } from "./pages/Search";
import { MypageRevise } from "./pages/MypageRevise";
import { AIResult } from "./pages/AIResult";
import { ReviewDetail } from "./pages/ReviewDetail";
import { Record } from "./pages/Record";
import { RecordWrite } from "./pages/RecordWrite";
import { MyRecordDetail } from "./pages/MyRecordDetail";
import { AIPast } from "./pages/AIPast";
import { AIPastDetail } from "./pages/AIPastDetail";
import { IntroduceAI } from "./pages/IntroduceAI";
import { IntroduceApp } from "./pages/IntroduceApp";
import { IntroduceContent } from "./pages/IntroduceContent";
import { IntroduceCommunity } from "./pages/IntroduceCommunity";
import { FirstLogin } from "./pages/FirstLogin";
import { ThemeProvider } from "./contexts/ThemeContext";
import { IntroduceTheme } from "./pages/IntroduceTheme";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contentintro" element={<ContentIntro />} />
          <Route path="/musiccommunity" element={<MusicCommunity />} />
          <Route path="/bookcommunity" element={<BookCommunity />} />
          <Route path="/communityprofile" element={<CommunityProfile />} />
          <Route path="/musicwrite" element={<MusicWrite />} />
          <Route path="/bookwrite" element={<BookWrite />} />
          <Route path="/reviewcommunity" element={<ReviewCommunity />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/idea" element={<Idea />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/musicdetail" element={<MusicDetail />} />
          <Route path="/bookdetail" element={<BookDetail />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/airecordlist" element={<AIRecordList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypagerevise" element={<MypageRevise />} />
          <Route path="/review" element={<ReviewCommunity />} />
          <Route path="/airesult" element={<AIResult />} />
          <Route path="/reviewdetail" element={<ReviewDetail />} />
          <Route path="/record" element={<Record />} />
          <Route path="/recordwrite" element={<RecordWrite />} />
          <Route path="/myrecorddetail" element={<MyRecordDetail />} />
          <Route path="/aipast" element={<AIPast />} />
          <Route path="/aipastdetail" element={<AIPastDetail />} />
          <Route path="/introduceai" element={<IntroduceAI />} />
          <Route path="/introducecommunity" element={<IntroduceCommunity />} />
          <Route path="/introducecontent" element={<IntroduceContent />} />
          <Route path="/introducetheme" element={<IntroduceTheme />} />
          <Route path="/introduceapp" element={<IntroduceApp />} />
          <Route path="/firstlogin" element={<FirstLogin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
