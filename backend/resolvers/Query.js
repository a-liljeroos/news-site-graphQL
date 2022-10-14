exports.Query = {
  articles: (parent, args, { db }) => {
    return db.articles;
  },
  writer: (parent, { writerId }, { db }) => {
    const writer = db.writers.find((writer) => writer.writerId === writerId);

    return writer;
  },
  article: (parent, { articleId }, { db }) => {
    const article = db.articles.find(
      (article) => article.articleId === articleId
    );
    return article;
  },
  articleByGenre: (parent, { genre }, { db }) => {
    var articlesByGenre = [];
    db.articles.find((article) => {
      if (article.genre === genre) {
        articlesByGenre.push(article);
      }
    });

    return articlesByGenre;
  },
};
