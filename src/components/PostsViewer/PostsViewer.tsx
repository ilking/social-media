import 'components/PostsViewer/PostsViewer.scss';
import { fetchPosts } from 'actions';
import { Post } from 'appTypes';
import { PostItem } from 'components/PostItem';
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

  if (isEmpty(posts)) {
    return <div className='loadingSpinner'>Loading...</div>;
  }

  const renderPosts = () => posts.map((post: Post) => <PostItem key={`post-${post.id}`} post={post} />);

  return (
    <div className='postsViewer'>
      <div className='postForm'>Form</div>
      <div className='postList'>{renderPosts()}</div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    posts: postsSelector(state),
  };
};

export default connect(mapStateToProps)(PostsViewer);
