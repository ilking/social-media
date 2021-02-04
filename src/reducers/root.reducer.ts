import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as reducers from 'reducers';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  posts: reducers.postsReducer,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
