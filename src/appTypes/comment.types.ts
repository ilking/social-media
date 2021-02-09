export const CREATE_COMMENT = 'CREATE_COMMENT';

interface CreateCommmentAction {
  type: typeof CREATE_COMMENT;
  name: string;
  email: string;
  postId: number;
  body: string;
}

export type CommentActionTypes = CreateCommmentAction;
