export type Article = {
  "artice-no": number;
  "artice-id": string;
  views: number;
  "geo-area": string;
  genre: string;
  published: string;

  "writer-id": number;
  edited: {
    isEdited: boolean;
    editTime: string;
  };
  images: {
    image: {
      url: string;
      image_text: string;
    };
  };
  video: string;
  article: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  "topic-tags": string[];
};

export type Writer = {
  "writer-id": number;
  "first-name": string;
  "last-name": string;
  email: string;
  image: string;
};

export const writers: Writer[] = require("./writers.json");

export const articles: Article[] = require("./news.json");

export const genres: string[] = ["Urheilu", "Viihde", "Politiikka"];
