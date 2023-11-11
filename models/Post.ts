export interface Post {
  id: number;

  title: string;

  subtitle: string;

  published: Date,

  readTime: number,

  author: {
    firstName: string;

    lastName: string;
  },

  imageUrl: string;

  objectPosition?: string;
}