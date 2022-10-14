import { useWriter } from "../../hooks/useWriters";
import "./AuthorInfo.scss";

interface IAuthorInfo {
  published: string | undefined;
  writerId: string | undefined;
}

const AuthorInfo = ({ published, writerId }: IAuthorInfo) => {
  const { data, loading, error } = useWriter(writerId);
  if (loading) return <div>Spinner...</div>;
  if (error)
    return (
      <div className="article-author-info">
        <div className="author-image"></div>
        <div className="article-author-data">
          <small>Ei toimittajatietoja</small>
        </div>
      </div>
    );

  const writerImage = require(`../../data/writer-images/${data?.writer.image}`);
  return (
    <div className="article-author-info">
      <img src={writerImage} className="author-image"></img>
      <div className="article-author-data">
        <small>{data?.writer.firstName + " " + data?.writer.lastName}</small>
        <small>{data?.writer.email}</small>
        <small>{published}</small>
      </div>
    </div>
  );
};

export default AuthorInfo;
