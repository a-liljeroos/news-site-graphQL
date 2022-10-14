import { useQuery, gql } from "@apollo/client";
import { Article } from "../data/Types";

interface AllArticles {
  articles: Article[];
}

const GET_ARTICLES = gql`
  query Query {
    articles {
      articleId
      genre
      published
      edited {
        editTime
      }
      images {
        url
      }
      article {
        title
      }
    }
  }
`;

export const useArticles = () => {
  const { data, error, loading } = useQuery<AllArticles>(GET_ARTICLES);

  return {
    data,
    error,
    loading,
  };
};
