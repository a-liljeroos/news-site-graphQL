export interface Article {
  articleNumber: number;
  articleId: string;
  views: number;
  geoArea: string;
  genre: string;
  published: string;
  writerId: string;
  edited: {
    isEdited: boolean;
    editTime: string;
  };
  images: {
    url: string;
    image_text: string;
  };
  video: string;
  article: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  topicTags: string[];
}

export interface Writer {
  writer: {
    writerId: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  };
}
