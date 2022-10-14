import React from "react";
import Sivuovi from "../Ads/Sivuovi/Sivuovi";
import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";

import { useArticleByGenre } from "../../hooks/useArticleByGenre";
const PolitiikkaArticleBrowser = () => {
  const { data, error, loading } = useArticleByGenre("Politiikka");
  console.log(data);
  window.scrollTo(0, 0);

  return (
    <div className="article-browser">
      {data?.articleByGenre.map((article, key) => (
        <ArticleBoxStandard {...article} />
      ))}

      <Sivuovi />
    </div>
  );
};

export default PolitiikkaArticleBrowser;
