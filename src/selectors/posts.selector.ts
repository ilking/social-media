import { createSelector } from 'reselect';
import { RootState } from 'reducers/root.reducer';
import { Post, PostsState } from 'appTypes';
import { orderBy } from 'lodash';

export const postsSelector = createSelector<RootState, PostsState, Post[]>(
  state => state.posts,
  posts => {
    return orderBy(posts.posts || [], post => post.id, 'asc');
  }
);
