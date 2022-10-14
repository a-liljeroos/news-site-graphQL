import { useQuery, gql } from "@apollo/client";
import { Article } from "../data/Types";

interface ArticleVars {
  genre: string | undefined;
}

interface IarticleData {
  articleByGenre: Article[];
}

const GET_ARTICLE_BY_GENRE = gql`
  query Query($genre: ID!) {
    articleByGenre(genre: $genre) {
      genre
      article {
        title
      }
      articleNumber
      articleId
      views
      geoArea
      published
      writerId
      edited {
        isEdited
        editTime
      }
      images {
        url
        image_text
      }
      video
      topicTags
    }
  }
`;

export const useArticleByGenre = (id: string | undefined) => {
  const { data, error, loading } = useQuery<IarticleData, ArticleVars>(
    GET_ARTICLE_BY_GENRE,
    {
      variables: {
        genre: id,
      },
    }
  );

  return {
    data,
    error,
    loading,
  };
};
