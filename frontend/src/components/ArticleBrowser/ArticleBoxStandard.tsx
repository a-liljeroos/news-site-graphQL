import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../data/Types";

const ArticleBoxStandard = ({
  article,
  articleId,
  images,
  edited,
  genre,
}: Article) => {
  const imageSource = require(`./images/${images.url}`);

  return (
    <>
      <Link to={`/news-site-template/artikkeli/${articleId}`}>
        <div className="article-box-standard">
          <img className="article-box-image" src={imageSource} alt="" />
          <h2 className="article-box-title">{article.title}</h2>
          <div className="article-box-info">
            {genre} - {edited.editTime}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArticleBoxStandard;
