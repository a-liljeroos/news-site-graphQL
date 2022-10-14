import { useQuery, gql } from "@apollo/client";
import { Article } from "../data/Types";

interface ArticleVars {
  articleId: string | undefined;
}

interface IarticleData {
  article: Article;
}

const GET_ARTICLE = gql`
  query Query($articleId: ID!) {
    article(articleId: $articleId) {
      articleNumber
      articleId
      views
      geoArea
      published
      writerId
      genre
      edited {
        isEdited
        editTime
      }
      images {
        url
        image_text
      }
      video
      article {
        title
        lead
        paragraphs
      }
      topicTags
    }
  }
`;

export const useArticle = (id: string | undefined) => {
  const { data, error, loading } = useQuery<IarticleData, ArticleVars>(
    GET_ARTICLE,
    {
      variables: {
        articleId: id,
      },
    }
  );

  return {
    data,
    error,
    loading,
  };
};
