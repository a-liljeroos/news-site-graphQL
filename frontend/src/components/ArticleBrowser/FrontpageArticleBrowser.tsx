import Sivuovi from "../Ads/Sivuovi/Sivuovi";
import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";
import Zalanna from "../Ads/Zalanna/Zalanna";
import { useArticles } from "../../hooks/useArticles";

const FrontpageArticleBrowser = () => {
  let { data, error, loading } = useArticles();

  window.scrollTo(0, 0);
  if (loading) return <div>Spinner...</div>;
  if (error) return <div>something went wrong</div>;
  return (
    <div className="article-browser">
      <Sivuovi />
      {data?.articles.map((article, key) => (
        <ArticleBoxStandard {...article} />
      ))}
      <Zalanna />
    </div>
  );
};

export default FrontpageArticleBrowser;
