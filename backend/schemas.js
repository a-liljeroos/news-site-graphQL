const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    articles: [Article]
    article(articleId: ID!): Article
    articleByGenre(genre: ID!): [Article]
    writer(writerId: ID!): Writer
  }

  type Article {
    articleNumber: Int
    articleId: String
    views: Int
    geoArea: String
    genre: String
    published: String
    writerId: String
    edited: Edited
    images: Image
    video: String
    article: ArticleText
    topicTags: [String]
  }

  type Edited {
    isEdited: Boolean
    editTime: String
  }

  type Image {
    url: String
    image_text: String!
  }

  type ArticleText {
    title: String
    lead: String
    paragraphs: [String]
  }

  type Writer {
    writerId: String
    firstName: String
    lastName: String
    email: String
    image: String
  }
`;
