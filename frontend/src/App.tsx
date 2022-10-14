import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import FrontpageArticleBrowser from "./components/ArticleBrowser/FrontpageArticleBrowser";
import PolitiikkaArticleBrowser from "./components/ArticleBrowser/PolitiikkaArticleBrowser";
import UrheiluArticleBrowser from "./components/ArticleBrowser/UrheiluArticleBrowser";
import ViihdeArticleBrowser from "./components/ArticleBrowser/ViihdeArticleBrowser";
import Contacts from "./components/Contacts/Contacts";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MostRead from "./components/MostRead/MostRead";
import Navbar from "./components/NavBar/Navbar";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import NewsTip from "./components/NewsTip/NewsTip";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route
            path="/news-site-template"
            element={<FrontpageArticleBrowser />}
          />
          <Route
            path="/news-site-template/urheilu"
            element={<UrheiluArticleBrowser />}
          />
          <Route
            path="/news-site-template/viihde"
            element={<ViihdeArticleBrowser />}
          />
          <Route
            path="/news-site-template/politiikka"
            element={<PolitiikkaArticleBrowser />}
          />
          <Route
            path="/news-site-template/artikkeli/:articleId"
            element={<NewsArticle />}
          />
          <Route path="/news-site-template/palaute" element={<Feedback />} />
          <Route path="/news-site-template/uutisvihje" element={<NewsTip />} />
          <Route
            path="/news-site-template/yhteystiedot"
            element={<Contacts />}
          />
          <Route
            path="/news-site-template/kayttoehdot"
            element={<TermsOfUse />}
          />
        </Routes>
        <MostRead />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
