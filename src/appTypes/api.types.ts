export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
}

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';

interface FetchAllPostsAction {
  type: typeof FETCH_ALL_POSTS;
}

interface UpdatePostsAction {
  type: typeof UPDATE_POSTS;
  posts: Post[];
}

export type ApiActionTypes = FetchAllPostsAction | UpdatePostsAction;