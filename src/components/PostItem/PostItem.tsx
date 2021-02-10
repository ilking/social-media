import 'components/PostItem/PostItem.scss';
import { Post } from 'appTypes';
import { isEmpty } from 'lodash';
import React from 'react';
import { CommentsRow } from 'components/CommentsRow';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = props => {
  const { post } = props;

  if (isEmpty(post)) {
    return <></>;
  }

  return (
    <div className='postContainer'>
      <div className='postTitleRow'>{post.title}</div>
      <div className='postBodyRow'>{post.body}</div>
      <CommentsRow comments={post.comments} postId={post.id} />
    </div>
  );
};

export default PostItem;
