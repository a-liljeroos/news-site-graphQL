import { useQuery, gql } from "@apollo/client";
import { Writer } from "../data/Types";

interface WriterVars {
  writerId: string | undefined;
}

const GET_WRITERS = gql`
  query Query($writerId: ID!) {
    writer(writerId: $writerId) {
      firstName
      lastName
      email
      image
    }
  }
`;

export const useWriter = (id: string | undefined) => {
  const { data, error, loading } = useQuery<Writer, WriterVars>(GET_WRITERS, {
    variables: {
      writerId: id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
