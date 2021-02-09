import { createComment } from 'actions/comments.actions';
import 'components/CommentInput/CommentInput.scss';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { DispatchProp, connect } from 'react-redux';

interface CommentInputProps extends DispatchProp {
  postId: number;
}

const CommentInput: React.FC<CommentInputProps> = props => {
  const { postId, dispatch } = props;
  const [userName, setUserName] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();
  const [commentBody, setCommentBody] = useState<string>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!userName || !userEmail || !commentBody) {
      return;
    }

    dispatch(createComment(postId, userName, userEmail, commentBody));

    setUserName('');
    setUserEmail('');
    setCommentBody('');
  };

  const handleSetName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handleSetBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(event.target.value);
  };

  return (
    <div className='commentInputRow'>
      <form className='commentForm' onSubmit={handleSubmit}>
        <div className='inputsContainer'>
          <input name='name' className='commentInput name' placeholder='Name' value={userName} onChange={handleSetName} />
          <input name='email' className='commentInput email' placeholder='Email' value={userEmail} onChange={handleSetEmail} />
        </div>
        <div className='commentBodyContainer'>
          <textarea name='commentBody' className='commentBody' rows={5} value={commentBody} onChange={handleSetBody} />
        </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default connect()(CommentInput);
