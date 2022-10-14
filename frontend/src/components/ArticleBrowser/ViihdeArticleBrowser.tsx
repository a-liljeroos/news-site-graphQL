import React from "react";
import Sivuovi from "../Ads/Sivuovi/Sivuovi";
import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";

import Zalanna from "../Ads/Zalanna/Zalanna";
import { useArticleByGenre } from "../../hooks/useArticleByGenre";
const ViihdeArticleBrowser = () => {
  const { data, error, loading } = useArticleByGenre("Viihde");
  console.log(data);
  window.scrollTo(0, 0);

  return (
    <div className="article-browser">
      {data?.articleByGenre.map((article, key) => (
        <ArticleBoxStandard {...article} />
      ))}

      <Zalanna />
    </div>
  );
};

export default ViihdeArticleBrowser;
