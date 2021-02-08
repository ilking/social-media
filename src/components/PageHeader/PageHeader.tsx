import React from 'react';
import 'components/PageHeader/PageHeader.scss';

const PageHeader: React.FC = () => {
  return (
    <div className='pageHeaderBackground'>
      <div className='pageHeaderText'>
        <div className='pageHeaderTextTitle'>Social Media</div>
        <div className='pageHeaderTextSubtext'>See us in the news!</div>
      </div>
    </div>
  );
};

export default PageHeader;
