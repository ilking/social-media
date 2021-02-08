import { ApiActionTypes, CommentsState, UPDATE_COMMENTS } from 'appTypes';

export function commentsReducer(state: CommentsState = { comments: [] }, action: ApiActionTypes): CommentsState {
  switch (action.type) {
    case UPDATE_COMMENTS: {
      return { comments: action.comments };
    }
    default: {
      return state;
    }
  }
}
