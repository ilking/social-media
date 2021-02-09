import { CommentActionTypes, CREATE_COMMENT } from 'appTypes';

export function createComment(postId: number, name: string, email: string, body: string): CommentActionTypes {
  return {
    type: CREATE_COMMENT,
    name,
    email,
    postId,
    body,
  };
}
