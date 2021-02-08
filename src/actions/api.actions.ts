import { ApiActionTypes, FETCH_ALL_COMMENTS, FETCH_ALL_POSTS, Post, Comment, UPDATE_COMMENTS, UPDATE_POSTS } from 'appTypes';

export function fetchPosts(): ApiActionTypes {
  return {
    type: FETCH_ALL_POSTS,
  };
}

export function updatePosts(posts: Post[]): ApiActionTypes {
  return { type: UPDATE_POSTS, posts };
}

export function fetchComments(): ApiActionTypes {
  return {
    type: FETCH_ALL_COMMENTS,
  };
}

export function updateComments(comments: Comment[]): ApiActionTypes {
  return { type: UPDATE_COMMENTS, comments };
}
