import React from "react";
import "./MostRead.scss";
import { Link } from "react-router-dom";
import { articles, Article } from "../../data/Index";

const MostRead = () => {
  var articlesCopy = articles;
  const mostRead = articlesCopy.sort((a: Article, b: Article) => {
    return b.views - a.views;
  });

  return (
    <div className="mostread-container">
      <h3>Luetuimmat</h3>
      <ol className="mostread-list">
        {mostRead.slice(0, 5).map((article, index) => {
          return (
            <Link
              key={index}
              to={"/news-site-template/artikkeli/" + article["artice-id"]}
            >
              <li className="mostread-list-item">
                <div className="mostread-list-item-index">{index + 1}.</div>
                <h5 className="mostread-list-item-title">
                  {article.article.title}
                </h5>
              </li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
};

export default MostRead;
