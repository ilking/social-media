import { fetchPosts } from 'actions';
import { Post } from 'appTypes';
import { isEmpty } from 'lodash';
import React, { useEffect } from 'react';
import { DispatchProp, connect } from 'react-redux';
import { RootState } from 'reducers/root.reducer';
import { postsSelector } from 'selectors/posts.selector';

interface PostsViewerProps extends DispatchProp {
  posts: Post[];
}

const PostsViewer: React.FC<PostsViewerProps> = props => {
  const { posts, dispatch } = props;

  useEffect(() => {
    if (isEmpty(posts)) {
      dispatch(fetchPosts());
    }
  }, [posts, dispatch]);

  return <div>{isEmpty(posts) ? 'Loading...' : 'Loaded!'}</div>;
};

const mapStateToProps = (state: RootState) => {
  return {
    posts: postsSelector(state),
  };
};

export default connect(mapStateToProps)(PostsViewer);
