import { fetchComments, updateComments, updatePosts } from 'actions';
import { ApiActionTypes, FETCH_ALL_COMMENTS, FETCH_ALL_POSTS } from 'appTypes';
import { Middleware } from 'redux';
import * as apiService from 'services/api.service';

export const apiMiddleware: Middleware = store => next => async (action: ApiActionTypes) => {
  switch (action.type) {
    case FETCH_ALL_POSTS: {
      const posts = await apiService.getPosts();

      store.dispatch(updatePosts(posts));
      store.dispatch(fetchComments());

      return next(action);
    }
    case FETCH_ALL_COMMENTS: {
      const comments = await apiService.getComments();

      store.dispatch(updateComments(comments));

      return next(action);
    }
    default: {
      return next(action);
    }
  }
};
