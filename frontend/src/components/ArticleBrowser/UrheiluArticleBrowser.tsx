import React from "react";
import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";
import Zalanna from "../Ads/Zalanna/Zalanna";
import { useArticleByGenre } from "../../hooks/useArticleByGenre";

const UrheiluArticleBrowser = () => {
  const { data, error, loading } = useArticleByGenre("Urheilu");
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

export default UrheiluArticleBrowser;
