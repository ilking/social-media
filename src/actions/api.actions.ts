import { ApiActionTypes, FETCH_ALL_POSTS, Post, UPDATE_POSTS } from 'appTypes';

export function fetchPosts(): ApiActionTypes {
  return {
    type: FETCH_ALL_POSTS,
  };
}

export function updatePosts(posts: Post[]): ApiActionTypes {
  return { type: UPDATE_POSTS, posts };
}
