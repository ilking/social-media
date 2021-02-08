import 'components/CommentsRow/CommentsRow.scss';
import { Post, Comment } from 'appTypes';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';

interface CommentsRowProps {
  comments?: Comment[];
}

const CommentsRow: React.FC<CommentsRowProps> = props => {
  const { comments } = props;

  const [showComments, setShowComments] = useState(false);

  if (!comments || isEmpty(comments)) {
    return <div className='commentRowText empty'>0 comments</div>;
  }

  if (!showComments) {
    return (
      <div className='commentRowText' onClick={() => setShowComments(true)}>
        {comments.length} comments
      </div>
    );
  }

  const renderComments = () =>
    comments.map((comment: Comment) => (
      <div className='commentItem' key={`comment-${comment.postId}-${comment.id}`}>
        <BsArrowReturnRight className='commentReplyIcon' />
        <div className='commentText'>
          <div className='posterName'>{comment.name}</div>
          <div className='posterEmail'>{comment.email}</div>
          <div className='commentBody'>{comment.body}</div>
        </div>
      </div>
    ));

  return (
    <div className='commentsContainer'>
      <div className='commentRowText' onClick={() => setShowComments(false)}>
        Hide comments ({comments.length})
      </div>
      <div className='commentsList'>{renderComments()}</div>
    </div>
  );
};

export default CommentsRow;
