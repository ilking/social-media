import { ApiActionTypes, CommentActionTypes, CommentsState, CREATE_COMMENT, UPDATE_COMMENTS, Comment } from 'appTypes';

export function commentsReducer(
  state: CommentsState = { comments: [] },
  action: ApiActionTypes | CommentActionTypes
): CommentsState {
  switch (action.type) {
    case UPDATE_COMMENTS: {
      return { comments: action.comments };
    }
    case CREATE_COMMENT: {
      const newComment = {
        id: (state.comments || []).length,
        postId: action.postId,
        name: action.name,
        email: action.email,
        body: action.body,
      } as Comment;

      return { comments: [...state.comments, newComment] };
    }
    default: {
      return state;
    }
  }
}
