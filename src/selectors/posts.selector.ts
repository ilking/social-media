import { createSelector } from 'reselect';
import { RootState } from 'reducers/root.reducer';
import { Post, PostsState, Comment, CommentsState } from 'appTypes';
import { get } from 'lodash';
import { flow, map, orderBy, groupBy } from 'lodash/fp';

export const postsSelector = createSelector<RootState, PostsState, CommentsState, Post[]>(
  state => state.posts,
  state => state.comments,
  (posts, comments) => {
    const commentsByPostId = flow(
      orderBy((comment: Comment) => comment.id, 'asc'),
      groupBy((comment: Comment) => comment.postId)
    )(comments.comments || []);

    return flow(
      map((post: Post) => ({ ...post, comments: get(commentsByPostId, [post.id], []) })),
      orderBy((post: Post) => post.id, 'asc')
    )(posts.posts) as Post[];
  }
);
