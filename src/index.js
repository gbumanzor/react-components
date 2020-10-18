import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container cards">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          content="Lorem ipsum dolor sit amet."
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Adam"
          content="This is a test comment"
          timeAgo="Today at 10:59AM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mary"
          content="Congrats Adam!"
          timeAgo="Yesterday at 5:40PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
