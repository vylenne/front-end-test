export type PostDataType = {
  id: string;
  image: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: number;
  user: {
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
  }
}

export type PostSortingDirection = 'oldestFirst' | 'newestFirst';
