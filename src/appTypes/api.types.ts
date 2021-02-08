export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
}

export interface CommentsState {
  comments: Comment[];
}

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const FETCH_ALL_COMMENTS = 'FETCH_ALL_COMMENTS';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

interface FetchAllPostsAction {
  type: typeof FETCH_ALL_POSTS;
}

interface UpdatePostsAction {
  type: typeof UPDATE_POSTS;
  posts: Post[];
}

interface FetchAllCommentsAction {
  type: typeof FETCH_ALL_COMMENTS;
}

interface UpdateCommentsAction {
  type: typeof UPDATE_COMMENTS;
  comments: Comment[];
}

export type ApiActionTypes = FetchAllPostsAction | UpdatePostsAction | FetchAllCommentsAction | UpdateCommentsAction;
