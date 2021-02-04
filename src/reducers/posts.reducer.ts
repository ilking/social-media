import { ApiActionTypes, PostsState, UPDATE_POSTS } from 'appTypes';

export function postsReducer(state: PostsState = { posts: [] }, action: ApiActionTypes): PostsState {
  switch (action.type) {
    case UPDATE_POSTS: {
      return { posts: action.posts };
    }
    default: {
      return state;
    }
  }
}
