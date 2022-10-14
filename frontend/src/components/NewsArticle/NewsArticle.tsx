import React, { useEffect } from "react";
import "./NewsArticle.scss";
import AuthorInfo from "./AuthorInfo";
import { useParams } from "react-router-dom";
import Zalanna from "../Ads/Zalanna/Zalanna";
import { useArticle } from "../../hooks/useArticle";

const NewsArticle = () => {
  let { articleId } = useParams();
  const { data, loading, error } = useArticle(articleId);
  window.scrollTo(0, 0);
  if (loading) return <div>Spinner...</div>;
  if (error) return <div>something went wrong</div>;
  const articleImage = require(`../ArticleBrowser/images/${data?.article.images.url}`);
  return (
    <div className="news-article">
      <article>
        <h4 className="article-genre">UUTISET | {data?.article.genre}</h4>
        <h3 className="article-title">{data?.article.article.title}</h3>
        <h4 className="article-lead">{data?.article.article.lead}</h4>
        <div className="article-image-container">
          <img className="article-image" src={articleImage} alt="image" />
          <div className="caption-text">{data?.article.images.image_text}</div>
        </div>
        <AuthorInfo
          published={data?.article.published}
          writerId={data?.article.writerId}
        />
        <hr />
        <div className="article-body">
          {data?.article.article.paragraphs.map((paragraph: string) => (
            <p className="paragraph">{paragraph}</p>
          ))}
        </div>
        <div className="article-tags">
          {data?.article.topicTags.map((tag: string) => (
            <h4 className="article-tag">{tag.toUpperCase()}</h4>
          ))}
        </div>
      </article>
      <hr />
      <Zalanna />
    </div>
  );
};

export default NewsArticle;
