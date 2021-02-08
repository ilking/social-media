import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'App.scss';
import { PostsViewer } from 'components/PostsViewer';
import { PageHeader } from 'components/PageHeader';

const App: React.FC = () => {
  return (
    <div className='App'>
      <PageHeader />

      <PostsViewer />
    </div>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
