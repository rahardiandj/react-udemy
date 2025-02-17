import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Alex" timeAgo="Today at 2:15PM" content="I like this subject"  avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:05PM" content="I like this writing"  avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))